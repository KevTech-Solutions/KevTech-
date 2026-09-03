const positioningPoints = [
  {
    title: "Software Engineering",
    detail:
      "Purpose-built web and mobile systems aligned to business workflows.",
  },
  {
    title: "Platform Thinking",
    detail:
      "Scalable foundations that support operations today and growth tomorrow.",
  },
  {
    title: "Practical Automation",
    detail:
      "Automation and intelligent process design that reduce friction and response time.",
  },
];

export default function CompanyPositioning() {
  return (
    <section className="section-padding scroll-mt-24 bg-slate-950" aria-label="Company positioning">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 max-w-3xl space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
            What KevTech Solutions Does
          </p>
          <h2 className="section-title">
            We engineer reliable digital infrastructure for organizations that
            need systems they can trust.
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {positioningPoints.map((point) => (
            <article
              key={point.title}
              className="glass-card rounded-2xl p-6"
            >
              <h3 className="text-lg font-semibold text-white">{point.title}</h3>
              <p className="mt-3 text-sm text-slate-200">{point.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
