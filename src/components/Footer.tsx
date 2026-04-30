import Link from "next/link";

const links = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Products", href: "#products" },
  { label: "Why Us", href: "#why-us" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950/90">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-10 md:flex-row md:items-center md:justify-between">
        <div className="space-y-3">
          <div className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-300">
            KevTech Solutions
          </div>
          <p className="text-sm text-slate-400">
            Quality Tech — Here For You
          </p>
        </div>
        <div className="flex flex-wrap gap-6 text-sm text-slate-300">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-white">
              {link.label}
            </Link>
          ))}
        </div>
        <p className="text-xs text-slate-500">
          © {new Date().getFullYear()} KevTech Solutions. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
