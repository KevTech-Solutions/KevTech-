const values = [
  "Innovation",
  "Reliability",
  "Quality",
  "Integrity",
  "User-centered design",
  "Continuous improvement",
];

export default function About() {
  return (
    <section id="about" className="section-padding scroll-mt-28 bg-slate-950">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="space-y-6">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
            About KevTech Solutions
          </p>
          <h2 className="section-title">
            A software engineering company focused on useful, credible technology.
          </h2>
          <p className="text-lg text-slate-200">
            KevTech Solutions builds digital products and operational systems for
            institutions, businesses, and teams that need dependable technology.
            Our work is grounded in practical delivery, clear architecture, and
            real-world usability.
          </p>
        </div>

        <div className="space-y-5">
          <article className="glass-card rounded-2xl p-6">
            <h3 className="text-lg font-semibold text-white">Vision</h3>
            <p className="mt-2 text-sm text-slate-200">
              To be a trusted African technology company engineering digital
              systems with strong local relevance and global execution quality.
            </p>
          </article>
          <article className="glass-card rounded-2xl p-6">
            <h3 className="text-lg font-semibold text-white">Mission</h3>
            <p className="mt-2 text-sm text-slate-200">
              To deliver high-quality software solutions that empower organizations
              through practical innovation and responsible engineering.
            </p>
          </article>
          <article className="glass-card rounded-2xl p-6">
            <h3 className="text-lg font-semibold text-white">Core Values</h3>
            <ul className="mt-3 grid grid-cols-2 gap-2 text-sm text-slate-200">
              {values.map((value) => (
                <li key={value}>{value}</li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}
