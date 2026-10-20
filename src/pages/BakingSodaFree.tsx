import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';

export default function BakingSodaFree() {
  return (
    <div className="site-container article-page py-12 md:py-16">
      <p className="text-base font-medium text-text uppercase tracking-wide mb-2">Learn</p>
      <h1 className="font-sans text-3xl md:text-4xl text-text tracking-tight font-bold">
        Baking Soda-Free Natural Deodorant
      </h1>
      <p className="mt-4 text-lg text-text">
        A natural deodorant without baking soda, made for comfortable everyday wear.
      </p>
      <p className="mt-3 text-text">
        STEALTH uses a magnesium-based odor-control system instead — with 0% baking soda and no
        aluminum salts.
      </p>

      <section className="mt-12 space-y-4">
        <h2 className="text-xl font-semibold">Why Do Some People Avoid Baking Soda?</h2>
        <p className="text-text">
          Baking soda doesn't work the same way for everyone. Some people find that deodorants
          containing baking soda can feel uncomfortable or irritating, particularly with frequent
          use or on more reactive skin.
        </p>
        <p className="text-text">So we chose a different approach.</p>
      </section>

      <section className="mt-12 space-y-4">
        <h2 className="text-xl font-semibold">STEALTH: 0% Baking Soda</h2>
        <p className="text-text">
          STEALTH contains <strong>0% baking soda</strong>. Instead of relying on sodium
          bicarbonate, our formula uses magnesium hydroxide and triethyl citrate as part of its
          odor-control system.
        </p>
        <div className="flex flex-wrap gap-3 mt-4">
          <span className="px-3 py-1 bg-surface-muted text-sm font-medium">
            No Baking Soda
          </span>
          <span className="px-3 py-1 bg-surface-muted text-sm font-medium">
            No Aluminum Salts
          </span>
          <span className="px-3 py-1 bg-surface-muted text-sm font-medium">
            Magnesium-Based Odor Control
          </span>
        </div>
      </section>

      <section className="mt-12 space-y-4">
        <h2 className="text-xl font-semibold">What Do We Use Instead?</h2>
        <p className="text-text">
          Removing baking soda meant building the formula around other ingredients. Two of the key
          components are:
        </p>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="border border-border p-5">
            <h3 className="font-semibold">Magnesium Hydroxide</h3>
            <p className="mt-2 text-base text-text">
              The mineral foundation of STEALTH's odor-control system.
            </p>
          </div>
          <div className="border border-border p-5">
            <h3 className="font-semibold">Triethyl Citrate</h3>
            <p className="mt-2 text-base text-text">
              Helps reduce the formation of odor and supports lasting freshness.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-semibold mb-6">Find Your Scent</h2>
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

      <section className="mt-16 border-t border-border pt-12 space-y-6">
        <h2 className="text-xl font-semibold">Baking Soda-Free: Common Questions</h2>
        <div>
          <h3 className="font-semibold">Is STEALTH completely free of baking soda?</h3>
          <p className="mt-1 text-base text-text">Yes. STEALTH contains 0% baking soda.</p>
        </div>
        <div>
          <h3 className="font-semibold">Why doesn't STEALTH use baking soda?</h3>
          <p className="mt-1 text-base text-text">
            We wanted to create a natural deodorant around magnesium-based odor control rather than
            sodium bicarbonate.
          </p>
        </div>
        <div>
          <h3 className="font-semibold">What does STEALTH use instead of baking soda?</h3>
          <p className="mt-1 text-base text-text">
            STEALTH uses magnesium hydroxide and triethyl citrate as key parts of its odor-control
            system.
          </p>
        </div>
        <div>
          <h3 className="font-semibold">Is STEALTH aluminum-free too?</h3>
          <p className="mt-1 text-base text-text">Yes. STEALTH contains no aluminum salts.</p>
        </div>
        <Link to="/faq" className="inline-block text-sm font-medium text-text underline underline-offset-4">
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
