"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import { fadeUp, scaleIn, staggerContainer } from "@/lib/animations";

const contactDetails = [
  {
    title: "Business Email",
    detail: "engineerjuliusjr47@gmail.com",
    icon: Mail,
  },
  {
    title: "Phone Numbers",
    detail: "+254 794 536 984 | +254 117 224 394",
    icon: Phone,
  },
  {
    title: "Location",
    detail: "Nairobi, Kenya",
    icon: MapPin,
  },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  return (
    <section id="contact" className="section-padding bg-slate-950">
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
            Contact
          </motion.p>
          <motion.h2 variants={fadeUp} className="section-title">
            Let&apos;s design the next intelligent system together.
          </motion.h2>
          <motion.p variants={fadeUp} className="max-w-2xl text-lg text-slate-200">
            Share your project goals, and our engineering team will respond with
            a tailored consultation, timeline, and delivery roadmap.
          </motion.p>
        </motion.div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.form
            variants={scaleIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="glass-card space-y-6 rounded-3xl p-8"
            onSubmit={(event) => {
              event.preventDefault();
              const formData = new FormData(event.currentTarget);
              const name = String(formData.get("name") ?? "").trim();
              const email = String(formData.get("email") ?? "").trim();
              const subject = String(formData.get("subject") ?? "").trim();
              const message = String(formData.get("message") ?? "").trim();

              if (!name || !email || !subject || !message) {
                setError("Please complete all fields before submitting.");
                setSubmitted(false);
                return;
              }

              setError(null);
              const mailto = new URL("mailto:engineerjuliusjr47@gmail.com");
              mailto.searchParams.set(
                "subject",
                `${subject} (KevTech Solutions)`
              );
              mailto.searchParams.set(
                "body",
                `Name: ${name}\nEmail: ${email}\n\n${message}`
              );
              window.location.href = mailto.toString();
              setSubmitted(true);
              event.currentTarget.reset();
            }}
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <label
                  htmlFor="contact-name"
                  className="text-sm text-slate-200"
                >
                  Full Name
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  required
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-400 focus:border-cyan-400 focus:outline-none"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="contact-email"
                  className="text-sm text-slate-200"
                >
                  Email Address
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  placeholder="you@email.com"
                  required
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-400 focus:border-cyan-400 focus:outline-none"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label
                htmlFor="contact-subject"
                className="text-sm text-slate-200"
              >
                Subject
              </label>
              <input
                id="contact-subject"
                name="subject"
                type="text"
                placeholder="How can we help?"
                required
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-400 focus:border-cyan-400 focus:outline-none"
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="contact-message"
                className="text-sm text-slate-200"
              >
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows={5}
                placeholder="Tell us about your goals and timeline."
                required
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-400 focus:border-cyan-400 focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:opacity-90"
            >
              {submitted ? "Request Sent" : "Request a Consultation"}
            </button>
            {error && (
              <p className="text-center text-sm text-rose-200" aria-live="polite">
                {error}
              </p>
            )}
            {submitted && !error && (
              <p className="text-center text-sm text-cyan-200" aria-live="polite">
                Thank you! Our team will reach out within one business day.
              </p>
            )}
          </motion.form>

          <div className="space-y-6">
            {contactDetails.map((detail) => (
              <motion.div
                key={detail.title}
                variants={scaleIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="glass-card flex items-start gap-4 rounded-3xl p-6"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-cyan-200">
                  <detail.icon className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">
                    {detail.title}
                  </h4>
                  <p className="mt-2 text-sm text-slate-200">
                    {detail.detail}
                  </p>
                </div>
              </motion.div>
            ))}
            <motion.div
              variants={scaleIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="rounded-3xl border border-cyan-400/40 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-blue-500/10 p-6"
            >
              <p className="text-sm font-semibold text-cyan-100">
                Ready for a premium digital partnership?
              </p>
              <p className="mt-2 text-sm text-slate-200">
                Let&apos;s craft systems that empower your teams, clients, and
                communities.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
