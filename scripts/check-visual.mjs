import { chromium } from '@playwright/test';
import assert from 'node:assert/strict';

const browser = await chromium.launch({ channel: 'chrome', headless: true });
const page = await browser.newPage();
const base = process.env.VISUAL_BASE_URL || 'http://127.0.0.1:4187';
const routes = ['/', '/products', '/products/amethyst', '/products/obsidian', '/products/glacier', '/formula', '/about', '/faq', '/journal', '/magnesium-deodorant', '/baking-soda-free-deodorant', '/sensitive-skin-deodorant', '/products/missing', '/missing'];
const errors = [];
page.on('pageerror', error => errors.push(error.message));
let checks = 0;
try {
  for (const width of [375, 768, 1440]) {
    await page.setViewportSize({ width, height: 1000 });
    for (const route of routes) {
      console.log(`Checking ${width}px ${route}`);
      await page.goto(`${base}${route}`);
      await page.evaluate(() => document.fonts.ready);
      const state = await page.evaluate(async () => {
        await Promise.all([...document.images].map(img => { img.loading = 'eager'; return img.decode().catch(() => {}); }));
        const h1 = document.querySelector('h1');
        return {
          overflow: document.documentElement.scrollWidth > innerWidth,
          font: document.fonts.check('300 16px Outfit') && getComputedStyle(document.body).fontFamily.startsWith('Outfit'),
          weight: getComputedStyle(h1).fontWeight,
          broken: [...document.images].filter(img => !img.naturalWidth).map(img => img.src),
          icons: [...document.querySelectorAll('svg.lucide')].every(icon => icon.getAttribute('stroke-width') === '1.5' && icon.getAttribute('fill') === 'none'),
          colors: [...document.querySelectorAll('body *')].filter(el => !['IMG','SVG','PATH','LINE','POLYLINE','CIRCLE'].includes(el.tagName)).flatMap(el => {
            const s = getComputedStyle(el);
            return [s.color, s.backgroundColor, s.borderTopColor];
          }).filter(color => {
            if (color.startsWith('oklab(')) {
              const lab = color.match(/[-+]?[0-9]*\.?[0-9]+(?:e[-+]?[0-9]+)?/gi).map(Number);
              return Math.abs(lab[1]) > .001 || Math.abs(lab[2]) > .001;
            }
            const values = color.match(/[\d.]+/g)?.map(Number);
            if (!values || (values.length === 4 && values[3] === 0)) return false;
            const [r,g,b] = values;
            return !(r === g && g === b) && !((r === 197 && g === 160 && b === 89) || (r === 177 && g === 139 && b === 69));
          }),
        };
      });
      assert.equal(state.overflow, false, `Overflow: ${route} at ${width}`);
      assert.equal(state.font, true, `Outfit: ${route}`);
      assert.equal(state.weight, '700', `Heading weight: ${route}`);
      assert.deepEqual(state.broken, [], `Broken images: ${route}`);
      assert.equal(state.icons, true, `Icon style: ${route}`);
      assert.deepEqual([...new Set(state.colors)], [], `Unexpected UI colors: ${route}`);
      const menu = page.getByRole('button', { name: 'Open menu' });
      await menu.click();
      await page.getByRole('navigation', { name: 'Main navigation' }).waitFor();
      assert.equal(await page.getByRole('button', { name: 'Close menu' }).getAttribute('aria-expanded'), 'true');
      await page.keyboard.press('Escape');
      assert.equal(await menu.getAttribute('aria-expanded'), 'false');
      checks++;
    }
    await page.goto(base);
    await page.route('**/api/subscribe', route => route.fulfill({ status: 503, json: { ok: false, error: 'unavailable' } }));
    await page.locator('#subscribe-email').fill('test@example.com');
    await page.getByRole('button', { name: 'Subscribe', exact: true }).click();
    await page.getByRole('status').filter({ hasText: 'Signup is temporarily unavailable.' }).waitFor();
    assert.equal(await page.locator('#subscribe-email').inputValue(), 'test@example.com');
    await page.unroute('**/api/subscribe');
    await page.route('**/api/subscribe', route => route.fulfill({ json: { ok: true } }));
    await page.getByRole('button', { name: 'Subscribe', exact: true }).click();
    await page.getByRole('status').filter({ hasText: 'Your subscription request has been received.' }).waitFor();
    assert.equal(await page.locator('#subscribe-email').inputValue(), '');
    await page.unroute('**/api/subscribe');
    await page.screenshot({ path: `/tmp/stealth-home-${width}.png`, fullPage: true });
    await page.goto(`${base}/products`);
    await page.screenshot({ path: `/tmp/stealth-products-${width}.png`, fullPage: true });
  }
  await page.goto(`${base}/products/amethyst`);
  const button = page.getByRole('button', {name: /Add to bag/});
  await button.focus();
  assert.equal(await button.evaluate(el => getComputedStyle(el).outlineColor), 'rgb(17, 17, 17)');
  await button.hover();
  await page.waitForTimeout(300);
  assert.equal(await button.evaluate(el => getComputedStyle(el).backgroundColor), 'rgb(177, 139, 69)');
  assert.deepEqual(errors, []);
  console.log(`Passed ${checks} route/viewport checks, menu, font, images, palette, icons, subscription, focus and hover.`);
} finally { await browser.close(); }
