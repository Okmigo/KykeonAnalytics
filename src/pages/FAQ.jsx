const faqs = [
  {
    question: 'How quickly can Kykeon deploy for a new jurisdiction?',
    answer: 'We can activate baseline monitoring within 48 hours. Full integrations, including lab data pipelines and escalation workflows, typically deploy in 2–3 weeks.',
  },
  {
    question: 'Do you provide anonymized datasets for research?',
    answer: 'Yes. We share de-identified datasets under strict data sharing agreements that prioritize participant privacy and community consent.',
  },
  {
    question: 'Is the platform accessible for screen reader users?',
    answer: 'Absolutely. We adhere to WCAG 2.2 AA standards and regularly test with screen reader users across desktop and mobile environments.',
  },
];

export default function FAQ() {
  return (
    <div className="space-y-10">
      <section className="space-y-4">
        <span className="text-sm font-semibold uppercase tracking-wide text-brand-200">FAQ</span>
        <h1 className="font-display text-4xl text-white md:text-5xl">Answers to common questions.</h1>
      </section>
      <section className="space-y-4">
        {faqs.map((faq) => (
          <details key={faq.question} className="rounded-3xl border border-slate-800/80 bg-slate-900/70 p-6">
            <summary className="cursor-pointer text-lg font-semibold text-white">
              {faq.question}
            </summary>
            <p className="mt-3 text-sm text-slate-300">{faq.answer}</p>
          </details>
        ))}
      </section>
    </div>
  );
}
