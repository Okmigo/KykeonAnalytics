import { Button } from '../components/Button.jsx';

const programs = [
  {
    name: 'Early Warning Mesh',
    description: 'Cross-market intelligence scanning that correlates lab results with vendor chatter and policy changes.',
    deliverables: ['Weekly risk bulletins', 'Automated watchlists', 'Escalation playbooks'],
  },
  {
    name: 'Laboratory Augmentation',
    description: 'GC-MS and LC-MS workflow optimization with templated reporting, QA automation, and spectral gap analysis.',
    deliverables: ['Reference library integration', 'Analyst workflow dashboards', 'Quality compliance tracking'],
  },
  {
    name: 'Community Response Suite',
    description: 'Multi-channel alerting with SMS, email, and in-app notifications tailored to stakeholder sensitivity.',
    deliverables: ['Consent-aware messaging', 'Translation support', 'Impact analytics'],
  },
];

export default function ServicesOrganizations() {
  return (
    <div className="space-y-16">
      <section className="space-y-5">
        <span className="text-sm font-semibold uppercase tracking-wide text-brand-200">For organizations</span>
        <h1 className="font-display text-4xl text-white md:text-5xl">Operational intelligence that scales with your mandate.</h1>
        <p className="max-w-3xl text-base text-slate-300">
          Equip public health agencies, research institutions, and NGOs with the intelligence layer required to act quickly and confidently against emerging chemical threats.
        </p>
      </section>

      <section className="grid gap-8 lg:grid-cols-3">
        {programs.map((program) => (
          <article key={program.name} className="rounded-4xl border border-slate-800/80 bg-slate-900/70 p-8">
            <h2 className="font-display text-2xl text-white">{program.name}</h2>
            <p className="mt-3 text-sm text-slate-300">{program.description}</p>
            <ul className="mt-4 space-y-2 text-sm text-slate-300">
              {program.deliverables.map((deliverable) => (
                <li key={deliverable} className="flex items-center gap-2">
                  <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-brand-300" />
                  {deliverable}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <section className="section-grid p-10">
        <div className="space-y-4">
          <h2 className="font-display text-3xl text-white">Integrate Kykeon with your stack</h2>
          <p className="max-w-3xl text-base text-slate-300">
            Our API, secure SFTP, and dashboard integrations connect directly to PowerBI, Tableau, or custom environments, ensuring data fidelity and compliance.
          </p>
          <Button as="a" href="/contact" className="justify-center sm:w-auto">
            Request deployment plan
          </Button>
        </div>
      </section>
    </div>
  );
}
