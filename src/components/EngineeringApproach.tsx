const steps = [
  {
    label: "Understand",
    text: "Clarify business context, users, constraints, and success criteria.",
  },
  {
    label: "Architect",
    text: "Design a practical technical approach aligned to reliability and scale.",
  },
  {
    label: "Engineer",
    text: "Implement clean, maintainable systems with clear ownership boundaries.",
  },
  {
    label: "Validate",
    text: "Test functionality, resilience, and usability before release decisions.",
  },
  {
    label: "Deploy",
    text: "Ship through structured release workflows with production-readiness checks.",
  },
  {
    label: "Improve",
    text: "Iterate using feedback and operational insights to strengthen performance.",
  },
];

export default function EngineeringApproach() {
  return (
    <section id="approach" className="section-padding scroll-mt-28 bg-slate-950">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
            Engineering Approach
          </p>
          <h2 className="section-title">Disciplined delivery from discovery to improvement.</h2>
          <p className="text-lg text-slate-200">
            Our process is structured to reduce project risk and keep delivery
            grounded in measurable business value.
          </p>
        </div>

        <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, index) => (
            <li key={step.label} className="glass-card rounded-2xl p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">
                Step {index + 1}
              </p>
              <h3 className="mt-2 text-lg font-semibold text-white">{step.label}</h3>
              <p className="mt-2 text-sm text-slate-200">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
