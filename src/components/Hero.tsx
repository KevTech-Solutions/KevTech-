"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { fadeUp, floatSlow, staggerContainer } from "@/lib/animations";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden pt-28 text-slate-100"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-32 right-10 h-72 w-72 rounded-full bg-purple-500/30 blur-3xl" />
        <div className="absolute top-20 left-6 h-80 w-80 rounded-full bg-cyan-400/25 blur-3xl" />
        <div className="absolute bottom-10 right-1/2 h-96 w-96 rounded-full bg-indigo-500/20 blur-3xl" />
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/20 via-slate-950/70 to-slate-950" />
      </div>

      <div className="mx-auto flex max-w-6xl flex-col gap-16 px-6 pb-24 pt-16 lg:flex-row lg:items-center lg:gap-24">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="flex-1 space-y-8"
        >
          <motion.p
            variants={fadeUp}
            className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300"
          >
            Quality Tech — Here For You
          </motion.p>
          <motion.h1
            variants={fadeUp}
            className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl"
          >
            Building Reliable Digital Solutions For Modern Businesses
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="max-w-xl text-lg text-slate-200"
          >
            We develop scalable software systems, intelligent platforms, and
            automation solutions designed for real-world impact.
          </motion.p>
          <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
            <Link
              href="#services"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-200"
            >
              Our Services
            </Link>
            <Link
              href="#contact"
              className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/60"
            >
              Contact Us
            </Link>
          </motion.div>
        </motion.div>

        <div className="relative flex-1">
          <motion.div
            variants={floatSlow}
            initial="initial"
            animate="animate"
            className="glass-card relative overflow-hidden rounded-3xl border border-white/20 p-6"
          >
            <div className="absolute inset-0 animate-gradient bg-gradient-to-br from-cyan-500/20 via-purple-500/20 to-blue-500/20" />
            <div className="relative space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-300">
                    Platform Pulse
                  </p>
                  <h3 className="text-2xl font-semibold">KevTech Control Room</h3>
                </div>
                <span className="rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-medium text-white">
                  Live
                </span>
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm">
                {[
                  "Automation Pipelines",
                  "Platform Engineering",
                  "Intelligent Workflows",
                  "Secure API Layers",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-slate-100"
                  >
                    {item}
                  </div>
                ))}
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs text-slate-300">
                  <span>System Reliability</span>
                  <span>99.98%</span>
                </div>
                <div className="h-2 rounded-full bg-white/10">
                  <div className="h-2 w-[92%] rounded-full bg-gradient-to-r from-cyan-400 to-purple-500" />
                </div>
              </div>
            </div>
          </motion.div>

          <div className="absolute -bottom-10 -left-10 hidden h-36 w-36 rounded-full bg-cyan-400/20 blur-2xl lg:block" />
        </div>
      </div>
    </section>
  );
}
