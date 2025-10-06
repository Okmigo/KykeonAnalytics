const posts = [
  {
    title: 'Field report: safer supply innovations in Lisbon',
    excerpt: 'How a coalition of clinicians and mutual aid groups stabilized overdose spikes with distributed testing kits.',
    date: 'July 22, 2024',
  },
  {
    title: 'What GC-MS can reveal in under 90 seconds',
    excerpt: 'Optimizing sample preparation and reference matching to accelerate harm reduction response windows.',
    date: 'June 18, 2024',
  },
  {
    title: 'Designing culturally responsive alerts',
    excerpt: 'Lessons from co-creating harm reduction messages in five languages.',
    date: 'May 30, 2024',
  },
];

export default function Blog() {
  return (
    <div className="space-y-10">
      <section className="space-y-4">
        <span className="text-sm font-semibold uppercase tracking-wide text-brand-200">Blog</span>
        <h1 className="font-display text-4xl text-white md:text-5xl">Stories from the field.</h1>
      </section>
      <section className="grid gap-6 md:grid-cols-2">
        {posts.map((post) => (
          <article key={post.title} className="rounded-4xl border border-slate-800/80 bg-slate-900/70 p-6">
            <h2 className="font-display text-2xl text-white">{post.title}</h2>
            <p className="mt-3 text-sm text-slate-300">{post.excerpt}</p>
            <p className="mt-4 text-xs uppercase tracking-wide text-slate-500">{post.date}</p>
          </article>
        ))}
      </section>
    </div>
  );
}
