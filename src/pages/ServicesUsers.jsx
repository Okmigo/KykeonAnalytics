import { Button } from '../components/Button.jsx';

const packages = [
  {
    name: 'Personal Alert Feed',
    summary: 'Customized monitoring based on personal interests or prescriptions.',
    features: ['Mobile and email notifications', 'Contextual risk scoring', 'Safer-use recommendations'],
  },
  {
    name: 'Sample Testing Concierge',
    summary: 'Mail-in or drop-in testing with rapid turnaround and plain-language reporting.',
    features: ['Chain-of-custody management', 'Spectral fingerprint comparison', 'Follow-up consultation'],
  },
  {
    name: 'Peer Educator Toolkit',
    summary: 'Workshops, printable guides, and microlearning modules for frontline teams.',
    features: ['Facilitator guides', 'Visual dosing charts', 'Multilingual resources'],
  },
];

export default function ServicesUsers() {
  return (
    <div className="space-y-16">
      <section className="space-y-5">
        <span className="text-sm font-semibold uppercase tracking-wide text-brand-200">For individuals &amp; peer networks</span>
        <h1 className="font-display text-4xl text-white md:text-5xl">Make safer choices with science-backed context.</h1>
        <p className="max-w-3xl text-base text-slate-300">
          Get timely alerts, access testing support, and receive harm reduction guidance designed by clinicians and community advocates.
        </p>
      </section>

      <section className="grid gap-8 lg:grid-cols-3">
        {packages.map((pkg) => (
          <article key={pkg.name} className="rounded-4xl border border-slate-800/80 bg-slate-900/70 p-8">
            <h2 className="font-display text-2xl text-white">{pkg.name}</h2>
            <p className="mt-3 text-sm text-slate-300">{pkg.summary}</p>
            <ul className="mt-4 space-y-2 text-sm text-slate-300">
              {pkg.features.map((feature) => (
                <li key={feature} className="flex items-center gap-2">
                  <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-jade" />
                  {feature}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <section className="section-grid p-10">
        <div className="space-y-4">
          <h2 className="font-display text-3xl text-white">Need urgent advice?</h2>
          <p className="max-w-3xl text-base text-slate-300">
            Our harm reduction specialists provide confidential consultations via secure chat or phone. We help interpret lab results and craft immediate next steps.
          </p>
          <Button as="a" href="/contact" className="justify-center sm:w-auto">
            Get harm reduction advice
          </Button>
        </div>
      </section>
    </div>
  );
}
