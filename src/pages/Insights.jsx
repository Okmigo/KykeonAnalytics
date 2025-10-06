import { Link } from 'react-router-dom';
import { Button } from '../components/Button.jsx';

const insights = [
  {
    title: 'Metabolite signatures of emerging synthetic cathinones',
    summary: 'Comparative study highlighting spectral markers for rapid lab classification and harm reduction messaging.',
    date: 'Sept 15, 2024',
    category: 'Research',
  },
  {
    title: 'Building an equitable early warning system',
    summary: 'A guide to co-designing alerts with community partners, centering accessibility and trust.',
    date: 'Aug 28, 2024',
    category: 'Playbook',
  },
  {
    title: 'What we learned from 12k drug-checking submissions',
    summary: 'Key insights on adulteration trends, vendor behavior, and interventions that worked.',
    date: 'Aug 4, 2024',
    category: 'Data story',
  },
];

export default function Insights() {
  return (
    <div className="space-y-16">
      <section className="space-y-4">
        <span className="text-sm font-semibold uppercase tracking-wide text-brand-200">Insights</span>
        <h1 className="font-display text-4xl text-white md:text-5xl">Science-first perspectives on harm reduction.</h1>
        <p className="max-w-3xl text-base text-slate-300">
          Explore the latest analysis, playbooks, and data narratives crafted by the Kykeon research team.
        </p>
      </section>

      <section className="grid gap-8 lg:grid-cols-3">
        {insights.map((item) => (
          <article key={item.title} className="group flex h-full flex-col rounded-4xl border border-slate-800/80 bg-slate-900/70 p-8 transition hover:border-brand-400/60 hover:shadow-card">
            <span className="text-xs font-semibold uppercase tracking-wide text-brand-200">{item.category}</span>
            <h2 className="mt-4 font-display text-2xl text-white">{item.title}</h2>
            <p className="mt-3 flex-1 text-sm text-slate-300">{item.summary}</p>
            <div className="mt-6 flex items-center justify-between text-xs text-slate-500">
              <span>{item.date}</span>
              <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-brand-200">
                Read full brief
                <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M4 8h8m0 0-3-3m3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          </article>
        ))}
      </section>

      <section className="section-grid p-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="font-display text-3xl text-white">Subscribe to our lab notes</h2>
            <p className="mt-2 max-w-xl text-sm text-slate-300">
              Monthly digest of novel compounds, protocol updates, and field-tested harm reduction strategies.
            </p>
          </div>
          <form className="flex w-full max-w-lg flex-col gap-3 sm:flex-row" aria-label="Subscribe to newsletter">
            <label className="sr-only" htmlFor="insights-email">
              Email address
            </label>
            <input
              id="insights-email"
              type="email"
              required
              placeholder="you@example.com"
              className="focus-ring w-full flex-1 rounded-full border border-slate-800/80 bg-slate-900/80 px-5 py-3 text-sm text-white placeholder:text-slate-500"
            />
            <Button type="submit" className="justify-center">
              Join the list
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
}
