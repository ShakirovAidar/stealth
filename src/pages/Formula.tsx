import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ingredients = [
  {
    group: 'The Core of the Formula',
    items: [
      {
        name: 'Magnesium Hydroxide',
        desc: 'The mineral foundation of STEALTH\'s odor-control system. Used as part of our approach to managing everyday underarm odor without aluminum salts.',
      },
      {
        name: 'Triethyl Citrate',
        desc: 'An odor-control ingredient that helps reduce the formation of odor. Works alongside magnesium hydroxide as part of the formula\'s overall approach to freshness.',
      },
    ],
  },
  {
    group: 'Skin & Glide',
    items: [
      { name: 'Jojoba Oil', desc: 'A lightweight plant oil that helps give the formula a smooth glide and comfortable skin feel.' },
      { name: 'Meadowfoam Seed Oil', desc: 'A stable plant oil that contributes to the formula\'s smooth, conditioned feel.' },
      { name: 'Mango Butter', desc: 'A rich plant butter that helps create a soft, comfortable application.' },
      { name: 'Shea Butter', desc: 'Adds a creamy texture and helps give the formula a comfortable skin feel.' },
      { name: 'MCT Oil', desc: 'A lightweight oil that helps with the formula\'s texture and glide.' },
    ],
  },
  {
    group: 'Structure & Finish',
    items: [
      { name: 'Beeswax', desc: 'Provides structure and helps the deodorant maintain its stick form.' },
      { name: 'Rice Bran Wax', desc: 'Works with beeswax to give the formula its consistency and stability.' },
      { name: 'Spherical Silica Microspheres', desc: 'Help create the formula\'s texture and contribute to a smooth, dry-feeling finish.' },
    ],
  },
  {
    group: 'Protection & Scent',
    items: [
      { name: 'Tocopherol', desc: 'Also known as vitamin E, tocopherol is used as an antioxidant in the formula.' },
      { name: 'Essential Oils', desc: 'Used to create the individual STEALTH scent profiles. The same core formula is used across the collection, with the scent expression changing between Amethyst, Obsidian and Glacier.' },
    ],
  },
];

export default function Formula() {
  return (
    <div className="site-container article-page py-12 md:py-16">
      <h1 className="font-sans text-3xl md:text-4xl text-text tracking-tight font-bold">The STEALTH Formula</h1>
      <p className="mt-4 text-lg text-text">
        What's Inside — And What Isn't
      </p>
      <p className="mt-3 text-text">
        A considered formula built around magnesium hydroxide, odor control and a smooth, comfortable
        application. Every ingredient has a reason to be here.
      </p>

      {ingredients.map((section) => (
        <section key={section.group} className="mt-12">
          <h2 className="text-xl font-semibold mb-6">{section.group}</h2>
          <div className="space-y-6">
            {section.items.map((item) => (
              <div key={item.name}>
                <h3 className="font-semibold">{item.name}</h3>
                <p className="mt-1 text-base text-text">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>
      ))}

      <section className="mt-16 border-t border-border pt-12">
        <h2 className="text-xl font-semibold mb-6">What's Not In the Formula</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold">No Baking Soda</h3>
            <p className="mt-1 text-base text-text">
              STEALTH contains no baking soda. We use a magnesium-based odor-control system instead.
            </p>
            <Link
              to="/baking-soda-free-deodorant"
              className="mt-2 inline-block text-sm text-text underline underline-offset-4"
            >
              Learn about baking-soda-free deodorant <ArrowRight size={20} strokeWidth={1.5} className="inline-block shrink-0 align-middle" aria-hidden="true" />
            </Link>
          </div>
          <div>
            <h3 className="font-semibold">No Aluminum Salts</h3>
            <p className="mt-1 text-base text-text">STEALTH does not use aluminum salts.</p>
          </div>
          <div>
            <h3 className="font-semibold">No Complicated Ingredient List</h3>
            <p className="mt-1 text-base text-text">
              Every ingredient has a defined role — from odor control and texture to structure and
              scent. We don't add ingredients simply to make the list look impressive.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-12 p-6 bg-surface-muted">
        <h2 className="text-lg font-semibold">The Full Ingredient List</h2>
        <p className="mt-3 text-base text-text leading-relaxed">
          Magnesium Hydroxide, Triethyl Citrate, Meadowfoam Seed Oil, Jojoba Oil, Mango Butter, Shea
          Butter, MCT Oil, Beeswax, Rice Bran Wax, Spherical Silica Microspheres, Tocopherol,
          Essential Oils.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-semibold mb-4">Why These Ingredients?</h2>
        <p className="text-text mb-4">STEALTH is built around three simple priorities:</p>
        <ul className="space-y-3 text-base">
          <li>
            <strong>Odor Control</strong> — Magnesium hydroxide and triethyl citrate form the core
            of the odor-control system.
          </li>
          <li>
            <strong>Comfort</strong> — Plant oils and butters help create a smooth, comfortable
            application.
          </li>
          <li>
            <strong>Structure</strong> — Beeswax, rice bran wax and silica help create the texture
            and performance of the stick.
          </li>
        </ul>
      </section>

      <div className="mt-12 text-center">
        <Link
          to="/products"
          className="inline-flex items-center px-6 py-3 bg-action hover:bg-action-hover text-text text-sm font-medium"
        >
          Shop the Collection
        </Link>
      </div>
    </div>
  );
}
