import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';
import SafeImage from '../components/SafeImage';

export default function Products() {
  return (
    <div className="site-container py-12 md:py-16">
      <div className="max-w-2xl">
        <p className="text-[11px] tracking-[0.2em] uppercase text-text mb-2">Collection</p>
        <h1 className="font-sans text-3xl md:text-4xl text-text tracking-tight font-bold">
          Natural deodorant sticks
        </h1>
        <p className="mt-4 text-text leading-relaxed">
          Three scents. One considered formula. Choose the expression that fits your day.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5">
        {products.map((p) => (
          <Link
            key={p.slug}
            to={`/products/${p.slug}`}
            className="group bg-white border border-border overflow-hidden transition"
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
                <h2 className="font-sans text-xl text-text group-hover:underline font-semibold">{p.name}</h2>
                <span className="text-sm font-normal">{p.price}</span>
              </div>
              <p className="mt-1 text-xs text-text">{p.tagline}</p>
              <p className="mt-3 text-base text-text leading-relaxed">{p.description}</p>
              <span className="mt-4 inline-block text-sm font-medium text-text">Shop {p.name} <ArrowRight size={20} strokeWidth={1.5} className="inline-block shrink-0 align-middle" aria-hidden="true" /></span>
            </div>
          </Link>
        ))}
      </div>

      {/* Comparison table */}
      <div className="mt-20">
        <h2 className="font-sans text-2xl text-text mb-8 font-semibold">Three ways to wear STEALTH</h2>
        <div className="overflow-x-auto border border-border">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-surface-muted border-b border-border">
                <th className="text-left py-3 px-4 font-medium text-text"></th>
                {products.map((p) => (
                  <th key={p.slug} className="text-left py-3 px-4 font-semibold text-text">
                    {p.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="py-3 px-4 text-text">Character</td>
                {products.map((p) => (
                  <td key={p.slug} className="py-3 px-4">{p.character}</td>
                ))}
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 px-4 text-text">Mood</td>
                {products.map((p) => (
                  <td key={p.slug} className="py-3 px-4">{p.mood}</td>
                ))}
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 px-4 text-text">Best for</td>
                {products.map((p) => (
                  <td key={p.slug} className="py-3 px-4">{p.bestFor}</td>
                ))}
              </tr>
              <tr>
                <td className="py-3 px-4 text-text">Finish</td>
                {products.map((p) => (
                  <td key={p.slug} className="py-3 px-4">{p.finish}</td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-16 max-w-xl">
        <h2 className="font-sans text-xl text-text font-semibold">A better daily routine</h2>
        <p className="mt-3 text-text text-base leading-relaxed">
          STEALTH is designed to make natural deodorant feel simple. Apply to clean, dry underarms.
          Let the formula settle for a moment, then get on with your day.
        </p>
        <div className="mt-6 flex flex-wrap gap-4">
          <Link to="/formula" className="text-sm font-medium text-text underline underline-offset-4">
            Explore the Formula
          </Link>
          <Link to="/products" className="text-sm font-medium text-text underline underline-offset-4">
            Shop the Collection
          </Link>
        </div>
      </div>
    </div>
  );
}
