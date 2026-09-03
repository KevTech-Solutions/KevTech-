import { Blocks, Code2, Cpu, Database, Lightbulb } from "lucide-react";

const services = [
  {
    title: "Custom Software Development",
    what: "Design and build custom web and mobile software around real workflows.",
    why: "Off-the-shelf tools often force teams to adapt to the software.",
    outcome: "A system tailored to your operations, users, and long-term goals.",
    icon: Code2,
  },
  {
    title: "Automation Systems",
    what: "Engineer automated flows for approvals, notifications, and repetitive operations.",
    why: "Manual processes create delays, errors, and avoidable operating cost.",
    outcome: "Faster execution, clearer accountability, and more consistent outcomes.",
    icon: Cpu,
  },
  {
    title: "Platform Development",
    what: "Develop multi-role digital platforms with secure access and operational visibility.",
    why: "Growing organizations need one platform, not disconnected tools.",
    outcome: "A unified platform that supports clients, teams, and administrators.",
    icon: Blocks,
  },
  {
    title: "API & Backend Engineering",
    what: "Build robust backend services, APIs, and data layers for connected systems.",
    why: "Fragile backend architecture slows product delivery and integration.",
    outcome: "Reliable services ready for internal scale and partner integrations.",
    icon: Database,
  },
  {
    title: "Technical Consulting",
    what: "Provide architecture guidance, implementation planning, and delivery support.",
    why: "Complex initiatives fail when decisions are made without technical depth.",
    outcome: "Clear technical direction and confident execution from day one.",
    icon: Lightbulb,
  },
];

export default function Services() {
  return (
    <section id="services" className="section-padding scroll-mt-28 bg-slate-900/60">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
            Services
          </p>
          <h2 className="section-title">Engineering services built around outcomes.</h2>
          <p className="text-lg text-slate-200">
            Every engagement is structured to define what we build, why it matters,
            and what your team gains at delivery.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <article key={service.title} className="glass-card rounded-3xl p-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-cyan-200">
                <service.icon className="h-5 w-5" aria-hidden="true" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-white">{service.title}</h3>
              <dl className="mt-4 space-y-3 text-sm">
                <div>
                  <dt className="font-semibold uppercase tracking-wide text-cyan-200">
                    What we do
                  </dt>
                  <dd className="mt-1 text-slate-200">{service.what}</dd>
                </div>
                <div>
                  <dt className="font-semibold uppercase tracking-wide text-cyan-200">
                    Why it matters
                  </dt>
                  <dd className="mt-1 text-slate-200">{service.why}</dd>
                </div>
                <div>
                  <dt className="font-semibold uppercase tracking-wide text-cyan-200">
                    What you get
                  </dt>
                  <dd className="mt-1 text-slate-200">{service.outcome}</dd>
                </div>
              </dl>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
