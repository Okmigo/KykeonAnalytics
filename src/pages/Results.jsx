import { Button } from '../components/Button.jsx';

const metrics = [
  { label: 'Median detection lead time', value: '72 hrs faster', detail: 'Compared to baseline national reporting.' },
  { label: 'Incident escalation success', value: '94%', detail: 'Alerts that resulted in mitigation actions.' },
  { label: 'Stakeholder satisfaction', value: '4.8/5', detail: 'Based on quarterly partner surveys.' },
];

const caseStudies = [
  {
    title: 'Containing the X-17 outbreak',
    description: 'Regional harm reduction coalition used Kykeon alerts to mobilize testing and outreach, preventing 140 potential hospitalizations.',
  },
  {
    title: 'Policy change backed by data',
    description: 'Evidence brief led to the reclassification of a novel steroid and funding for targeted surveillance.',
  },
];

export default function Results() {
  return (
    <div className="space-y-16">
      <section className="space-y-4">
        <span className="text-sm font-semibold uppercase tracking-wide text-brand-200">Impact dashboard</span>
        <h1 className="font-display text-4xl text-white md:text-5xl">Measuring the difference harm reduction intelligence makes.</h1>
        <p className="max-w-3xl text-base text-slate-300">
          Kykeon Analytics partners with agencies across the globe to drive measurable outcomes. Explore the metrics that define success.
        </p>
      </section>

      <section className="grid gap-6 sm:grid-cols-3">
        {metrics.map((metric) => (
          <article key={metric.label} className="rounded-4xl border border-slate-800/80 bg-slate-900/70 p-8 text-center">
            <h2 className="text-xs font-semibold uppercase tracking-wide text-slate-400">{metric.label}</h2>
            <p className="mt-4 text-3xl font-semibold text-white">{metric.value}</p>
            <p className="mt-2 text-sm text-slate-400">{metric.detail}</p>
          </article>
        ))}
      </section>

      <section className="grid gap-8 lg:grid-cols-2">
        {caseStudies.map((study) => (
          <article key={study.title} className="section-grid p-8">
            <h2 className="font-display text-2xl text-white">{study.title}</h2>
            <p className="mt-4 text-sm text-slate-300">{study.description}</p>
            <Button as="a" href="/contact" variant="secondary" className="mt-6 w-full justify-center">
              Request the full report
            </Button>
          </article>
        ))}
      </section>
    </div>
  );
}
