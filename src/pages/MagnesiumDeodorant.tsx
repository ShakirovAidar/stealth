import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';

export default function MagnesiumDeodorant() {
  return (
    <div className="site-container article-page py-12 md:py-16">
      <p className="text-base font-medium text-text uppercase tracking-wide mb-2">
        Learn
      </p>
      <h1 className="font-sans text-3xl md:text-4xl text-text tracking-tight font-bold">
        Magnesium Deodorant: How It Works
      </h1>
      <p className="mt-4 text-lg text-text">
        A natural approach to everyday odor control, powered by magnesium hydroxide.
      </p>

      <section className="mt-12 space-y-6">
        <h2 className="text-xl font-semibold">What Is Magnesium Deodorant?</h2>
        <p className="text-text">
          Magnesium deodorant uses magnesium-based ingredients to help manage the conditions that
          lead to underarm odor.
        </p>
        <p className="text-text">
          STEALTH uses <strong>magnesium hydroxide</strong> as the mineral foundation of its
          odor-control formula, together with triethyl citrate and skin-conditioning ingredients.
        </p>
        <p className="text-text">
          It contains <strong>no aluminum salts and 0% baking soda</strong>.
        </p>
      </section>

      <section className="mt-12 space-y-6">
        <h2 className="text-xl font-semibold">What Is Magnesium Hydroxide?</h2>
        <p className="text-text">
          Magnesium hydroxide is a mineral compound made from magnesium, oxygen and hydrogen.
        </p>
        <p className="text-text">
          In deodorant formulas, it can help create an environment that is less favorable to the
          processes associated with underarm odor. For STEALTH, magnesium hydroxide is the
          foundation of the formula's odor-control system.
        </p>
      </section>

      <section className="mt-12 space-y-6">
        <h2 className="text-xl font-semibold">How Does It Help Control Odor?</h2>
        <p className="text-text">
          Sweat itself isn't what creates the characteristic smell of body odor. Underarm odor
          develops when compounds in sweat interact with bacteria on the skin.
        </p>
        <p className="text-text">
          STEALTH approaches odor control by combining <strong>magnesium hydroxide</strong> with{' '}
          <strong>triethyl citrate</strong>, which helps reduce the formation of odor.
        </p>
      </section>

      <section className="mt-12 space-y-6">
        <h2 className="text-xl font-semibold">Magnesium vs. Baking Soda</h2>
        <p className="text-text">
          Both magnesium-based ingredients and baking soda are commonly used in natural deodorants,
          but they aren't the same thing.
        </p>
        <div className="grid sm:grid-cols-2 gap-4 mt-4">
          <div className="border border-border p-5">
            <h3 className="font-semibold">Magnesium Hydroxide</h3>
            <p className="mt-2 text-base text-text">
              A mineral ingredient used in STEALTH's odor-control system.
            </p>
          </div>
          <div className="border border-border p-5">
            <h3 className="font-semibold">Baking Soda</h3>
            <p className="mt-2 text-base text-text">
              Also known as sodium bicarbonate. Some people prefer to avoid it because it can feel
              irritating on their skin.
            </p>
          </div>
        </div>
        <p className="text-text mt-4">
          That's why STEALTH uses <strong>0% baking soda</strong> and builds its odor-control
          system around magnesium hydroxide and triethyl citrate instead.
        </p>
      </section>

      <section className="mt-12 space-y-6">
        <h2 className="text-xl font-semibold">What's In the Formula?</h2>
        <p className="text-text">
          Magnesium hydroxide is only one part of the formula. STEALTH combines it with ingredients
          chosen for different roles:
        </p>
        <ul className="space-y-3 text-base">
          <li>
            <strong>Magnesium Hydroxide</strong> — Mineral foundation of the odor-control system.
          </li>
          <li>
            <strong>Jojoba + Meadowfoam Seed Oil</strong> — Help create a smooth glide and
            conditioned skin feel.
          </li>
          <li>
            <strong>Mango + Shea Butter</strong> — For a soft, comfortable application.
          </li>
          <li>
            <strong>Essential Oils</strong> — Create the scent of each STEALTH expression.
          </li>
        </ul>
        <Link to="/formula" className="inline-block text-sm font-medium text-text underline underline-offset-4">
          Explore the full formula <ArrowRight size={20} strokeWidth={1.5} className="inline-block shrink-0 align-middle" aria-hidden="true" />
        </Link>
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-semibold mb-6">Find Your STEALTH</h2>
        <div className="grid sm:grid-cols-3 gap-4">
          {products.map((p) => (
            <Link
              key={p.slug}
              to={`/products/${p.slug}`}
              className="border border-border p-4 transition"
            >
              <h3 className="font-semibold">{p.name}</h3>
              <p className="text-base text-text mt-1">{p.tagline}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-16 border-t border-border pt-12">
        <h2 className="text-xl font-semibold mb-6">Magnesium Deodorant: Common Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold">Is magnesium deodorant aluminum-free?</h3>
            <p className="mt-1 text-base text-text">STEALTH contains no aluminum salts.</p>
          </div>
          <div>
            <h3 className="font-semibold">
              Is magnesium deodorant the same as baking-soda-free deodorant?
            </h3>
            <p className="mt-1 text-base text-text">
              Not necessarily. Some magnesium deodorants may contain baking soda. STEALTH uses
              magnesium hydroxide and contains 0% baking soda.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">Does magnesium deodorant work in hot weather?</h3>
            <p className="mt-1 text-base text-text">
              STEALTH was developed in Phuket, where heat and humidity are part of everyday life.
              The formula is designed for everyday odor control in warm, humid conditions.
            </p>
          </div>
        </div>
        <Link to="/faq" className="mt-6 inline-block text-sm font-medium text-text underline underline-offset-4">
          Read all FAQs <ArrowRight size={20} strokeWidth={1.5} className="inline-block shrink-0 align-middle" aria-hidden="true" />
        </Link>
      </section>

      <div className="mt-12 text-center">
        <Link
          to="/products"
          className="inline-flex items-center px-6 py-3 bg-action hover:bg-action-hover text-text text-sm font-medium"
        >
          Shop STEALTH
        </Link>
      </div>
    </div>
  );
}
