import { Link, NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { to: '/products', label: 'Shop' },
  { to: '/formula', label: 'Formula' },
  { to: '/about', label: 'About' },
  { to: '/faq', label: 'FAQ' },
  { to: '/journal', label: 'Journal' },
];

type HeaderProps = {
  variant?: 'default' | 'hero';
};

export default function Header({ variant = 'default' }: HeaderProps) {
  const [open, setOpen] = useState(false);
  const isHero = variant === 'hero';

  useEffect(() => {
    if (!open) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };

    document.addEventListener('keydown', closeOnEscape);
    return () => document.removeEventListener('keydown', closeOnEscape);
  }, [open]);

  return (
    <header
      className={
        isHero
          ? 'relative z-50 bg-transparent'
          : 'sticky top-0 z-50 border-b border-border bg-surface'
      }
    >
      <div
        className={`site-container flex items-center justify-between ${isHero ? 'h-20' : 'h-16'}`}
      >
        <Link to="/" className="flex shrink-0 items-center" onClick={() => setOpen(false)}>
          <img
            src="/assets/logo-mark.png"
            alt="STEALTH"
            className={`w-auto object-contain ${isHero ? 'h-12 sm:h-14' : 'h-11 sm:h-12'}`}
          />
        </Link>

        <button
          type="button"
          className={`inline-flex size-11 items-center justify-center transition-colors ${isHero ? 'text-white hover:bg-black/20' : 'text-text hover:bg-surface-muted'}`}
          onClick={() => setOpen((current) => !current)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="site-navigation"
        >
          {open ? <X size={24} strokeWidth={1.5} aria-hidden="true" /> : <Menu size={24} strokeWidth={1.5} aria-hidden="true" />}
        </button>
      </div>

      {open && (
        <div
          id="site-navigation"
          className="border-t border-text/10 bg-surface"
        >
          <nav
            aria-label="Main navigation"
            className="site-container flex flex-col gap-1 py-5"
          >
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `flex min-h-11 items-center border-b border-text/10 text-sm transition-colors last:border-b-0 hover:underline ${
                    isActive ? 'font-medium text-text underline decoration-action decoration-2 underline-offset-8' : 'text-text'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
