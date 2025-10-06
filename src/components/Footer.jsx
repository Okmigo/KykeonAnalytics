import { Link } from 'react-router-dom';
import { resourceLinks } from '../data/navigation.js';

const socials = [
  { name: 'LinkedIn', href: 'https://linkedin.com', label: 'LinkedIn' },
  { name: 'GitHub', href: 'https://github.com', label: 'GitHub' },
  { name: 'RSS', href: '/blog', label: 'Blog RSS' },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 border-t border-slate-800/60 bg-slate-950/80">
      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-6 py-12 lg:flex-row lg:items-start lg:justify-between lg:px-8">
        <div className="max-w-sm space-y-4">
          <Link to="/" className="focus-ring inline-flex items-center gap-3">
            <span className="relative inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-900">
              <span className="absolute inset-0 animate-glow rounded-2xl bg-brand-500/40 blur-xl" aria-hidden="true" />
              <span className="relative text-lg font-semibold text-white">ΚΑ</span>
            </span>
            <span className="font-display text-lg font-semibold text-white">Kykeon Analytics</span>
          </Link>
          <p className="text-sm text-slate-400">
            Evidence-based intelligence for harm reduction teams, clinicians, and communities responding to newly emerging chemical threats.
          </p>
          <div className="flex items-center gap-4">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.href}
                className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-800/80 text-slate-300 transition hover:border-brand-400/80 hover:text-white"
              >
                <span className="sr-only">{social.label}</span>
                {social.name}
              </a>
            ))}
          </div>
        </div>

        <div className="grid flex-1 grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-400">Resources</h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-300">
              {resourceLinks.map((item) => (
                <li key={item.to}>
                  <Link className="focus-ring hover:text-white" to={item.to}>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-400">Solutions</h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-300">
              <li>
                <Link className="focus-ring hover:text-white" to="/services/organizations">
                  For Organizations
                </Link>
              </li>
              <li>
                <Link className="focus-ring hover:text-white" to="/services/users">
                  For Individuals
                </Link>
              </li>
              <li>
                <Link className="focus-ring hover:text-white" to="/market-monitoring">
                  Market Intelligence
                </Link>
              </li>
              <li>
                <Link className="focus-ring hover:text-white" to="/results">
                  Impact Dashboard
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-400">Compliance</h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-300">
              <li>
                <Link className="focus-ring hover:text-white" to="/legal">
                  Legal &amp; Privacy
                </Link>
              </li>
              <li>
                <Link className="focus-ring hover:text-white" to="/faq">
                  Accessibility Statement
                </Link>
              </li>
              <li>
                <Link className="focus-ring hover:text-white" to="/contact">
                  Contact Support
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800/60 bg-slate-950/90 py-6">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p>&copy; {year} Kykeon Analytics. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link className="focus-ring hover:text-slate-300" to="/legal">
              Privacy Policy
            </Link>
            <Link className="focus-ring hover:text-slate-300" to="/legal#terms">
              Terms of Service
            </Link>
            <Link className="focus-ring hover:text-slate-300" to="/contact">
              Report an Issue
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
