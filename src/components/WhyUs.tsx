import { Compass, LayoutGrid, Shield, Target, Workflow, Wrench } from "lucide-react";

const reasons = [
  {
    title: "Built for practical operations",
    description:
      "We prioritize systems that solve daily operational constraints, not decorative prototypes.",
    icon: Wrench,
  },
  {
    title: "Scalable architecture mindset",
    description:
      "Our delivery favors clean boundaries, maintainability, and predictable scale behavior.",
    icon: LayoutGrid,
  },
  {
    title: "Reliability-first engineering",
    description:
      "Quality gates, testing discipline, and secure defaults are part of every release cycle.",
    icon: Shield,
  },
  {
    title: "Clear technical communication",
    description:
      "Stakeholders stay informed through transparent priorities and delivery tradeoff decisions.",
    icon: Target,
  },
  {
    title: "African-built, globally ambitious",
    description:
      "We build from local realities while engineering to global software quality expectations.",
    icon: Compass,
  },
  {
    title: "Long-term improvement approach",
    description:
      "Post-launch refinement ensures systems continue to improve as requirements evolve.",
    icon: Workflow,
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="section-padding scroll-mt-28 bg-slate-900/70">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
            Why KevTech
          </p>
          <h2 className="section-title">A disciplined engineering partner for serious digital work.</h2>
          <p className="text-lg text-slate-200">
            We combine technical depth with product pragmatism to deliver systems
            teams can operate with confidence.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason) => (
            <article key={reason.title} className="glass-card rounded-2xl p-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-cyan-200">
                <reason.icon className="h-5 w-5" aria-hidden="true" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{reason.title}</h3>
              <p className="mt-2 text-sm text-slate-200">{reason.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
