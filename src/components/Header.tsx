import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';

const navLinks = [
  { to: '/products', label: 'Shop' },
  { to: '/formula', label: 'Formula' },
  { to: '/about', label: 'About' },
  { to: '/faq', label: 'FAQ' },
  { to: '/journal', label: 'Journal' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-parchment/95 backdrop-blur border-b border-border">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 flex items-center justify-between h-14">
        <Link to="/" className="flex items-center shrink-0">
          <img
            src="/assets/logo-label-nav.png"
            alt="STEALTH"
            className="h-7 w-auto object-contain"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-[13px] text-muted">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `hover:text-primary transition-colors ${
                  isActive ? 'text-primary font-medium' : ''
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <Link
          to="/products"
          className="hidden md:inline-flex items-center px-4 py-2 text-[13px] font-medium bg-sage text-white rounded-full hover:bg-sage-600 transition"
        >
          Shop
        </Link>

        <button
          type="button"
          className="md:hidden p-2 text-primary"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <HiX size={22} /> : <HiMenu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-parchment">
          <nav className="flex flex-col px-4 py-4 gap-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `py-2.5 text-sm ${isActive ? 'font-medium text-primary' : 'text-muted'}`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <Link
              to="/products"
              onClick={() => setOpen(false)}
              className="mt-3 inline-flex justify-center px-4 py-2.5 text-sm font-medium bg-sage text-white rounded-full"
            >
              Shop the Collection
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
