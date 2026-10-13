import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-secondary border-t border-border mt-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <Link to="/" className="inline-block">
              <img
                src="/assets/logo-mark.png"
                alt="STEALTH"
                className="h-12 w-auto object-contain"
              />
            </Link>
            <p className="mt-4 text-sm text-muted leading-relaxed">
              Natural deodorant powered by magnesium. Developed in Phuket for real heat and humidity.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-primary mb-3">Shop</h4>
            <ul className="space-y-2 text-sm text-muted">
              <li><Link to="/products" className="hover:text-sage transition">Collection</Link></li>
              <li><Link to="/products/amethyst" className="hover:text-sage transition">Amethyst</Link></li>
              <li><Link to="/products/obsidian" className="hover:text-sage transition">Obsidian</Link></li>
              <li><Link to="/products/glacier" className="hover:text-sage transition">Glacier</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-primary mb-3">Learn</h4>
            <ul className="space-y-2 text-sm text-muted">
              <li><Link to="/magnesium-deodorant" className="hover:text-sage transition">Magnesium Deodorant</Link></li>
              <li><Link to="/baking-soda-free-deodorant" className="hover:text-sage transition">Baking Soda-Free</Link></li>
              <li><Link to="/sensitive-skin-deodorant" className="hover:text-sage transition">Sensitive Skin</Link></li>
              <li><Link to="/formula" className="hover:text-sage transition">The Formula</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-primary mb-3">Company</h4>
            <ul className="space-y-2 text-sm text-muted">
              <li><Link to="/about" className="hover:text-sage transition">About</Link></li>
              <li><Link to="/faq" className="hover:text-sage transition">FAQ</Link></li>
              <li><Link to="/journal" className="hover:text-sage transition">Journal</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-muted">
          <p>© {new Date().getFullYear()} STEALTH. Developed in Phuket, Thailand.</p>
          <p>0% baking soda · Aluminum-free · Magnesium-based</p>
        </div>
      </div>
    </footer>
  );
}
