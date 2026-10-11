const json = (o, s = 200) =>
  new Response(JSON.stringify(o), {
    status: s,
    headers: {
      "content-type": "application/json",
      "cache-control": "no-store",
      "access-control-allow-origin": "*",
    },
  });

const esc = (s) =>
  String(s ?? "").replace(/[&<>]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;" }[c]));

function validate(d) {
  if (!d || typeof d !== "object") return null;
  const variant = String(d.variant || "").trim().slice(0, 80);
  const pack = String(d.pack || "").trim().slice(0, 80);
  const channel = String(d.channel || "").trim().slice(0, 40);
  const contact = String(d.contact || "").trim().slice(0, 200);
  const lang = String(d.lang || "ru").slice(0, 8);
  if (!variant || !pack || !channel || !contact) return null;
  const allowed = ["Telegram", "WhatsApp", "Facebook", "Email"];
  if (!allowed.includes(channel)) return null;
  return { variant, pack, channel, contact, lang };
}

// Счётчик участников хранится в KV (binding COUNTER). Без KV вернёт null.
async function getCount(env) {
  if (!env.COUNTER) return null;
  try {
    const n = parseInt(await env.COUNTER.get("count"), 10);
    return Number.isFinite(n) ? n : 0;
  } catch {
    return null;
  }
}

export default {
  async fetch(req, env) {
    const url = new URL(req.url);

    if (url.pathname === "/api/count" && req.method === "GET") {
      return json({ ok: true, count: await getCount(env) });
    }

    if (url.pathname !== "/api/order") {
      return env.ASSETS.fetch(req);
    }

    if (req.method === "OPTIONS") {
      return new Response(null, {
        headers: {
          "access-control-allow-origin": "*",
          "access-control-allow-methods": "POST, OPTIONS",
          "access-control-allow-headers": "content-type",
        },
      });
    }

    if (req.method !== "POST") return json({ ok: false }, 405);

    if (!(req.headers.get("content-type") || "").includes("application/json")) {
      return json({ ok: false }, 415);
    }

    let d;
    try {
      d = await req.json();
    } catch {
      return json({ ok: false }, 400);
    }

    const order = validate(d);
    if (!order) return json({ ok: false, error: "data" }, 422);

    const contactLink =
      order.channel === "WhatsApp"
        ? `https://wa.me/${order.contact.replace(/\D/g, "")}`
        : order.channel === "Email"
        ? `mailto:${order.contact}`
        : order.channel === "Telegram"
        ? `https://t.me/${order.contact.replace(/^@/, "")}`
        : /^https?:\/\//i.test(order.contact)
        ? order.contact
        : `https://${order.contact}`;

    const current = await getCount(env);
    const number = current === null ? null : current + 1;

    const text = [
      "🆕 <b>New STEALTH order request</b>",
      number ? `🎟 Raffle №: <b>${number}</b> / 100` : null,
      `🧪 Scent: ${esc(order.variant)}`,
      `📦 Size: 70 g × 1`,
      `💵 Price: 1 000 ฿ COD`,
      `🚚 Delivery: Free`,
      `💬 ${esc(order.channel)}: <a href="${esc(contactLink)}">${esc(order.contact)}</a>`,
      `🌐 Lang: ${order.lang.toUpperCase()}`,
    ].filter(Boolean).join("\n");

    if (!env.TELEGRAM_BOT_TOKEN || !env.TELEGRAM_CHAT_ID) {
      return json({ ok: false, error: "not_configured" }, 503);
    }

    try {
      const r = await fetch(
        `https://api.telegram.org/bot${env.TELEGRAM_BOT_TOKEN}/sendMessage`,
        {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({
            chat_id: env.TELEGRAM_CHAT_ID,
            text,
            parse_mode: "HTML",
            disable_web_page_preview: true,
          }),
          signal: AbortSignal.timeout(8000),
        }
      );
      if (r.ok) {
        let saved = null;
        if (number !== null) {
          try {
            await env.COUNTER.put("count", String(number));
            saved = number;
          } catch {}
        }
        return json({ ok: true, number: saved, count: saved });
      }
      return json({ ok: false, error: "telegram" }, 502);
    } catch {
      return json({ ok: false, error: "telegram" }, 502);
    }
  },
};
