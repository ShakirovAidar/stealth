import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

export default function Footer() {
  const isHome = useLocation().pathname === '/';

  return (
    <footer className={`bg-surface-muted border-t border-border ${isHome ? '' : 'mt-20'}`}>
      <div className="site-container py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <Link to="/" className="inline-block">
              <img
                src="/assets/logo-label-nav.png"
                alt="STEALTH"
                className="h-7 w-auto object-contain"
              />
            </Link>
            <p className="mt-4 text-base text-text leading-relaxed">
              Natural deodorant powered by magnesium. Developed in Phuket for real heat and humidity.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-text mb-3">Shop</h4>
            <ul className="space-y-2 text-base text-text">
              <li><Link to="/products" className="hover:underline transition">Collection</Link></li>
              <li><Link to="/products/amethyst" className="hover:underline transition">Amethyst</Link></li>
              <li><Link to="/products/obsidian" className="hover:underline transition">Obsidian</Link></li>
              <li><Link to="/products/glacier" className="hover:underline transition">Glacier</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-text mb-3">Learn</h4>
            <ul className="space-y-2 text-base text-text">
              <li><Link to="/magnesium-deodorant" className="hover:underline transition">Magnesium Deodorant</Link></li>
              <li><Link to="/baking-soda-free-deodorant" className="hover:underline transition">Baking Soda-Free</Link></li>
              <li><Link to="/sensitive-skin-deodorant" className="hover:underline transition">Sensitive Skin</Link></li>
              <li><Link to="/formula" className="hover:underline transition">The Formula</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-text mb-3">Company</h4>
            <ul className="space-y-2 text-base text-text">
              <li><Link to="/about" className="hover:underline transition">About</Link></li>
              <li><Link to="/faq" className="hover:underline transition">FAQ</Link></li>
              <li><Link to="/journal" className="hover:underline transition">Journal</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-text">
          <p>© {new Date().getFullYear()} STEALTH. Developed in Phuket, Thailand.</p>
          <p>No baking soda · Aluminum-free · Magnesium-based</p>
        </div>
      </div>
    </footer>
  );
}
