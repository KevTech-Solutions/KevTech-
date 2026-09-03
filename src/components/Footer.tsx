import Link from "next/link";

const links = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Approach", href: "#approach" },
  { label: "Products", href: "#products" },
  { label: "Why KevTech", href: "#why-us" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950/90">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10 md:grid-cols-[1fr_auto_auto] md:items-center">
        <div className="space-y-2">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-300">
            KevTech Solutions
          </p>
          <p className="text-sm text-slate-400">Quality Tech — Here For You</p>
          <p className="text-sm text-slate-400">Nairobi, Kenya</p>
        </div>

        <nav aria-label="Footer" className="flex flex-wrap gap-5 text-sm text-slate-300">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-white">
              {link.label}
            </Link>
          ))}
        </nav>

        <p className="text-xs text-slate-500">© {new Date().getFullYear()} KevTech Solutions. All rights reserved.</p>
      </div>
    </footer>
  );
}
