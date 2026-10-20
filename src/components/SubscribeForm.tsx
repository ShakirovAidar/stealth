import { Check, Info } from 'lucide-react';
import { useRef, useState } from 'react';
import type { FormEvent } from 'react';

export default function SubscribeForm() {
  const pending = useRef(false);
  const [state, setState] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (pending.current) return;
    const form = event.currentTarget;
    const data = new FormData(form);
    pending.current = true;
    setState('sending');
    setMessage('Sending…');
    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: data.get('email'), website: data.get('website') }),
        signal: AbortSignal.timeout(15000),
      });
      const result = await response.json();
      if (!response.ok || result.ok !== true) {
        const messages: Record<string, string> = {
          invalid_email: 'Please enter a valid email address.',
          rate_limited: 'Too many attempts. Please wait a minute and try again.',
          unavailable: 'Signup is temporarily unavailable. Please try again later.',
        };
        throw new Error(messages[result.error] || 'Could not send your request. Please try again.');
      }
      setState('success');
      setMessage('Thank you! Your subscription request has been received.');
      form.reset();
    } catch (error) {
      setState('error');
      setMessage(error instanceof Error && !['SyntaxError', 'TypeError', 'TimeoutError', 'AbortError'].includes(error.name)
        ? error.message : 'Could not send your request. Please try again.');
    } finally { pending.current = false; }
  }

  const StatusIcon = state === 'success' ? Check : Info;
  return (
    <>
      <form className="mt-8 flex w-full max-w-sm flex-col gap-3 sm:flex-row" onSubmit={submit} aria-busy={state === 'sending'}>
        <label htmlFor="subscribe-email" className="sr-only">Email address</label>
        <input id="subscribe-email" type="email" name="email" required maxLength={254} autoComplete="email"
          placeholder="Email address" disabled={state === 'sending'} aria-describedby={message ? 'subscribe-status' : undefined}
          className="min-w-0 flex-1 border border-text bg-white/95 px-4 py-3 text-base text-text placeholder:text-text" />
        <div hidden aria-hidden="true">
          <label htmlFor="subscribe-website">Website</label>
          <input id="subscribe-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
        </div>
        <button type="submit" disabled={state === 'sending'}
          className="inline-flex items-center justify-center bg-action hover:bg-action-hover px-6 py-3 text-sm font-medium uppercase tracking-[0.08em] text-text transition-colors">
          {state === 'sending' ? 'Sending…' : 'Subscribe'}
        </button>
      </form>
      <p id="subscribe-status" className="mt-3 flex items-start gap-2 text-base text-text" role="status" aria-live="polite" aria-atomic="true">
        {message && <><StatusIcon size={20} strokeWidth={1.5} className="shrink-0" aria-hidden="true" />{message}</>}
      </p>
    </>
  );
}
