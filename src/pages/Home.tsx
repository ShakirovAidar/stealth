import SubscribeForm from '../components/SubscribeForm';
import { ArrowRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';
import SafeImage from '../components/SafeImage';
import Header from '../components/Header';

export default function Home() {

  return (
    <>
      {/* Hero */}
      <section className="relative isolate min-h-[680px] overflow-hidden border-b border-border md:min-h-[720px]">
        <img
          src="/assets/stealth-hero-campaign.png"
          alt="STEALTH natural deodorant campaign"
          className="absolute inset-0 -z-20 h-full w-full object-cover object-[68%_center] md:object-center"
        />
        <Header variant="hero" />
        <div className="site-container flex min-h-[600px] items-center pb-20 pt-10 md:min-h-[640px]">
          <div className="max-w-xl bg-surface/95 p-6 md:p-8">
            <p className="mb-5 text-[11px] font-medium uppercase tracking-[0.24em] text-text">
              Natural deodorant · Magnesium
            </p>
            <h1 className="mb-5 max-w-lg font-sans text-4xl leading-[1.08] text-text sm:text-5xl md:text-[3.5rem] font-bold">
              An everyday formula with nothing unnecessary.
            </h1>
            <p className="mb-9 max-w-md text-base leading-relaxed text-text">
              Magnesium hydroxide. Skin-conditioning oils. No baking soda. Zero aluminum.
              Made for heat and sensitive underarms.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/products"
                className="inline-flex items-center bg-action hover:bg-action-hover px-7 py-3.5 text-sm font-medium uppercase tracking-[0.08em] text-text transition"
              >
                Shop the collection
              </Link>
              <Link
                to="/formula"
                className="inline-flex items-center border border-text/60 px-7 py-3.5 text-sm font-medium uppercase tracking-[0.08em] text-text transition bg-surface hover:bg-surface-muted"
              >
                Read the formula
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-xs text-text">
              <span><Check size={20} strokeWidth={1.5} className="inline-block shrink-0 align-middle" aria-hidden="true" /> Free shipping $50+</span>
              <span><Check size={20} strokeWidth={1.5} className="inline-block shrink-0 align-middle" aria-hidden="true" /> 30-day returns</span>
              <span><Check size={20} strokeWidth={1.5} className="inline-block shrink-0 align-middle" aria-hidden="true" /> Sensitive-skin first</span>
            </div>
          </div>
        </div>
      </section>

      {/* Different kind */}
      <section className="py-16 md:py-20">
        <div className="site-container">
          <div className="max-w-2xl">
            <h2 className="font-sans text-2xl md:text-3xl text-text font-semibold">
              A different kind of natural deodorant
            </h2>
            <p className="mt-4 text-text leading-relaxed">
              A considered formula built around magnesium hydroxide, skin-conditioning oils and
              butters, and scents designed to feel as refined as the product itself.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              { title: 'Magnesium-based', desc: 'Odor control built on magnesium hydroxide.' },
              { title: 'No baking soda', desc: 'No sodium bicarbonate in the formula.' },
              { title: 'Aluminum-free', desc: 'Formulated without aluminum salts.' },
            ].map((item) => (
              <div key={item.title} className="border border-border bg-white p-6">
                <h3 className="text-text font-semibold">{item.title}</h3>
                <p className="mt-2 text-base text-text">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Find your scent */}
      <section className="bg-surface-muted py-16 md:py-20">
        <div className="site-container">
          <div className="text-center mb-12">
            <p className="text-[11px] tracking-[0.2em] uppercase text-text mb-2">Three scents</p>
            <h2 className="font-sans text-3xl text-text font-semibold">Choose your expression</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {products.map((p) => (
              <Link
                key={p.slug}
                to={`/products/${p.slug}`}
                className="group bg-white overflow-hidden border border-border transition"
              >
                <div
                  className="aspect-square flex items-center justify-center p-4 sm:p-5"
                  style={{
                    backgroundColor: 'var(--color-surface-muted)',
                    backgroundImage: `url(${p.backgroundImage})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                  }}
                >
                  <SafeImage
                    src={p.image}
                    alt={p.name}
                    className="w-full h-full object-contain max-h-[96%] scale-[1.12] transition-transform duration-500 group-hover:scale-[1.18] motion-reduce:transition-none"
                  />
                </div>
                <div className="p-5">
                  <div className="flex justify-between items-start">
                    <h3 className="font-sans text-xl text-text font-semibold">{p.name}</h3>
                    <span className="text-sm font-normal">{p.price}</span>
                  </div>
                  <p className="text-xs text-text mt-1">{p.tagline}</p>
                  <p className="text-base text-text mt-3 leading-relaxed">{p.description}</p>
                  <span className="mt-4 inline-block text-sm font-medium text-text group-hover:underline">
                    Add to bag <ArrowRight size={20} strokeWidth={1.5} className="inline-block shrink-0 align-middle" aria-hidden="true" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              to="/products"
              className="inline-flex items-center px-6 py-3 border border-border text-sm hover:border-text/30 transition"
            >
              Explore the collection
            </Link>
          </div>
        </div>
      </section>

      {/* What's inside */}
      <section className="site-container py-16 md:py-20">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="font-sans text-2xl md:text-3xl text-text mb-6 font-semibold">
              What's in the jar (and what isn't)
            </h2>
            <ul className="space-y-3.5 text-base">
              <li className="flex gap-3">
                <span className="text-text font-semibold"><Check size={20} strokeWidth={1.5} className="inline-block shrink-0 align-middle" aria-hidden="true" /></span>
                <span><strong>Magnesium hydroxide</strong> — odor control foundation</span>
              </li>
              <li className="flex gap-3">
                <span className="text-text font-semibold"><Check size={20} strokeWidth={1.5} className="inline-block shrink-0 align-middle" aria-hidden="true" /></span>
                <span><strong>Jojoba + meadowfoam</strong> — glide & condition</span>
              </li>
              <li className="flex gap-3">
                <span className="text-text font-semibold"><Check size={20} strokeWidth={1.5} className="inline-block shrink-0 align-middle" aria-hidden="true" /></span>
                <span><strong>Mango + shea</strong> — soft application</span>
              </li>
              <li className="flex gap-3">
                <span className="font-semibold text-text">NO</span>
                <span className="text-text">Aluminum salts</span>
              </li>
              <li className="flex gap-3">
                <span className="font-semibold text-text">NO</span>
                <span className="text-text">Baking soda</span>
              </li>
              <li className="flex gap-3">
                <span className="font-semibold text-text">NO</span>
                <span className="text-text">Heavy synthetic fragrance</span>
              </li>
            </ul>
            <Link
              to="/formula"
              className="mt-8 inline-flex text-sm font-medium text-text underline underline-offset-4"
            >
              See the full formula <ArrowRight size={20} strokeWidth={1.5} className="inline-block shrink-0 align-middle" aria-hidden="true" />
            </Link>
          </div>
          <div className="bg-surface-muted p-8 border border-border">
            <p className="font-sans text-xl text-text mb-3">Developed in Phuket</p>
            <p className="text-base text-text leading-relaxed">
              Heat and humidity shaped the formula. It should feel good going on and hold up
              through real tropical days — without asking you to choose between performance
              and a cleaner ingredient list.
            </p>
            <Link
              to="/about"
              className="mt-6 inline-flex text-sm font-medium text-text underline underline-offset-4"
            >
              Our story <ArrowRight size={20} strokeWidth={1.5} className="inline-block shrink-0 align-middle" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ teaser */}
      <section className="bg-surface-muted py-16 md:py-20">
        <div className="site-container">
          <h2 className="font-sans text-2xl md:text-3xl text-text font-semibold">
            Frequently asked questions
          </h2>
          <div className="mt-8 space-y-6 max-w-2xl">
            <div>
              <h3 className="text-text font-semibold">Is STEALTH aluminum-free?</h3>
              <p className="mt-1 text-base text-text">Yes. STEALTH is formulated without aluminum salts.</p>
            </div>
            <div>
              <h3 className="text-text font-semibold">Does STEALTH contain baking soda?</h3>
              <p className="mt-1 text-base text-text">No. The formula contains no baking soda.</p>
            </div>
            <div>
              <h3 className="text-text font-semibold">Does it work in hot and humid weather?</h3>
              <p className="mt-1 text-base text-text">
                STEALTH was developed in Phuket with warm, humid conditions in mind and is designed
                for everyday odor control.
              </p>
            </div>
          </div>
          <Link
            to="/faq"
            className="mt-8 inline-flex text-sm font-medium text-text underline underline-offset-4"
          >
            Read all FAQs <ArrowRight size={20} strokeWidth={1.5} className="inline-block shrink-0 align-middle" aria-hidden="true" />
          </Link>
        </div>
      </section>

      {/* Subscribe */}
      <section className="relative isolate overflow-hidden bg-surface-muted">
        <img
          src="/assets/stealth-subscribe-background.jpg"
          alt="STEALTH campaign portrait"
          className="absolute inset-0 -z-10 h-full w-full object-cover object-[58%_center] md:object-center"
          loading="lazy"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-white/95 via-white/85 to-transparent md:via-white/50" />
        <div className="site-container relative z-10 flex min-h-[570px] items-center py-16 text-left md:min-h-[520px] md:py-20">
          <div className="w-full max-w-md">
            <h2 className="font-sans text-4xl font-semibold leading-[1.08] tracking-[-0.03em] text-text sm:text-5xl">
              Subscribe
            </h2>
            <p className="mt-5 max-w-sm text-base leading-relaxed text-text">
              Get the latest from STEALTH: new releases, product notes, and the occasional good thing in your inbox.
            </p>
            <SubscribeForm />
          </div>
        </div>
      </section>
    </>
  );
}
