import { useMemo, useState } from 'react';
import { riskAlerts, riskDistribution } from '../data/alerts.js';
import { serviceHighlights, stats, testimonials } from '../data/services.js';
import { Button } from '../components/Button.jsx';
import { Icon } from '../components/Icon.jsx';

const riskPalette = {
  High: 'text-ember',
  Medium: 'text-brand-300',
  Low: 'text-jade',
};

const filters = ['All', 'High', 'Medium', 'Low'];

export default function Home() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredAlerts = useMemo(() => {
    if (activeFilter === 'All') return riskAlerts;
    return riskAlerts.filter((alert) => alert.riskLevel === activeFilter);
  }, [activeFilter]);

  return (
    <div className="flex flex-col gap-24">
      <section className="relative overflow-hidden rounded-4xl border border-slate-800/60 bg-gradient-to-br from-slate-950 via-slate-900/60 to-slate-950 p-10 shadow-card">
        <div className="absolute inset-0 bg-grid bg-grid opacity-30" aria-hidden="true" />
        <div className="relative flex flex-col gap-12 lg:flex-row lg:items-center">
          <div className="flex-1 space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-400/30 bg-brand-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-brand-100">
              <span className="h-2 w-2 rounded-full bg-brand-300 animate-pulse" aria-hidden="true" />
              Harm Reduction Platform v3.1
            </div>
            <h1 className="max-w-2xl font-display text-4xl leading-tight text-white md:text-5xl lg:text-6xl">
              Precision intelligence for the next generation of chemical risk.
            </h1>
            <p className="max-w-2xl text-lg text-slate-300">
              Kykeon Analytics fuses laboratory-grade testing, global market monitoring, and actionable harm reduction guidance to keep your communities safe from emerging substances.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button as="a" href="#cta" className="min-w-[200px] justify-center">
                Analyze now
              </Button>
              <Button as="a" href="/services" variant="secondary" className="min-w-[200px] justify-center">
                Explore services
              </Button>
            </div>
            <dl className="grid gap-6 sm:grid-cols-3">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-3xl border border-slate-800/80 bg-slate-900/70 p-5 shadow-inner">
                  <dt className="text-xs uppercase tracking-wide text-slate-400">{stat.label}</dt>
                  <dd className="mt-2 text-2xl font-semibold text-white">{stat.value}</dd>
                  <span className="text-xs text-slate-500">{stat.trend}</span>
                </div>
              ))}
            </dl>
          </div>
          <div className="relative flex-1">
            <div className="absolute -top-20 -right-16 hidden h-64 w-64 animate-glow rounded-full bg-brand-500/40 blur-3xl lg:block" aria-hidden="true" />
            <div className="glass-panel relative z-10 p-8">
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-slate-300">Risk distribution</span>
                <span className="text-xs text-slate-500">Updated 2h ago</span>
              </div>
              <div className="mt-6 grid gap-6">
                {riskDistribution.map((item) => (
                  <div key={item.label} className="space-y-2">
                    <div className="flex items-center justify-between text-sm text-slate-400">
                      <span>{item.label}</span>
                      <span>{item.value}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-slate-800">
                      <div
                        className={`h-full rounded-full ${item.color}`}
                        style={{ width: `${item.value}%` }}
                        role="presentation"
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex items-center justify-between rounded-2xl border border-slate-800/80 bg-slate-900/60 p-4">
                <div>
                  <p className="text-sm font-semibold text-white">Average response time</p>
                  <p className="text-xs text-slate-400">From detection to action</p>
                </div>
                <p className="text-3xl font-semibold text-white">5h</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="services-heading" className="space-y-12">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="text-sm font-semibold uppercase tracking-wide text-brand-200">Capabilities</span>
            <h2 id="services-heading" className="mt-2 font-display text-3xl text-white md:text-4xl">
              Built for public health, forensic labs, and community responders.
            </h2>
            <p className="mt-3 max-w-2xl text-base text-slate-300">
              Each module is engineered to provide clear context, defensible evidence, and rapid escalation pathways when emerging substances appear.
            </p>
          </div>
          <Button as="a" href="/market-monitoring" variant="secondary">
            View monitoring network
          </Button>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {serviceHighlights.map((service) => (
            <article
              key={service.title}
              className="group relative overflow-hidden rounded-4xl border border-slate-800/80 bg-slate-900/70 p-6 transition-all duration-300 ease-soft-spring hover:-translate-y-1 hover:border-brand-400/60 hover:shadow-card"
            >
              <div className="gradient-border inline-flex rounded-full p-[1px]">
                <span className="flex items-center gap-2 rounded-full bg-slate-950/80 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-brand-200">
                  <Icon name={service.icon} className="h-4 w-4 text-brand-300" />
                  Module
                </span>
              </div>
              <h3 className="mt-6 font-display text-xl text-white">{service.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">{service.description}</p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-200">
                Explore module
                <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M4 8h8m0 0-3-3m3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-8" aria-labelledby="alerts-heading">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="text-sm font-semibold uppercase tracking-wide text-brand-200">Live intelligence</span>
            <h2 id="alerts-heading" className="mt-1 font-display text-3xl text-white md:text-4xl">
              Latest risk advisories
            </h2>
            <p className="mt-3 max-w-2xl text-sm text-slate-300">
              Filter the feed to focus on the severity that matters to your teams. Every alert is actionable and includes recommended mitigations.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-2" role="radiogroup" aria-label="Filter alerts by risk level">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                role="radio"
                aria-checked={activeFilter === filter}
                onClick={() => setActiveFilter(filter)}
                className={`focus-ring rounded-full px-4 py-2 text-sm font-medium transition ${
                  activeFilter === filter
                    ? 'bg-brand-500/20 text-brand-100 shadow-[0_0_0_1px_rgba(124,92,255,0.4)]'
                    : 'border border-slate-800/80 bg-slate-900/60 text-slate-300 hover:text-white'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="overflow-hidden rounded-3xl border border-slate-800/80">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-slate-800/80" role="table">
              <thead className="bg-slate-900/70 text-left text-xs uppercase tracking-wide text-slate-400">
                <tr>
                  <th scope="col" className="px-6 py-4">Substance</th>
                  <th scope="col" className="px-6 py-4">Source</th>
                  <th scope="col" className="px-6 py-4">Published</th>
                  <th scope="col" className="px-6 py-4">Outcome</th>
                  <th scope="col" className="px-6 py-4">Recommended action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 bg-slate-950/70">
                {filteredAlerts.map((alert) => (
                  <tr key={`${alert.substance}-${alert.vendor}`} className="transition hover:bg-slate-900/60">
                    <th scope="row" className="whitespace-nowrap px-6 py-4 text-left text-sm font-semibold text-white">
                      {alert.substance}
                      <span className={`ml-2 rounded-full bg-slate-900/70 px-2 py-0.5 text-xs font-semibold ${riskPalette[alert.riskLevel]}`}>
                        {alert.riskLevel}
                      </span>
                    </th>
                    <td className="whitespace-nowrap px-6 py-4 text-sm text-slate-300">{alert.vendor}</td>
                    <td className="whitespace-nowrap px-6 py-4 text-sm text-slate-400">{alert.published}</td>
                    <td className="px-6 py-4 text-sm text-slate-200">{alert.outcome}</td>
                    <td className="px-6 py-4 text-sm text-brand-200">{alert.action}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section-grid px-10 py-12" id="cta" aria-labelledby="cta-heading">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-500/15 via-ocean/10 to-jade/15 opacity-90" aria-hidden="true" />
        <div className="relative grid gap-12 lg:grid-cols-[1.2fr_1fr]">
          <div className="space-y-5">
            <span className="text-sm font-semibold uppercase tracking-wide text-brand-200">Get guidance</span>
            <h2 id="cta-heading" className="font-display text-3xl text-white md:text-4xl">
              Ready to harden your harm reduction response?
            </h2>
            <p className="text-base text-slate-200">
              Start with a rapid assessment call. We will map your data flows, identify blind spots, and deliver a readiness report with prioritized recommendations in less than 72 hours.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button as="a" href="/contact" className="justify-center">Book an assessment</Button>
              <Button as="a" href="/results" variant="secondary" className="justify-center">
                Review sample reports
              </Button>
            </div>
          </div>
          <form className="relative space-y-5 rounded-3xl border border-slate-800/80 bg-slate-950/70 p-6 shadow-card" aria-label="Request consultation">
            <div>
              <label htmlFor="cta-name" className="text-sm font-medium text-slate-200">
                Full name
              </label>
              <input
                id="cta-name"
                name="name"
                type="text"
                autoComplete="name"
                className="focus-ring mt-2 w-full rounded-2xl border border-slate-800/80 bg-slate-900/80 px-4 py-3 text-sm text-white placeholder:text-slate-500"
                placeholder="Alex Johnson"
              />
            </div>
            <div>
              <label htmlFor="cta-email" className="text-sm font-medium text-slate-200">
                Work email
              </label>
              <input
                id="cta-email"
                name="email"
                type="email"
                autoComplete="email"
                className="focus-ring mt-2 w-full rounded-2xl border border-slate-800/80 bg-slate-900/80 px-4 py-3 text-sm text-white placeholder:text-slate-500"
                placeholder="you@organization.org"
              />
            </div>
            <div>
              <label htmlFor="cta-role" className="text-sm font-medium text-slate-200">
                Primary focus
              </label>
              <select
                id="cta-role"
                name="role"
                className="focus-ring mt-2 w-full rounded-2xl border border-slate-800/80 bg-slate-900/80 px-4 py-3 text-sm text-white"
                defaultValue="Public health"
              >
                <option>Public health</option>
                <option>Clinical practice</option>
                <option>Community outreach</option>
                <option>Forensic laboratory</option>
                <option>Policy and regulation</option>
              </select>
            </div>
            <fieldset>
              <legend className="text-sm font-medium text-slate-200">Alert preferences</legend>
              <div className="mt-3 grid gap-2 sm:grid-cols-2">
                <label className="focus-ring flex items-center gap-3 rounded-2xl border border-slate-800/80 bg-slate-900/70 px-4 py-3 text-sm text-slate-300">
                  <input type="checkbox" className="rounded border-slate-700 bg-slate-900 text-brand-400" defaultChecked />
                  Daily briefing
                </label>
                <label className="focus-ring flex items-center gap-3 rounded-2xl border border-slate-800/80 bg-slate-900/70 px-4 py-3 text-sm text-slate-300">
                  <input type="checkbox" className="rounded border-slate-700 bg-slate-900 text-brand-400" />
                  Priority incidents
                </label>
                <label className="focus-ring flex items-center gap-3 rounded-2xl border border-slate-800/80 bg-slate-900/70 px-4 py-3 text-sm text-slate-300">
                  <input type="checkbox" className="rounded border-slate-700 bg-slate-900 text-brand-400" defaultChecked />
                  Harm reduction briefs
                </label>
                <label className="focus-ring flex items-center gap-3 rounded-2xl border border-slate-800/80 bg-slate-900/70 px-4 py-3 text-sm text-slate-300">
                  <input type="checkbox" className="rounded border-slate-700 bg-slate-900 text-brand-400" />
                  Vendor watchlist
                </label>
              </div>
            </fieldset>
            <Button type="submit" className="w-full justify-center">
              Get harm reduction advice
            </Button>
            <p className="text-xs text-slate-500">
              By submitting this form you agree to the processing of your data in accordance with our privacy policy.
            </p>
          </form>
        </div>
      </section>

      <section aria-labelledby="testimonials-heading" className="space-y-6">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="text-sm font-semibold uppercase tracking-wide text-brand-200">Community impact</span>
            <h2 id="testimonials-heading" className="mt-1 font-display text-3xl text-white md:text-4xl">
              Trusted by harm reduction leaders worldwide.
            </h2>
          </div>
          <Button as="a" href="/results" variant="secondary">
            View success stories
          </Button>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          {testimonials.map((testimonial) => (
            <figure
              key={testimonial.author}
              className="group rounded-4xl border border-slate-800/80 bg-slate-900/70 p-8 transition duration-300 hover:border-brand-400/60 hover:shadow-card"
            >
              <Icon name="SparklesIcon" className="h-7 w-7 text-brand-300" />
              <blockquote className="mt-6 text-lg text-slate-200">
                “{testimonial.quote}”
              </blockquote>
              <figcaption className="mt-6 text-sm text-slate-400">
                <span className="font-semibold text-white">{testimonial.author}</span>
                <br />
                {testimonial.title}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </div>
  );
}
