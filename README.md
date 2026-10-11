# STEALTH Tetra — песочница (4 шага)

Multi-step воронка для Facebook-трафика в итальянском стиле: слоновая кость, глубокий зелёный, золото, арочные карточки. Один шрифт на всё приложение — Cormorant Garamond.

## Страницы / шаги

1. **Главная** — логотип, оффер «1 из 100 + шанс выиграть iPhone 18» и кнопка «Выбрать аромат»  
2. **Выбор вида** — 3 карточки (Amethyst / Glacier / Obsidian), горизонтальный скролл с «выглядыванием» следующей  
3. **Объём** — 30 мл × 2 или 70 мл × 1  
4. **Заявка** — Telegram / WhatsApp / Facebook / Email → отправка в Telegram-бот  
5. **Чек** — после отправки «печатается» бумажный чек с зубчатым краем, штрихкодом и штампом  

## Локальный просмотр

Откройте `index.html` в браузере (или через любой static server).  
Без Worker заявка уйдёт в fallback (кнопки Telegram / WhatsApp).

## Деплой на Cloudflare Pages + Worker

1. Установите [Wrangler](https://developers.cloudflare.com/workers/wrangler/)
2. В проекте:

```bash
cd stealth-tetra-site
npx wrangler pages project create stealth-tetra   # или workers
```

3. Секреты (обязательно для отправки в Telegram):

```bash
npx wrangler secret put TELEGRAM_BOT_TOKEN
npx wrangler secret put TELEGRAM_CHAT_ID
```

- `TELEGRAM_BOT_TOKEN` — токен бота от @BotFather  
- `TELEGRAM_CHAT_ID` — ваш chat id (можно узнать через @userinfobot)

4. Деплой:

```bash
npx wrangler deploy
# или
npx wrangler pages deploy .
```

## Структура

```
stealth-tetra-site/
├── index.html          # вся воронка (SPA)
├── src/worker.js       # /api/order → Telegram
├── wrangler.jsonc
├── assets/
│   ├── bottles/        # webp флаконов
│   ├── cases/          # кейсы
│   └── icons/          # мессенджеры
└── README.md
```

## Кастомизация

- Тексты и названия — в начале `<script>` в `index.html` (`VARIANTS`, `PACKS`)  
- Цвета и шрифт — CSS-переменные в `:root` (`--font` задаёт единственный шрифт)  
- Каналы связи — массив `CHANNELS`  

## Счётчик участников и номер заявки

Номер заявки (1–100) и счётчик «Уже участвуют» хранятся в Cloudflare KV:

```bash
npx wrangler kv namespace create COUNTER
```

Подставьте полученный `id` в `wrangler.jsonc` (`kv_namespaces`). Без KV сайт работает, но счётчик на главной скрыт, а номер на чеке случайный (только для песочницы).
