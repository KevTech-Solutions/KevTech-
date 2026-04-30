"use client";

import { motion } from "framer-motion";
import {
  Blocks,
  Code2,
  Cpu,
  Database,
  Lightbulb,
  Sparkles,
} from "lucide-react";
import { fadeUp, scaleIn, staggerContainer } from "@/lib/animations";

const services = [
  {
    title: "Custom Software Development",
    description:
      "Bespoke web and mobile systems built to match real operational workflows.",
    benefits: ["Tailored architecture", "Scalable delivery"],
    icon: Code2,
  },
  {
    title: "Automation Systems",
    description:
      "Workflow automation that removes friction, reduces cost, and boosts speed.",
    benefits: ["Process efficiency", "Intelligent triggers"],
    icon: Cpu,
  },
  {
    title: "Platform Development",
    description:
      "Robust platforms with multi-role access, analytics, and secure data layers.",
    benefits: ["Enterprise-ready", "Secure by design"],
    icon: Blocks,
  },
  {
    title: "API & Backend Engineering",
    description:
      "Reliable backend infrastructure and API gateways for connected ecosystems.",
    benefits: ["High availability", "Future-proof integrations"],
    icon: Database,
  },
  {
    title: "Technical Consulting",
    description:
      "Strategic advisory and delivery support for complex digital transformations.",
    benefits: ["Product clarity", "Execution confidence"],
    icon: Lightbulb,
  },
];

export default function Services() {
  return (
    <section id="services" className="section-padding bg-slate-900/60">
      <div className="mx-auto max-w-6xl">
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
            Services
          </motion.p>
          <motion.h2 variants={fadeUp} className="section-title">
            Full-spectrum engineering services for ambitious teams.
          </motion.h2>
          <motion.p variants={fadeUp} className="max-w-2xl text-lg text-slate-200">
            We partner with institutions, startups, and enterprises to design,
            build, and scale digital systems with measurable outcomes.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={scaleIn}
              whileHover={{ y: -6 }}
              className="glass-card flex h-full flex-col gap-5 rounded-3xl p-6"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-cyan-200">
                <service.icon className="h-6 w-6" />
              </div>
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-white">
                  {service.title}
                </h3>
                <p className="text-sm text-slate-200">
                  {service.description}
                </p>
              </div>
              <div className="mt-auto rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-xs text-slate-200">
                <div className="flex items-center gap-2 text-cyan-200">
                  <Sparkles className="h-4 w-4" />
                  Benefits
                </div>
                <ul className="mt-2 space-y-1">
                  {service.benefits.map((benefit) => (
                    <li key={benefit}>{benefit}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
