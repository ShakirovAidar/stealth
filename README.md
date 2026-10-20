# STEALTH

React, TypeScript and Vite storefront, deployed to Cloudflare Workers.

## Telegram subscription requests on Cloudflare Workers

The homepage form posts to `/api/subscribe`. The Worker validates the email and
forwards a plain-text request to your configured Telegram chat. Success is shown
only after Telegram accepts the message. This collects requests; it does not
create a mailing list or send marketing emails.

### One-time setup

1. Create a bot with [@BotFather](https://t.me/BotFather) and copy its token.
2. Open the bot in Telegram and press **Start**, or add it to the destination
   group and allow it to send messages. Send a message in that chat.
3. Obtain the chat ID using Telegram's `getUpdates` method from a trusted local
   API client; inspect `result[].message.chat.id`. Do not put the bot token in
   browser code, public URLs, screenshots or source control. Bots with an existing
   webhook need their webhook integration to supply the chat ID instead.
4. In Cloudflare → Workers & Pages → **stealth** → Settings → Variables and
   Secrets, add **encrypted secrets** `TELEGRAM_BOT_TOKEN` and
   `TELEGRAM_CHAT_ID`. These are runtime Worker secrets, **not** `VITE_*` build
   variables. Save and deploy. Alternatively, run `npx wrangler secret put
   TELEGRAM_BOT_TOKEN` and `npx wrangler secret put TELEGRAM_CHAT_ID` locally.
5. Run `npm run deploy` with your Cloudflare account authenticated. Existing
   custom domains stay configured in Cloudflare. The configuration is for
   **Workers with Static Assets**, not a drag-and-drop Pages deployment.
6. Submit your email on the deployed site and check that the bot notification
   arrives and that the site displays confirmation.

No credentials are included in this repository. The UI intentionally has no
public token-settings screen. Missing secrets return a temporary-unavailable
message rather than pretending to subscribe the visitor.

### Local development and verification

Copy `.dev.vars.example` to `.dev.vars` and replace the placeholders locally.
`.dev.vars` is ignored by Git. `npm run dev:cloudflare` builds the site and starts
both assets and the API using Wrangler. Submissions with real secrets send real
Telegram messages. `npm run dev` and `npm run preview` serve only the frontend.

- `npm run test:subscribe`: mocked server tests; never sends Telegram messages.
- `npm run check:visual`: browser checks against the preview server on port 4187;
  subscription responses are mocked. Override with `VISUAL_BASE_URL` if needed.
- `npx wrangler deploy --dry-run --outdir /tmp/stealth-worker-check`: validate the
  Worker bundle and configuration without publishing.

Requests require a same-origin JSON POST, a valid email and an empty honeypot.
Bodies are limited to 2 KiB; Cloudflare limits submissions to three attempts per
minute per IP per Cloudflare location. Shared networks share this allowance.
Telegram delivery times out after eight seconds. Rejected or uncertain deliveries
are not automatically retried, to avoid duplicate notifications. User retries
can still duplicate a request if Telegram accepted it before a connection failure.
The Worker does not log tokens, email addresses or Telegram response details.

References: [Worker asset routing](https://developers.cloudflare.com/workers/static-assets/routing/worker-script/),
[rate limit bindings](https://developers.cloudflare.com/workers/runtime-apis/bindings/rate-limit/),
[Telegram Bot API](https://core.telegram.org/bots/api#sendmessage).
