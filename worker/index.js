const reply = (status, error, headers = {}) => Response.json(
  error ? { ok: false, error } : { ok: true },
  { status, headers: { 'Cache-Control': 'no-store', ...headers } },
);

async function readPayload(request) {
  const reader = request.body?.getReader();
  if (!reader) throw new Error('empty');
  const chunks = [];
  let size = 0;
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    size += value.byteLength;
    if (size > 2048) { await reader.cancel(); throw new Error('large'); }
    chunks.push(value);
  }
  const bytes = new Uint8Array(size);
  let offset = 0;
  for (const chunk of chunks) { bytes.set(chunk, offset); offset += chunk.length; }
  return JSON.parse(new TextDecoder().decode(bytes));
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (!url.pathname.startsWith('/api/')) return env.ASSETS.fetch(request);
    if (url.pathname !== '/api/subscribe') return reply(404, 'not_found');
    if (request.method !== 'POST') return reply(405, 'method_not_allowed', { Allow: 'POST' });
    if (request.headers.get('Origin') !== url.origin) return reply(403, 'forbidden');
    if (request.headers.get('Content-Type')?.split(';')[0].trim() !== 'application/json') {
      return reply(415, 'invalid_content_type');
    }
    if (!env.TELEGRAM_BOT_TOKEN || !env.TELEGRAM_CHAT_ID || !env.SUBSCRIBE_RATE_LIMITER) {
      return reply(503, 'unavailable');
    }
    try {
      const { success } = await env.SUBSCRIBE_RATE_LIMITER.limit({
        key: `stealth:subscribe:${request.headers.get('CF-Connecting-IP') || 'local'}`,
      });
      if (!success) return reply(429, 'rate_limited', { 'Retry-After': '60' });
    } catch { return reply(503, 'unavailable'); }

    let data;
    try { data = await readPayload(request); }
    catch (error) { return reply(error.message === 'large' ? 413 : 400, 'invalid_request'); }
    if (!data || typeof data !== 'object' || Array.isArray(data)) return reply(400, 'invalid_request');
    if (data.website) return reply(400, 'invalid_request');
    const email = typeof data.email === 'string' ? data.email.trim() : '';
    if (email.length > 254 || !/^[^\s@<>\x00-\x1f\x7f]+@[^\s@<>\x00-\x1f\x7f]+\.[^\s@<>\x00-\x1f\x7f]+$/.test(email)) {
      return reply(400, 'invalid_email');
    }
    try {
      const response = await fetch(`https://api.telegram.org/bot${env.TELEGRAM_BOT_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: env.TELEGRAM_CHAT_ID,
          text: `STEALTH — new subscription request\nEmail: ${email}\nWebsite: ${url.hostname}`,
          link_preview_options: { is_disabled: true },
        }),
        signal: AbortSignal.timeout(8000),
      });
      const result = await response.json();
      if (!response.ok || result.ok !== true) return reply(502, 'delivery_failed');
      return reply(200);
    } catch { return reply(502, 'delivery_failed'); }
  },
};
