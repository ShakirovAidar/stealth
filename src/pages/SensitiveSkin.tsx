import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';

export default function SensitiveSkin() {
  return (
    <div className="site-container article-page py-12 md:py-16">
      <p className="text-base font-medium text-text uppercase tracking-wide mb-2">Learn</p>
      <h1 className="font-sans text-3xl md:text-4xl text-text tracking-tight font-bold">
        Natural Deodorant for Sensitive Skin
      </h1>
      <p className="mt-4 text-lg text-text">
        A gentle natural deodorant designed with sensitive skin in mind.
      </p>
      <p className="mt-3 text-text">
        STEALTH combines a baking-soda-free formula with a smooth, skin-conditioning base for
        comfortable everyday wear.
      </p>

      <section className="mt-12 space-y-4">
        <h2 className="text-xl font-semibold">Why Can Sensitive Skin React?</h2>
        <p className="text-text">
          Underarm skin can be more reactive than other areas of the body. Friction, shaving, sweat,
          fragrance and certain ingredients can all contribute to discomfort for some people.
        </p>
        <p className="text-text">
          That's why the feel of a deodorant matters just as much as what it does. STEALTH was
          designed with that in mind.
        </p>
      </section>

      <section className="mt-12 space-y-4">
        <h2 className="text-xl font-semibold">A Gentler Formula</h2>
        <p className="text-text">
          We wanted STEALTH to feel good from the first swipe. The formula combines magnesium-based
          odor control with oils, butters and waxes chosen for a smooth application.
        </p>
        <p className="text-text">
          It's made without aluminum salts and contains <strong>0% baking soda</strong>.
        </p>
      </section>

      <section className="mt-12 space-y-4">
        <h2 className="text-xl font-semibold">0% Baking Soda</h2>
        <p className="text-text">
          Baking soda is a common ingredient in natural deodorants, but some people find it
          uncomfortable on their skin. STEALTH takes a different approach.
        </p>
        <p className="text-text">
          Our formula contains <strong>0% baking soda</strong>, using magnesium hydroxide and
          triethyl citrate as part of its odor-control system instead.
        </p>
        <Link
          to="/baking-soda-free-deodorant"
          className="inline-block text-sm font-medium text-text underline underline-offset-4"
        >
          Learn why we chose a baking-soda-free formula <ArrowRight size={20} strokeWidth={1.5} className="inline-block shrink-0 align-middle" aria-hidden="true" />
        </Link>
      </section>

      <section className="mt-12 space-y-4">
        <h2 className="text-xl font-semibold">Magnesium Hydroxide</h2>
        <p className="text-text">
          At the center of the formula is magnesium hydroxide. It's the mineral foundation of
          STEALTH's odor-control system, helping us create a natural deodorant without relying on
          aluminum salts.
        </p>
        <Link
          to="/magnesium-deodorant"
          className="inline-block text-sm font-medium text-text underline underline-offset-4"
        >
          How magnesium deodorant works <ArrowRight size={20} strokeWidth={1.5} className="inline-block shrink-0 align-middle" aria-hidden="true" />
        </Link>
      </section>

      <section className="mt-12 space-y-4">
        <h2 className="text-xl font-semibold">Skin-Conditioning Ingredients</h2>
        <p className="text-text">
          Odor control is only part of the experience. We also wanted the stick to glide smoothly
          and leave skin feeling comfortable.
        </p>
        <ul className="space-y-3 text-base mt-4">
          <li>
            <strong>Jojoba Oil + Meadowfoam Seed Oil</strong> — Help create a smooth application and
            conditioned skin feel.
          </li>
          <li>
            <strong>Mango Butter + Shea Butter</strong> — Provide a soft, comfortable base.
          </li>
          <li>
            <strong>MCT Oil</strong> — Helps contribute to the formula's lightweight, smooth feel.
          </li>
          <li>
            <strong>Beeswax + Rice Bran Wax</strong> — Give the stick its structure and consistency.
          </li>
        </ul>
        <Link to="/formula" className="inline-block text-sm font-medium text-text underline underline-offset-4">
          Explore the full formula <ArrowRight size={20} strokeWidth={1.5} className="inline-block shrink-0 align-middle" aria-hidden="true" />
        </Link>
      </section>

      <section className="mt-16 border-t border-border pt-12 space-y-6">
        <h2 className="text-xl font-semibold">Sensitive Skin: Common Questions</h2>
        <div>
          <h3 className="font-semibold">Is STEALTH suitable for sensitive skin?</h3>
          <p className="mt-1 text-base text-text">
            STEALTH is designed with sensitive skin in mind, including a 0% baking soda formula.
          </p>
        </div>
        <div>
          <h3 className="font-semibold">Does STEALTH contain baking soda?</h3>
          <p className="mt-1 text-base text-text">No. STEALTH contains 0% baking soda.</p>
        </div>
        <div>
          <h3 className="font-semibold">Is STEALTH aluminum-free?</h3>
          <p className="mt-1 text-base text-text">Yes. STEALTH contains no aluminum salts.</p>
        </div>
        <div>
          <h3 className="font-semibold">Can I use STEALTH after shaving?</h3>
          <p className="mt-1 text-base text-text">
            If your skin feels sensitive immediately after shaving, it's best to wait until it feels
            comfortable before applying deodorant.
          </p>
        </div>
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
