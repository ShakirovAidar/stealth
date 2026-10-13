import { Link } from 'react-router-dom';
import { products } from '../data/products';
import SafeImage from '../components/SafeImage';

export default function Products() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 md:py-16">
      <div className="max-w-2xl">
        <p className="text-[11px] tracking-[0.2em] uppercase text-sage mb-2">Collection</p>
        <h1 className="font-serif text-3xl md:text-4xl text-primary tracking-tight">
          Natural deodorant sticks
        </h1>
        <p className="mt-4 text-muted leading-relaxed">
          Three scents. One considered formula. Choose the expression that fits your day.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5">
        {products.map((p) => (
          <Link
            key={p.slug}
            to={`/products/${p.slug}`}
            className="group bg-white border border-border rounded-2xl overflow-hidden hover:shadow-md transition"
          >
            <div
              className="aspect-square flex items-center justify-center p-8"
              style={{ backgroundColor: p.bg }}
            >
              <SafeImage
                src={p.image}
                alt={p.name}
                className="w-full h-full object-contain max-h-[85%] group-hover:scale-[1.03] transition duration-500"
              />
            </div>
            <div className="p-5">
              <div className="flex justify-between items-start">
                <h2 className="font-serif text-xl text-primary group-hover:underline">{p.name}</h2>
                <span className="text-sm font-medium">{p.price}</span>
              </div>
              <p className="mt-1 text-xs text-muted">{p.tagline}</p>
              <p className="mt-3 text-sm text-muted leading-relaxed">{p.description}</p>
              <span className="mt-4 inline-block text-sm font-medium text-sage">Shop {p.name} →</span>
            </div>
          </Link>
        ))}
      </div>

      {/* Comparison table */}
      <div className="mt-20">
        <h2 className="font-serif text-2xl text-primary mb-8">Three ways to wear STEALTH</h2>
        <div className="overflow-x-auto border border-border rounded-2xl">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-secondary border-b border-border">
                <th className="text-left py-3 px-4 font-medium text-muted"></th>
                {products.map((p) => (
                  <th key={p.slug} className="text-left py-3 px-4 font-semibold text-primary">
                    {p.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="py-3 px-4 text-muted">Character</td>
                {products.map((p) => (
                  <td key={p.slug} className="py-3 px-4">{p.character}</td>
                ))}
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 px-4 text-muted">Mood</td>
                {products.map((p) => (
                  <td key={p.slug} className="py-3 px-4">{p.mood}</td>
                ))}
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 px-4 text-muted">Best for</td>
                {products.map((p) => (
                  <td key={p.slug} className="py-3 px-4">{p.bestFor}</td>
                ))}
              </tr>
              <tr>
                <td className="py-3 px-4 text-muted">Finish</td>
                {products.map((p) => (
                  <td key={p.slug} className="py-3 px-4">{p.finish}</td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-16 max-w-xl">
        <h2 className="font-serif text-xl text-primary">A better daily routine</h2>
        <p className="mt-3 text-muted text-sm leading-relaxed">
          STEALTH is designed to make natural deodorant feel simple. Apply to clean, dry underarms.
          Let the formula settle for a moment, then get on with your day.
        </p>
        <div className="mt-6 flex flex-wrap gap-4">
          <Link to="/formula" className="text-sm font-medium text-sage underline underline-offset-4">
            Explore the Formula
          </Link>
          <Link to="/products" className="text-sm font-medium text-sage underline underline-offset-4">
            Shop the Collection
          </Link>
        </div>
      </div>
    </div>
  );
}
