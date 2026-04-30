import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://kevtech-solutions.com"),
  title: "KevTech Solutions | Quality Tech — Here For You",
  description:
    "KevTech Solutions is a premium African technology company delivering scalable software systems, platform engineering, and intelligent automation for modern businesses.",
  keywords: [
    "KevTech Solutions",
    "African tech startup",
    "custom software development",
    "automation systems",
    "platform engineering",
    "digital solutions",
  ],
  openGraph: {
    title: "KevTech Solutions",
    description:
      "Building reliable digital solutions, intelligent platforms, and automation systems for modern businesses.",
    url: "https://kevtech-solutions.com",
    siteName: "KevTech Solutions",
    locale: "en_KE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "KevTech Solutions",
    description:
      "Quality tech solutions for businesses, institutions, and communities.",
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
        {children}
      </body>
    </html>
  );
}
