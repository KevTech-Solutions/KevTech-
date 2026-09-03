import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden px-6 pb-20 pt-36 text-slate-100 sm:px-10 lg:px-16"
    >
      <div className="absolute inset-0 -z-10 bg-grid opacity-30" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.2),transparent_45%),radial-gradient(circle_at_15%_15%,rgba(59,130,246,0.18),transparent_40%),radial-gradient(circle_at_50%_100%,rgba(168,85,247,0.18),transparent_42%)]" />

      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
        <div className="space-y-8">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
            Quality Tech — Here For You
          </p>
          <h1 className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
            Engineering Digital Systems That Move Businesses Forward.
          </h1>
          <p className="max-w-2xl text-lg text-slate-200">
            KevTech Solutions designs and delivers custom software, automation
            systems, and product platforms built for practical operations,
            resilient scale, and real-world impact.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="#contact"
              className="rounded-full bg-cyan-300 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
            >
              Start a Project
            </Link>
            <Link
              href="#products"
              className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/60"
            >
              Explore Our Work
            </Link>
          </div>
        </div>

        <div className="glass-card relative overflow-hidden rounded-3xl p-6 sm:p-8">
          <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 via-transparent to-purple-500/10" />
          <div className="relative space-y-6">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-300">
              System Design Snapshot
            </p>
            <div className="grid grid-cols-3 gap-3 text-xs">
              {[
                "Client Apps",
                "API Layer",
                "Data Layer",
                "Automation",
                "Realtime Events",
                "Observability",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-white/15 bg-slate-900/80 px-3 py-2 text-slate-100"
                >
                  {item}
                </div>
              ))}
            </div>
            <div className="space-y-3 rounded-2xl border border-white/10 bg-slate-900/70 p-4">
              <p className="text-sm text-slate-200">
                Architecture-first execution with secure APIs, role-aware
                workflows, and dependable integration pipelines.
              </p>
              <div className="h-px bg-white/10" />
              <p className="text-sm text-slate-300">
                Designed to support products like QuickFix and enterprise-grade
                internal systems.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
