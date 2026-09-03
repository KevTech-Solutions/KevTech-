"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Approach", href: "#approach" },
  { label: "Products", href: "#products" },
  { label: "Why KevTech", href: "#why-us" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-slate-950/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="#home"
          className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-slate-100"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl border border-cyan-300/40 bg-slate-900 text-lg font-bold text-cyan-200">
            K
          </span>
          KevTech Solutions
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-200 transition hover:text-white"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="#contact"
            className="rounded-full border border-cyan-300/50 px-5 py-2 text-sm font-semibold text-cyan-100 transition hover:bg-cyan-300/10"
          >
            Start a Project
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((current) => !current)}
          className="flex items-center justify-center rounded-full border border-white/15 bg-white/5 p-2 text-white transition hover:border-white/30 md:hidden"
          aria-label="Toggle navigation"
          aria-expanded={open}
          aria-controls="mobile-navigation"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile"
          className="border-t border-white/10 bg-slate-950 px-6 py-6 md:hidden"
        >
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-1 py-1 text-base font-medium text-slate-100"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="#contact"
              onClick={() => setOpen(false)}
              className="rounded-full border border-cyan-300/50 px-5 py-2 text-center text-sm font-semibold text-cyan-100"
            >
              Start a Project
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
