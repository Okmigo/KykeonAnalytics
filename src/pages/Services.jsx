import { Link } from 'react-router-dom';
import { serviceHighlights } from '../data/services.js';
import { Button } from '../components/Button.jsx';
import { Icon } from '../components/Icon.jsx';

export default function Services() {
  return (
    <div className="space-y-16">
      <section className="space-y-4">
        <span className="text-sm font-semibold uppercase tracking-wide text-brand-200">Services</span>
        <h1 className="font-display text-4xl text-white md:text-5xl">Solutions tailored to your mission.</h1>
        <p className="max-w-3xl text-base text-slate-300">
          From forensic-grade lab analysis to scalable community alerts, Kykeon Analytics packages insights into modular services that meet you where you operate.
        </p>
      </section>

      <section className="grid gap-8 lg:grid-cols-3">
        {serviceHighlights.map((service) => (
          <article key={service.title} className="group rounded-4xl border border-slate-800/80 bg-slate-900/70 p-8 transition hover:border-brand-400/60 hover:shadow-card">
            <Icon name={service.icon} className="h-6 w-6 text-brand-300" />
            <h2 className="mt-6 font-display text-2xl text-white">{service.title}</h2>
            <p className="mt-3 text-sm text-slate-300">{service.description}</p>
            <Link to="/contact" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-200">
              Talk to the team
              <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M4 8h8m0 0-3-3m3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </article>
        ))}
      </section>

      <section className="section-grid p-10">
        <div className="space-y-4">
          <h2 className="font-display text-3xl text-white">Choose your path</h2>
          <p className="max-w-3xl text-base text-slate-300">
            Whether you are running a national response center or leading peer outreach, our onboarding team will configure dashboards, risk scoring, and escalation workflows tailored to your risk appetite.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button as={Link} to="/services/organizations" className="justify-center sm:flex-1">
              For organizations
            </Button>
            <Button as={Link} to="/services/users" variant="secondary" className="justify-center sm:flex-1">
              For individuals
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
