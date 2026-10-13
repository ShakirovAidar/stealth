import { Link } from 'react-router-dom';
import { products } from '../data/products';
import SafeImage from '../components/SafeImage';

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-16 md:py-22">
        <div className="grid md:grid-cols-2 gap-12 md:gap-14 items-center">
          <div>
            <p className="text-[11px] tracking-[0.22em] uppercase text-sage mb-4">
              Natural deodorant · Magnesium
            </p>
            <h1 className="font-serif text-4xl md:text-[2.75rem] leading-[1.15] text-primary mb-5">
              An everyday formula with nothing unnecessary.
            </h1>
            <p className="text-muted leading-relaxed mb-8 max-w-md">
              Magnesium hydroxide. Skin-conditioning oils. Zero baking soda. Zero aluminum.
              Made for heat and sensitive underarms.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/products"
                className="inline-flex items-center px-6 py-3 bg-primary text-parchment text-sm font-medium rounded-full hover:bg-sage transition"
              >
                Shop the collection
              </Link>
              <Link
                to="/formula"
                className="inline-flex items-center px-6 py-3 border border-border text-sm rounded-full hover:border-primary/30 transition"
              >
                Read the formula
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap gap-5 text-xs text-muted">
              <span>✓ Free shipping $50+</span>
              <span>✓ 30-day returns</span>
              <span>✓ Sensitive-skin first</span>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl bg-secondary flex items-center justify-center p-10 border border-border">
              <SafeImage
                src="/assets/bottle-transparent.png"
                alt="STEALTH natural deodorant"
                className="w-full h-full object-contain max-h-[340px]"
              />
            </div>
            <div className="absolute -bottom-3 left-6 right-6 bg-white border border-border rounded-2xl px-4 py-3 shadow-sm flex justify-between text-xs">
              <span className="font-medium">Mg(OH)₂</span>
              <span className="text-muted">Core active</span>
            </div>
          </div>
        </div>
      </section>

      {/* Different kind */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-16 md:py-20">
        <div className="max-w-2xl">
          <h2 className="font-serif text-2xl md:text-3xl text-primary">
            A different kind of natural deodorant
          </h2>
          <p className="mt-4 text-muted leading-relaxed">
            A considered formula built around magnesium hydroxide, skin-conditioning oils and
            butters, and scents designed to feel as refined as the product itself.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-5">
          {[
            { title: 'Magnesium-based', desc: 'Odor control built on magnesium hydroxide.' },
            { title: '0% baking soda', desc: 'No sodium bicarbonate in the formula.' },
            { title: 'Aluminum-free', desc: 'Formulated without aluminum salts.' },
          ].map((item) => (
            <div key={item.title} className="border border-border rounded-2xl p-6 bg-white">
              <h3 className="font-medium text-primary">{item.title}</h3>
              <p className="mt-2 text-sm text-muted">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Find your scent */}
      <section className="bg-secondary py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="text-[11px] tracking-[0.2em] uppercase text-sage mb-2">Three scents</p>
            <h2 className="font-serif text-3xl text-primary">Choose your expression</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {products.map((p) => (
              <Link
                key={p.slug}
                to={`/products/${p.slug}`}
                className="group bg-white rounded-2xl overflow-hidden border border-border hover:shadow-md transition"
              >
                <div
                  className="aspect-square flex items-center justify-center p-8"
                  style={{ backgroundColor: p.bg }}
                >
                  <SafeImage
                    src={p.image}
                    alt={p.name}
                    className="w-full h-full object-contain max-h-[70%] group-hover:scale-[1.03] transition duration-500"
                  />
                </div>
                <div className="p-5">
                  <div className="flex justify-between items-start">
                    <h3 className="font-serif text-xl text-primary">{p.name}</h3>
                    <span className="text-sm font-medium">{p.price}</span>
                  </div>
                  <p className="text-xs text-muted mt-1">{p.tagline}</p>
                  <p className="text-sm text-muted mt-3 leading-relaxed">{p.description}</p>
                  <span className="mt-4 inline-block text-sm font-medium text-sage group-hover:underline">
                    Add to bag →
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              to="/products"
              className="inline-flex items-center px-6 py-3 border border-border text-sm rounded-full hover:border-primary/30 transition"
            >
              Explore the collection
            </Link>
          </div>
        </div>
      </section>

      {/* What's inside */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-16 md:py-20">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="font-serif text-2xl md:text-3xl text-primary mb-6">
              What's in the jar (and what isn't)
            </h2>
            <ul className="space-y-3.5 text-sm">
              <li className="flex gap-3">
                <span className="text-sage font-semibold">✓</span>
                <span><strong>Magnesium hydroxide</strong> — odor control foundation</span>
              </li>
              <li className="flex gap-3">
                <span className="text-sage font-semibold">✓</span>
                <span><strong>Jojoba + meadowfoam</strong> — glide & condition</span>
              </li>
              <li className="flex gap-3">
                <span className="text-sage font-semibold">✓</span>
                <span><strong>Mango + shea</strong> — soft application</span>
              </li>
              <li className="flex gap-3">
                <span className="text-muted/40 font-semibold">✕</span>
                <span className="text-muted">Aluminum salts</span>
              </li>
              <li className="flex gap-3">
                <span className="text-muted/40 font-semibold">✕</span>
                <span className="text-muted">Baking soda</span>
              </li>
              <li className="flex gap-3">
                <span className="text-muted/40 font-semibold">✕</span>
                <span className="text-muted">Heavy synthetic fragrance</span>
              </li>
            </ul>
            <Link
              to="/formula"
              className="mt-8 inline-flex text-sm font-medium text-sage underline underline-offset-4"
            >
              See the full formula →
            </Link>
          </div>
          <div className="bg-sage-100/60 rounded-3xl p-8 border border-sage-100">
            <p className="font-serif text-xl text-primary mb-3">Developed in Phuket</p>
            <p className="text-sm text-muted leading-relaxed">
              Heat and humidity shaped the formula. It should feel good going on and hold up
              through real tropical days — without asking you to choose between performance
              and a cleaner ingredient list.
            </p>
            <Link
              to="/about"
              className="mt-6 inline-flex text-sm font-medium text-sage underline underline-offset-4"
            >
              Our story →
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ teaser */}
      <section className="bg-secondary py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="font-serif text-2xl md:text-3xl text-primary">
            Frequently asked questions
          </h2>
          <div className="mt-8 space-y-6 max-w-2xl">
            <div>
              <h3 className="font-medium text-primary">Is STEALTH aluminum-free?</h3>
              <p className="mt-1 text-sm text-muted">Yes. STEALTH is formulated without aluminum salts.</p>
            </div>
            <div>
              <h3 className="font-medium text-primary">Does STEALTH contain baking soda?</h3>
              <p className="mt-1 text-sm text-muted">No. The formula contains 0% baking soda.</p>
            </div>
            <div>
              <h3 className="font-medium text-primary">Does it work in hot and humid weather?</h3>
              <p className="mt-1 text-sm text-muted">
                STEALTH was developed in Phuket with warm, humid conditions in mind and is designed
                for everyday odor control.
              </p>
            </div>
          </div>
          <Link
            to="/faq"
            className="mt-8 inline-flex text-sm font-medium text-sage underline underline-offset-4"
          >
            Read all FAQs →
          </Link>
        </div>
      </section>

      {/* Final CTA */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-16 md:py-20 text-center">
        <h2 className="font-serif text-2xl md:text-3xl text-primary">
          Ready for a cleaner daily routine?
        </h2>
        <p className="mt-3 text-muted max-w-md mx-auto">
          Three scents. One considered formula. Free shipping over $50.
        </p>
        <Link
          to="/products"
          className="mt-8 inline-flex items-center px-7 py-3.5 bg-primary text-parchment text-sm font-medium rounded-full hover:bg-sage transition"
        >
          Shop the collection
        </Link>
      </section>
    </>
  );
}
