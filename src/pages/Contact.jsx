import { Button } from '../components/Button.jsx';

export default function Contact() {
  return (
    <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
      <section className="space-y-4">
        <span className="text-sm font-semibold uppercase tracking-wide text-brand-200">Contact</span>
        <h1 className="font-display text-4xl text-white md:text-5xl">Schedule a consultation or request support.</h1>
        <p className="max-w-3xl text-base text-slate-300">
          Our team responds to urgent safety concerns within 6 hours. For partnerships or media inquiries we reply within one business day.
        </p>
        <dl className="grid gap-4 rounded-4xl border border-slate-800/80 bg-slate-900/70 p-6 text-sm text-slate-300">
          <div>
            <dt className="text-xs uppercase tracking-wide text-slate-500">Safety hotline</dt>
            <dd className="mt-1 text-white">+1 (855) 555-4178</dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-wide text-slate-500">Secure email</dt>
            <dd className="mt-1 text-white">support@kykeonanalytics.org</dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-wide text-slate-500">Office hours</dt>
            <dd className="mt-1 text-white">Mon–Fri, 9am–7pm UTC</dd>
          </div>
        </dl>
      </section>

      <form className="section-grid space-y-5 p-8" aria-label="Contact form">
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="contact-name" className="text-sm font-medium text-slate-200">
              Full name
            </label>
            <input
              id="contact-name"
              name="name"
              type="text"
              autoComplete="name"
              required
              className="focus-ring mt-2 w-full rounded-2xl border border-slate-800/80 bg-slate-900/80 px-4 py-3 text-sm text-white placeholder:text-slate-500"
              placeholder="Jordan Smith"
            />
          </div>
          <div>
            <label htmlFor="contact-email" className="text-sm font-medium text-slate-200">
              Email
            </label>
            <input
              id="contact-email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="focus-ring mt-2 w-full rounded-2xl border border-slate-800/80 bg-slate-900/80 px-4 py-3 text-sm text-white placeholder:text-slate-500"
              placeholder="you@example.org"
            />
          </div>
        </div>
        <div>
          <label htmlFor="contact-organization" className="text-sm font-medium text-slate-200">
            Organization
          </label>
          <input
            id="contact-organization"
            name="organization"
            type="text"
            className="focus-ring mt-2 w-full rounded-2xl border border-slate-800/80 bg-slate-900/80 px-4 py-3 text-sm text-white placeholder:text-slate-500"
            placeholder="HarmSafe Network"
          />
        </div>
        <div>
          <label htmlFor="contact-priority" className="text-sm font-medium text-slate-200">
            Priority
          </label>
          <select
            id="contact-priority"
            name="priority"
            className="focus-ring mt-2 w-full rounded-2xl border border-slate-800/80 bg-slate-900/80 px-4 py-3 text-sm text-white"
            defaultValue="Standard"
          >
            <option>Standard</option>
            <option>Urgent safety concern</option>
            <option>Partnership inquiry</option>
            <option>Media request</option>
          </select>
        </div>
        <div>
          <label htmlFor="contact-message" className="text-sm font-medium text-slate-200">
            How can we help?
          </label>
          <textarea
            id="contact-message"
            name="message"
            rows="5"
            className="focus-ring mt-2 w-full rounded-2xl border border-slate-800/80 bg-slate-900/80 px-4 py-3 text-sm text-white placeholder:text-slate-500"
            placeholder="Share details about your needs or situation"
          />
        </div>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <label className="flex items-start gap-3 text-xs text-slate-400">
            <input type="checkbox" className="mt-1 rounded border-slate-700 bg-slate-900 text-brand-400" required />
            I acknowledge the information provided will be handled according to the privacy policy.
          </label>
          <Button type="submit" className="justify-center sm:w-auto">
            Submit request
          </Button>
        </div>
      </form>
    </div>
  );
}
