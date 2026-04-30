"use client";

import { motion } from "framer-motion";
import {
  Activity,
  BadgeCheck,
  Layers,
  ShieldCheck,
  Star,
  Zap,
} from "lucide-react";
import { fadeUp, scaleIn, staggerContainer } from "@/lib/animations";

const quickFixFeatures = [
  "Technician matching",
  "Escrow-secured payments",
  "Emergency requests",
  "Service tracking",
  "Ratings & reviews",
];

const quickFixHighlights = [
  "Real-time technician dispatch with Socket.IO tracking",
  "Multi-role access for clients, technicians, and admins",
  "Escrow wallet protection with M-Pesa integrations",
  "Marketplace analytics for service quality and demand",
];

const projects = [
  {
    title: "MindGuard AI",
    description:
      "Student mental health classification pipeline with analytics dashboards for institutions.",
    stack: "Python · Scikit-learn · Pandas · NumPy · Matplotlib",
  },
  {
    title: "KevTech Net",
    description:
      "Advanced WiFi hotspot manager for Linux with intelligent internet sharing and monitoring.",
    stack: "C++17 · Qt6 · CMake · NetworkManager",
  },
  {
    title: "C-Wallet",
    description:
      "Multi-wallet financial system with PIN security, dashboards, and transaction tracking.",
    stack: "Secure wallet architecture · Analytics-first design",
  },
  {
    title: "WekaCert",
    description:
      "Certification & document management platform with verification, vault, and renewal flows.",
    stack: "React Native · Node.js · MongoDB · JWT",
  },
  {
    title: "Livestock Management System",
    description:
      "Farm operations suite for livestock tracking, health monitoring, and productivity analytics.",
    stack: "Operational dashboards · Smart alerts",
  },
];

export default function Products() {
  return (
    <section id="products" className="section-padding bg-slate-950">
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
            Products & Platforms
          </motion.p>
          <motion.h2 variants={fadeUp} className="section-title">
            Flagship solutions engineered for real-world impact.
          </motion.h2>
          <motion.p variants={fadeUp} className="max-w-2xl text-lg text-slate-200">
            From marketplace platforms to AI analytics, our product portfolio
            showcases scalable architecture and intelligent digital systems.
          </motion.p>
        </motion.div>

        <motion.div
          variants={scaleIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="glass-card mt-12 grid gap-10 rounded-3xl p-8 lg:grid-cols-[1.2fr_1fr]"
        >
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <span className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">
                QuickFix · Flagship Product
              </span>
            </div>
            <h3 className="text-3xl font-semibold text-white">
              QuickFix — Home Service Marketplace
            </h3>
            <p className="text-sm text-slate-200">
              A comprehensive cross-platform home service platform connecting
              customers with verified technicians across Kenya. Built with
              intelligent matchmaking, escrow payments, and real-time operations
              for trusted service delivery.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {quickFixFeatures.map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-100"
                >
                  <BadgeCheck className="h-4 w-4 text-cyan-300" />
                  {feature}
                </div>
              ))}
            </div>
            <div className="space-y-3 rounded-2xl border border-white/10 bg-white/5 p-5 text-sm text-slate-200">
              <div className="flex items-center gap-2 text-cyan-200">
                <Layers className="h-4 w-4" />
                Architecture Highlights
              </div>
              <ul className="space-y-2">
                {quickFixHighlights.map((highlight) => (
                  <li key={highlight}>• {highlight}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="space-y-6">
            <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-6">
              <div className="flex items-center gap-3 text-sm text-slate-200">
                <Activity className="h-5 w-5 text-cyan-300" />
                Real-time System Capabilities
              </div>
              <p className="mt-3 text-sm text-slate-200">
                Live job tracking, technician presence, and automated
                notifications are powered by Socket.IO, enabling instant status
                updates and secure escrow release workflows.
              </p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <div className="flex items-center gap-3 text-sm text-slate-200">
                <ShieldCheck className="h-5 w-5 text-purple-300" />
                Marketplace Integrity
              </div>
              <p className="mt-3 text-sm text-slate-200">
                Escrow-secured payments, ratings, and verified technicians create
                a trusted marketplace with measurable service quality.
              </p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <div className="flex items-center gap-3 text-sm text-slate-200">
                <Zap className="h-5 w-5 text-amber-300" />
                Tech Stack
              </div>
              <p className="mt-3 text-sm text-slate-200">
                React Native (Expo) · Node.js · Express.js · MongoDB · IntaSend ·
                Socket.IO · JWT
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-12 grid gap-6 md:grid-cols-2"
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={scaleIn}
              whileHover={{ y: -6 }}
              className="glass-card rounded-3xl p-6"
            >
              <div className="flex items-center justify-between">
                <h4 className="text-xl font-semibold text-white">
                  {project.title}
                </h4>
                <Star className="h-5 w-5 text-cyan-300" />
              </div>
              <p className="mt-3 text-sm text-slate-200">
                {project.description}
              </p>
              <p className="mt-4 text-xs uppercase tracking-[0.2em] text-slate-400">
                {project.stack}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
