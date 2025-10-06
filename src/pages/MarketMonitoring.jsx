import { Button } from '../components/Button.jsx';

const channels = [
  {
    name: 'Vendor ecosystem',
    description: 'Scrapes and enriches listings across surface, social, and dark web marketplaces to flag emerging compounds and suspect vendors.',
  },
  {
    name: 'Clinical signals',
    description: 'Integrates syndromic surveillance, toxicology lab feeds, and hospital admissions to detect unusual presentations early.',
  },
  {
    name: 'Community intel',
    description: 'Analyzes anonymized submissions from drug checking services and peer networks to contextualize lab findings.',
  },
];

export default function MarketMonitoring() {
  return (
    <div className="space-y-16">
      <section className="space-y-4">
        <span className="text-sm font-semibold uppercase tracking-wide text-brand-200">Monitoring network</span>
        <h1 className="font-display text-4xl text-white md:text-5xl">Global visibility into emerging substance markets.</h1>
        <p className="max-w-3xl text-base text-slate-300">
          Kykeon Analytics unifies multi-source data streams into a coherent risk picture so you can respond with precision.
        </p>
      </section>

      <section className="grid gap-8 lg:grid-cols-3">
        {channels.map((channel) => (
          <article key={channel.name} className="rounded-4xl border border-slate-800/80 bg-slate-900/70 p-8">
            <h2 className="font-display text-2xl text-white">{channel.name}</h2>
            <p className="mt-3 text-sm text-slate-300">{channel.description}</p>
          </article>
        ))}
      </section>

      <section className="section-grid p-10">
        <div className="space-y-4">
          <h2 className="font-display text-3xl text-white">Collaborate with confidence</h2>
          <p className="max-w-3xl text-base text-slate-300">
            Share intelligence securely with partner agencies using our access controls, audit trails, and consent-aware data sharing.
          </p>
          <Button as="a" href="/contact" className="justify-center sm:w-auto">
            Request a demo
          </Button>
        </div>
      </section>
    </div>
  );
}
