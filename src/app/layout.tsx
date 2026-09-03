import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://kevtech-solutions.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "KevTech Solutions | Quality Tech — Here For You",
  description:
    "KevTech Solutions engineers practical software systems, automation platforms, and digital products that help organizations operate and grow with confidence.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "KevTech Solutions | Quality Tech — Here For You",
    description:
      "Engineering digital systems that move businesses forward, from custom software to intelligent automation and product platforms.",
    url: siteUrl,
    siteName: "KevTech Solutions",
    locale: "en_KE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "KevTech Solutions | Quality Tech — Here For You",
    description:
      "Custom software, platform engineering, and practical automation for modern organizations.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "KevTech Solutions",
  slogan: "Quality Tech — Here For You",
  url: siteUrl,
  email: "engineerjuliusjr47@gmail.com",
  telephone: "+254 794 536 984",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Nairobi",
    addressCountry: "KE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full bg-slate-950 text-slate-100">
        <a
          href="#main-content"
          className="sr-only absolute left-3 top-3 z-[100] rounded-md bg-cyan-300 px-3 py-2 text-sm font-semibold text-slate-950 focus:not-sr-only"
        >
          Skip to main content
        </a>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </body>
    </html>
  );
}
