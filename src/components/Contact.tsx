"use client";

import { Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";

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

const projectTypes = [
  "Custom Software Development",
  "Automation System",
  "Platform Development",
  "API & Backend Engineering",
  "Technical Consulting",
  "Other",
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  return (
    <section id="contact" className="section-padding scroll-mt-28 bg-slate-950">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
            Contact
          </p>
          <h2 className="section-title">Start your next project with KevTech Solutions.</h2>
          <p className="text-lg text-slate-200">
            Complete the intake form to generate a pre-filled project email to our
            team. You can then review and send it from your email client.
          </p>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <form
            className="glass-card space-y-5 rounded-3xl p-8"
            onSubmit={(event) => {
              event.preventDefault();
              const formData = new FormData(event.currentTarget);
              const name = String(formData.get("name") ?? "").trim();
              const email = String(formData.get("email") ?? "").trim();
              const company = String(formData.get("company") ?? "").trim();
              const projectType = String(formData.get("projectType") ?? "").trim();
              const budget = String(formData.get("budget") ?? "").trim();
              const timeline = String(formData.get("timeline") ?? "").trim();
              const description = String(formData.get("description") ?? "").trim();

              if (!name || !email || !projectType || !description) {
                setError("Please complete all required fields before continuing.");
                setSubmitted(false);
                return;
              }

              setError(null);
              const mailto = new URL("mailto:engineerjuliusjr47@gmail.com");
              mailto.searchParams.set(
                "subject",
                `Project Inquiry: ${projectType} (KevTech Solutions)`
              );
              mailto.searchParams.set(
                "body",
                [
                  `Name: ${name}`,
                  `Email: ${email}`,
                  `Company / Organization: ${company || "Not provided"}`,
                  `Project Type: ${projectType}`,
                  `Budget Range: ${budget || "Not provided"}`,
                  `Timeline: ${timeline || "Not provided"}`,
                  "",
                  "Project Description:",
                  description,
                ].join("\n")
              );

              window.location.href = mailto.toString();
              setSubmitted(true);
            }}
          >
            <p className="rounded-xl border border-cyan-400/30 bg-cyan-500/10 px-4 py-3 text-sm text-cyan-100">
              This form does not submit to a backend server. It opens your email
              app with your project details pre-filled.
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <label htmlFor="contact-name" className="text-sm text-slate-200">
                  Name *
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-400 focus:border-cyan-300 focus:outline-none"
                  placeholder="Your full name"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="contact-email" className="text-sm text-slate-200">
                  Email *
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-400 focus:border-cyan-300 focus:outline-none"
                  placeholder="you@company.com"
                />
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <label htmlFor="contact-company" className="text-sm text-slate-200">
                  Company / Organization
                </label>
                <input
                  id="contact-company"
                  name="company"
                  type="text"
                  className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-400 focus:border-cyan-300 focus:outline-none"
                  placeholder="Optional"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="contact-project-type" className="text-sm text-slate-200">
                  Project Type *
                </label>
                <select
                  id="contact-project-type"
                  name="projectType"
                  required
                  className="w-full rounded-xl border border-white/15 bg-slate-900 px-4 py-3 text-sm text-white focus:border-cyan-300 focus:outline-none"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select project type
                  </option>
                  {projectTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <label htmlFor="contact-budget" className="text-sm text-slate-200">
                  Budget Range
                </label>
                <input
                  id="contact-budget"
                  name="budget"
                  type="text"
                  className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-400 focus:border-cyan-300 focus:outline-none"
                  placeholder="Optional"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="contact-timeline" className="text-sm text-slate-200">
                  Timeline
                </label>
                <input
                  id="contact-timeline"
                  name="timeline"
                  type="text"
                  className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-400 focus:border-cyan-300 focus:outline-none"
                  placeholder="Optional"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="contact-description" className="text-sm text-slate-200">
                Project Description *
              </label>
              <textarea
                id="contact-description"
                name="description"
                rows={6}
                required
                className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-400 focus:border-cyan-300 focus:outline-none"
                placeholder="Describe your project goals, scope, and expected outcomes."
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-full bg-cyan-300 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
            >
              {submitted ? "Open Email Draft Again" : "Start a Project"}
            </button>

            {error && (
              <p className="text-center text-sm text-rose-200" aria-live="polite">
                {error}
              </p>
            )}
            {submitted && !error && (
              <p className="text-center text-sm text-cyan-200" aria-live="polite">
                Email draft prepared. Send it from your email client to complete
                your inquiry.
              </p>
            )}
          </form>

          <aside className="space-y-6" aria-label="Contact details">
            {contactDetails.map((detail) => (
              <article key={detail.title} className="glass-card flex items-start gap-4 rounded-2xl p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-cyan-200">
                  <detail.icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white">{detail.title}</h3>
                  <p className="mt-2 text-sm text-slate-200">{detail.detail}</p>
                </div>
              </article>
            ))}

            <article className="rounded-2xl border border-cyan-400/40 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 p-6">
              <h3 className="text-sm font-semibold text-cyan-100">Project intake note</h3>
              <p className="mt-2 text-sm text-slate-200">
                For direct outreach, email us with your project type, timeline,
                and expected delivery outcomes.
              </p>
            </article>
          </aside>
        </div>
      </div>
    </section>
  );
}
