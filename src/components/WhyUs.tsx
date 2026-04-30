"use client";

import { motion } from "framer-motion";
import {
  Compass,
  LayoutGrid,
  Shield,
  Sparkles,
  Target,
  Workflow,
} from "lucide-react";
import { fadeUp, scaleIn, staggerContainer } from "@/lib/animations";

const features = [
  {
    title: "Scalable architecture",
    description: "Cloud-ready systems designed to grow with demand.",
    icon: LayoutGrid,
  },
  {
    title: "Modern technologies",
    description: "Next.js, Node.js, and mobile-first stacks for speed.",
    icon: Sparkles,
  },
  {
    title: "Reliable engineering",
    description: "Quality-first delivery with resilient infrastructure.",
    icon: Shield,
  },
  {
    title: "User-centered design",
    description: "Interfaces crafted for clarity, trust, and adoption.",
    icon: Target,
  },
  {
    title: "Real-world problem solving",
    description: "Solutions rooted in operational and community impact.",
    icon: Compass,
  },
  {
    title: "Agile development approach",
    description: "Iterative delivery, transparent communication, and speed.",
    icon: Workflow,
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="section-padding bg-slate-900/70">
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
            Why Choose Us
          </motion.p>
          <motion.h2 variants={fadeUp} className="section-title">
            We build dependable platforms with a startup-speed mindset.
          </motion.h2>
          <motion.p variants={fadeUp} className="max-w-2xl text-lg text-slate-200">
            Every engagement is guided by quality engineering, business empathy,
            and a relentless focus on measurable outcomes.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={scaleIn}
              className="glass-card rounded-3xl p-6"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-cyan-200">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm text-slate-200">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
