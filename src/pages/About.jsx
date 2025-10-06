const pillars = [
  {
    title: 'Scientific rigor',
    description: 'Our team includes forensic chemists, epidemiologists, and harm reduction strategists dedicated to reproducible, peer-reviewed methodologies.',
  },
  {
    title: 'Community accountability',
    description: 'Every program is co-designed with the communities most impacted to ensure transparency, consent, and culturally responsive approaches.',
  },
  {
    title: 'Ethical innovation',
    description: 'We prioritize privacy, open science, and equitable data practices while building novel tools to outpace emerging threats.',
  },
];

export default function About() {
  return (
    <div className="space-y-16">
      <section className="space-y-4">
        <span className="text-sm font-semibold uppercase tracking-wide text-brand-200">About</span>
        <h1 className="font-display text-4xl text-white md:text-5xl">We blend laboratory excellence with community care.</h1>
        <p className="max-w-3xl text-base text-slate-300">
          Kykeon Analytics exists to illuminate the unknown. We support harm reduction ecosystems with research-grade tools that respect the people they serve.
        </p>
      </section>

      <section className="grid gap-8 lg:grid-cols-3">
        {pillars.map((pillar) => (
          <article key={pillar.title} className="rounded-4xl border border-slate-800/80 bg-slate-900/70 p-8">
            <h2 className="font-display text-2xl text-white">{pillar.title}</h2>
            <p className="mt-3 text-sm text-slate-300">{pillar.description}</p>
          </article>
        ))}
      </section>

      <section className="section-grid p-10">
        <div className="space-y-3">
          <h2 className="font-display text-3xl text-white">Our pledge</h2>
          <p className="max-w-3xl text-base text-slate-300">
            We commit to ethical research, accessible design, and data sovereignty. All findings are shared with partners and communities first, with clear attribution and consent.
          </p>
          <p className="text-sm text-slate-400">
            Want to collaborate on research or public health programs? Reach out to research@kykeonanalytics.org.
          </p>
        </div>
      </section>
    </div>
  );
}
