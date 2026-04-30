"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { Target, Sparkles, ShieldCheck } from "lucide-react";

const values = [
  "Innovation",
  "Reliability",
  "Quality",
  "Integrity",
  "User-centered design",
  "Continuous improvement",
];

const pillars = [
  {
    title: "Vision",
    icon: Sparkles,
    description:
      "To become a leading African technology company delivering impactful and scalable software solutions.",
  },
  {
    title: "Mission",
    icon: Target,
    description:
      "To build high-quality digital systems that empower businesses, institutions, and communities through innovation and practical technology.",
  },
  {
    title: "Core Values",
    icon: ShieldCheck,
    description: "Driven by principles that keep every product resilient and trusted.",
  },
];

export default function About() {
  return (
    <section id="about" className="section-padding bg-slate-950">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.1fr_1fr]">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-6"
        >
          <motion.p
            variants={fadeUp}
            className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300"
          >
            About KevTech Solutions
          </motion.p>
          <motion.h2 variants={fadeUp} className="section-title">
            African-built technology for ambitious digital transformation.
          </motion.h2>
          <motion.p variants={fadeUp} className="text-lg text-slate-200">
            KevTech Solutions is a software engineering and digital solutions
            company focused on building custom platforms, automation systems, and
            intelligent workflows that help modern businesses scale responsibly.
            We operate with the mindset of a high-growth African startup ready to
            serve regional and global markets.
          </motion.p>
          <motion.div
            variants={fadeUp}
            className="flex flex-wrap gap-3 text-sm"
          >
            {values.map((value) => (
              <span
                key={value}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-slate-100"
              >
                {value}
              </span>
            ))}
          </motion.div>
        </motion.div>

        <div className="space-y-6">
          {pillars.map((pillar) => (
            <motion.div
              key={pillar.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              className="glass-card flex gap-4 rounded-2xl p-6"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-cyan-200">
                <pillar.icon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-sm text-slate-200">
                  {pillar.description}
                </p>
                {pillar.title === "Core Values" && (
                  <div className="mt-3 grid grid-cols-2 gap-2 text-xs text-slate-300">
                    {values.map((value) => (
                      <span key={value}>{value}</span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
