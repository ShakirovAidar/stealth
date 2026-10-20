import { test } from 'node:test';
import assert from 'node:assert/strict';
import worker from './index.js';

const env = () => ({
  TELEGRAM_BOT_TOKEN: 'test-token', TELEGRAM_CHAT_ID: 'test-chat',
  SUBSCRIBE_RATE_LIMITER: { limit: async () => ({ success: true }) },
  ASSETS: { fetch: async () => new Response('asset') },
});
const request = (body = { email: 'test@example.com', website: '' }, headers = {}, method = 'POST', path = '/api/subscribe') =>
  new Request(`https://stealth.example${path}`, {
    method, headers: { Origin: 'https://stealth.example', 'Content-Type': 'application/json', 'CF-Connecting-IP': '192.0.2.1', ...headers },
    ...(method === 'GET' ? {} : { body: typeof body === 'string' ? body : JSON.stringify(body) }),
  });

test('routes API separately and preserves static assets', async () => {
  assert.equal(await (await worker.fetch(request(null, {}, 'GET', '/about'), env())).text(), 'asset');
  assert.equal((await worker.fetch(request(null, {}, 'GET', '/api/missing'), env())).status, 404);
  const response = await worker.fetch(request(null, {}, 'GET'), env());
  assert.equal(response.status, 405);
  assert.equal(response.headers.get('Allow'), 'POST');
});

test('rejects foreign origins, non-JSON and malformed or oversized bodies', async () => {
  assert.equal((await worker.fetch(request({}, { Origin: 'https://other.example' }), env())).status, 403);
  assert.equal((await worker.fetch(request({}, { 'Content-Type': 'text/plain' }), env())).status, 415);
  for (const body of ['{', 'null', '[]']) assert.equal((await worker.fetch(request(body), env())).status, 400);
  assert.equal((await worker.fetch(request('x'.repeat(2049)), env())).status, 413);
});

test('rejects invalid emails and honeypot submissions before contacting Telegram', async t => {
  t.mock.method(globalThis, 'fetch', async () => assert.fail('Must not send invalid submissions'));
  for (const email of ['', 'invalid', 'a@b', 'a\nb@example.com', 'x'.repeat(255) + '@example.com', 7]) {
    assert.equal((await worker.fetch(request({ email }), env())).status, 400);
  }
  assert.equal((await worker.fetch(request({ email: 'test@example.com', website: 'spam' }), env())).status, 400);
});

test('missing secrets and rate limit binding fail closed', async () => {
  for (const field of ['TELEGRAM_BOT_TOKEN', 'TELEGRAM_CHAT_ID', 'SUBSCRIBE_RATE_LIMITER']) {
    const bindings = env(); delete bindings[field];
    assert.equal((await worker.fetch(request(), bindings)).status, 503);
  }
});

test('rate limiting blocks delivery and supplies retry delay', async t => {
  t.mock.method(globalThis, 'fetch', async () => assert.fail('Must not send limited submissions'));
  const bindings = env();
  bindings.SUBSCRIBE_RATE_LIMITER.limit = async ({ key }) => {
    assert.equal(key, 'stealth:subscribe:192.0.2.1'); return { success: false };
  };
  const response = await worker.fetch(request(), bindings);
  assert.equal(response.status, 429);
  assert.equal(response.headers.get('Retry-After'), '60');
});

test('sends trimmed email to configured chat and confirms Telegram acceptance', async t => {
  t.mock.method(globalThis, 'fetch', async (url, options) => {
    assert.equal(url, 'https://api.telegram.org/bottest-token/sendMessage');
    const body = JSON.parse(options.body);
    assert.equal(body.chat_id, 'test-chat');
    assert.match(body.text, /Email: test@example.com\nWebsite: stealth.example/);
    assert.equal(body.parse_mode, undefined);
    assert.equal(options.signal instanceof AbortSignal, true);
    return Response.json({ ok: true });
  });
  const response = await worker.fetch(request({ email: ' test@example.com ' }), env());
  assert.equal(response.status, 200);
  assert.deepEqual(await response.json(), { ok: true });
  assert.equal(response.headers.get('Cache-Control'), 'no-store');
});

test('upstream rejection, malformed reply and timeout never report success or leak secrets', async t => {
  for (const upstream of [
    async () => Response.json({ ok: false, description: 'private details' }),
    async () => Response.json({ ok: false }, { status: 429 }),
    async () => new Response('bad gateway'),
    async () => { throw new Error('secret-token-in-url'); },
  ]) {
    const mocked = t.mock.method(globalThis, 'fetch', upstream);
    const response = await worker.fetch(request(), env());
    assert.equal(response.status, 502);
    assert.deepEqual(await response.json(), { ok: false, error: 'delivery_failed' });
    mocked.mock.restore();
  }
});
