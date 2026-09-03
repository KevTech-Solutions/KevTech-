import { Activity, BadgeCheck, Layers, ShieldCheck, Star, Zap } from "lucide-react";

const quickFixCapabilities = [
  "Technician matching",
  "Emergency requests",
  "Escrow-secured payments",
  "Service tracking",
  "Ratings and reviews",
  "Real-time technician dispatch",
  "Multi-role access",
  "Marketplace analytics",
];

const quickFixStack = [
  "React Native / Expo",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Socket.IO",
  "M-Pesa",
  "IntaSend",
  "JWT",
];

const projects = [
  {
    title: "MindGuard AI",
    description:
      "Mental health classification project with analytical outputs designed for institutional insight.",
  },
  {
    title: "KevTech Net",
    description:
      "Linux-focused hotspot management platform for intelligent connectivity control and monitoring.",
  },
  {
    title: "C-Wallet",
    description:
      "Digital wallet concept centered on secure transactions, account controls, and financial visibility.",
  },
  {
    title: "WekaCert",
    description:
      "Certification and document management platform supporting verification and renewal workflows.",
  },
  {
    title: "Livestock Management System",
    description:
      "Operations platform for livestock tracking, health records, and farm productivity workflows.",
  },
];

export default function Products() {
  return (
    <section id="products" className="section-padding scroll-mt-28 bg-slate-950">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
            Products & Projects
          </p>
          <h2 className="section-title">QuickFix leads our product portfolio.</h2>
          <p className="text-lg text-slate-200">
            We build product systems that combine marketplace logic, real-time
            operations, and dependable payments in practical contexts.
          </p>
        </div>

        <article className="glass-card mt-12 grid gap-10 rounded-3xl p-8 lg:grid-cols-[1.25fr_0.75fr]">
          <div className="space-y-6">
            <span className="inline-flex rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">
              QuickFix · Flagship Product
            </span>
            <h3 className="text-3xl font-semibold text-white">QuickFix — Home Service Marketplace</h3>
            <p className="text-sm text-slate-200">
              QuickFix connects customers to technicians with dispatch workflows,
              secure payment handling, and role-based marketplace operations.
            </p>

            <div className="grid gap-3 sm:grid-cols-2">
              {quickFixCapabilities.map((capability) => (
                <p
                  key={capability}
                  className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-100"
                >
                  <BadgeCheck className="h-4 w-4 text-cyan-300" aria-hidden="true" />
                  {capability}
                </p>
              ))}
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-sm text-slate-200">
              <div className="flex items-center gap-2 text-cyan-200">
                <Layers className="h-4 w-4" aria-hidden="true" />
                Architecture + Stack
              </div>
              <p className="mt-2">
                {quickFixStack.join(" · ")}
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="rounded-2xl border border-white/10 bg-slate-900/75 p-5">
              <div className="flex items-center gap-2 text-sm text-cyan-200">
                <Activity className="h-5 w-5" aria-hidden="true" />
                Real-time Operations
              </div>
              <p className="mt-2 text-sm text-slate-200">
                Socket.IO-powered dispatch, job state updates, and synchronized
                technician-client visibility.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-slate-900/75 p-5">
              <div className="flex items-center gap-2 text-sm text-purple-200">
                <ShieldCheck className="h-5 w-5" aria-hidden="true" />
                Trust Model
              </div>
              <p className="mt-2 text-sm text-slate-200">
                Escrow-based payments, role permissions, and ratings to improve
                service confidence and marketplace integrity.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-slate-900/75 p-5">
              <div className="flex items-center gap-2 text-sm text-amber-200">
                <Zap className="h-5 w-5" aria-hidden="true" />
                Payment Integrations
              </div>
              <p className="mt-2 text-sm text-slate-200">
                M-Pesa and IntaSend integration patterns for regional transaction
                practicality.
              </p>
            </div>
          </div>
        </article>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <article key={project.title} className="glass-card rounded-2xl p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                <Star className="h-5 w-5 text-cyan-300" aria-hidden="true" />
              </div>
              <p className="mt-3 text-sm text-slate-200">{project.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
