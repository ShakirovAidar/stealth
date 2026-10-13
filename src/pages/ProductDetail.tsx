import { Link, useParams } from 'react-router-dom';
import { getProduct, products } from '../data/products';
import SafeImage from '../components/SafeImage';

export default function ProductDetail() {
  const { slug } = useParams<{ slug: string }>();
  const product = slug ? getProduct(slug) : undefined;

  if (!product) {
    return (
      <div className="max-w-5xl mx-auto px-4 py-20 text-center">
        <h1 className="font-serif text-2xl text-primary">Product not found</h1>
        <Link to="/products" className="mt-4 inline-block text-sm text-sage underline">
          Back to collection
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 md:py-16">
      <nav className="text-sm text-muted mb-8">
        <Link to="/products" className="hover:text-sage transition">
          Products
        </Link>
        <span className="mx-2">/</span>
        <span className="text-primary">{product.name}</span>
      </nav>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div
          className="rounded-3xl aspect-square flex items-center justify-center p-10 border border-border"
          style={{ backgroundColor: product.bg }}
        >
          <SafeImage
            src={product.image}
            alt={product.name}
            className="w-full h-full object-contain max-h-[90%]"
          />
        </div>
        <div>
          <p className="text-[11px] tracking-[0.2em] uppercase text-sage">
            STEALTH · Natural Deodorant
          </p>
          <h1 className="mt-2 font-serif text-3xl md:text-4xl text-primary tracking-tight">
            {product.name}
          </h1>
          <p className="mt-2 text-muted">{product.tagline}</p>
          <p className="mt-6 text-lg text-primary/90 leading-relaxed">{product.description}</p>
          <p className="mt-6 text-2xl font-semibold text-primary">{product.price}</p>

          <div className="mt-8 space-y-3 text-sm">
            <p>
              <span className="font-medium text-primary">Character:</span>{' '}
              <span className="text-muted">{product.character}</span>
            </p>
            <p>
              <span className="font-medium text-primary">Best for:</span>{' '}
              <span className="text-muted">{product.bestFor}</span>
            </p>
            <p>
              <span className="font-medium text-primary">Finish:</span>{' '}
              <span className="text-muted">{product.finish}</span>
            </p>
          </div>

          <div className="mt-8 p-5 bg-secondary rounded-2xl border border-border">
            <p className="text-sm font-medium text-primary mb-2">Scent notes</p>
            <div className="flex flex-wrap gap-2">
              {product.scentNotes.map((note) => (
                <span
                  key={note}
                  className="px-3 py-1 bg-white border border-border rounded-full text-xs text-muted"
                >
                  {note}
                </span>
              ))}
            </div>
          </div>

          <button
            type="button"
            className="mt-8 w-full sm:w-auto px-8 py-3.5 bg-primary text-parchment text-sm font-medium rounded-full hover:bg-sage transition"
          >
            Add to bag — {product.price}
          </button>
          <p className="mt-3 text-xs text-muted">
            Checkout and payments will be connected later. This is a content/SEO build.
          </p>
        </div>
      </div>

      {/* Other scents */}
      <div className="mt-20">
        <h2 className="font-serif text-xl text-primary mb-6">Other expressions</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {products
            .filter((p) => p.slug !== product.slug)
            .map((p) => (
              <Link
                key={p.slug}
                to={`/products/${p.slug}`}
                className="flex gap-4 border border-border rounded-2xl p-4 bg-white hover:shadow-sm transition"
              >
                <div
                  className="w-24 h-24 rounded-xl flex items-center justify-center p-2 shrink-0"
                  style={{ backgroundColor: p.bg }}
                >
                  <SafeImage
                    src={p.image}
                    alt={p.name}
                    className="w-full h-full object-contain"
                    placeholderHeight="min-h-[64px]"
                  />
                </div>
                <div>
                  <h3 className="font-serif text-lg text-primary">{p.name}</h3>
                  <p className="text-sm text-muted mt-1">{p.tagline}</p>
                  <p className="text-sm font-medium mt-2">{p.price}</p>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
}
