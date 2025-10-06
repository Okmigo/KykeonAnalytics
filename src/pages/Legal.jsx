const sections = [
  {
    title: 'Privacy & data stewardship',
    content:
      'Kykeon Analytics collects the minimum amount of personal data necessary to deliver services. All sensitive information is encrypted in transit and at rest. We never sell data and retain only aggregated statistics for research purposes.',
  },
  {
    title: 'Terms of service',
    content:
      'Users agree to utilize Kykeon tools for harm reduction, research, and public health purposes only. Reverse engineering of proprietary components, unauthorized distribution of reports, or malicious misuse is strictly prohibited.',
  },
  {
    title: 'Accessibility',
    content:
      'Our platform conforms to WCAG 2.2 AA guidelines. We welcome feedback and perform quarterly audits to improve digital accessibility and inclusive design.',
  },
];

export default function Legal() {
  return (
    <div className="space-y-10">
      <section className="space-y-4">
        <span className="text-sm font-semibold uppercase tracking-wide text-brand-200">Legal</span>
        <h1 className="font-display text-4xl text-white md:text-5xl">Policies that uphold trust.</h1>
      </section>
      <section className="space-y-6">
        {sections.map((section) => (
          <article key={section.title} className="rounded-4xl border border-slate-800/80 bg-slate-900/70 p-6">
            <h2 id={section.title.toLowerCase().replace(/[^a-z]+/g, '-')}
              className="font-display text-2xl text-white"
            >
              {section.title}
            </h2>
            <p className="mt-3 text-sm text-slate-300">{section.content}</p>
          </article>
        ))}
      </section>
    </div>
  );
}
