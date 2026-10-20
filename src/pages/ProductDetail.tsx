import { Link, useParams } from 'react-router-dom';
import { getProduct, products } from '../data/products';
import SafeImage from '../components/SafeImage';

export default function ProductDetail() {
  const { slug } = useParams<{ slug: string }>();
  const product = slug ? getProduct(slug) : undefined;

  if (!product) {
    return (
      <div className="site-container py-20 text-center">
        <h1 className="font-sans text-2xl text-text font-bold">Product not found</h1>
        <Link to="/products" className="mt-4 inline-block text-sm text-text underline">
          Back to collection
        </Link>
      </div>
    );
  }

  return (
    <div className="site-container py-12 md:py-16">
      <nav className="text-sm text-text mb-8">
        <Link to="/products" className="hover:underline transition">
          Products
        </Link>
        <span className="mx-2">/</span>
        <span className="text-text">{product.name}</span>
      </nav>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div
          className="aspect-square flex items-center justify-center p-5 sm:p-7 border border-border overflow-hidden"
          style={{
            backgroundColor: 'var(--color-surface-muted)',
                    backgroundImage: `url(${product.backgroundImage})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
          }}
        >
          <SafeImage
            src={product.image}
            alt={product.name}
            className="w-full h-full object-contain max-h-[96%] scale-[1.12]"
          />
        </div>
        <div>
          <p className="text-[11px] tracking-[0.2em] uppercase text-text">
            STEALTH · Natural Deodorant
          </p>
          <h1 className="mt-2 font-sans text-3xl md:text-4xl text-text tracking-tight font-bold">
            {product.name}
          </h1>
          <p className="mt-2 text-text">{product.tagline}</p>
          <p className="mt-6 text-lg text-text leading-relaxed">{product.description}</p>
          <p className="mt-6 text-2xl font-normal text-text">{product.price}</p>

          <div className="mt-8 space-y-3 text-sm">
            <p>
              <span className="font-medium text-text">Character:</span>{' '}
              <span className="text-text">{product.character}</span>
            </p>
            <p>
              <span className="font-medium text-text">Best for:</span>{' '}
              <span className="text-text">{product.bestFor}</span>
            </p>
            <p>
              <span className="font-medium text-text">Finish:</span>{' '}
              <span className="text-text">{product.finish}</span>
            </p>
          </div>

          <div className="mt-8 p-5 bg-surface-muted border border-border">
            <p className="text-base font-medium text-text mb-2">Scent notes</p>
            <div className="flex flex-wrap gap-2">
              {product.scentNotes.map((note) => (
                <span
                  key={note}
                  className="px-3 py-1 bg-white border border-border text-xs text-text"
                >
                  {note}
                </span>
              ))}
            </div>
          </div>

          <button
            type="button"
            className="mt-8 w-full sm:w-auto px-8 py-3.5 bg-action hover:bg-action-hover text-text text-sm font-medium transition"
          >
            Add to bag — {product.price}
          </button>
          <p className="mt-3 text-xs text-text">
            Checkout and payments will be connected later. This is a content/SEO build.
          </p>
        </div>
      </div>

      {/* Other scents */}
      <div className="mt-20">
        <h2 className="font-sans text-xl text-text mb-6 font-semibold">Other expressions</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {products
            .filter((p) => p.slug !== product.slug)
            .map((p) => (
              <Link
                key={p.slug}
                to={`/products/${p.slug}`}
                className="flex gap-4 border border-border p-4 bg-white transition"
              >
                <div
                  className="w-24 h-24 flex items-center justify-center p-2 shrink-0"
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
                    className="w-full h-full object-contain scale-[1.12]"
                    placeholderHeight="min-h-[64px]"
                  />
                </div>
                <div>
                  <h3 className="font-sans text-lg text-text font-semibold">{p.name}</h3>
                  <p className="text-base text-text mt-1">{p.tagline}</p>
                  <p className="text-base font-normal mt-2">{p.price}</p>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
}
