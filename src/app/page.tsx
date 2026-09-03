import About from "@/components/About";
import CompanyPositioning from "@/components/CompanyPositioning";
import Contact from "@/components/Contact";
import EngineeringApproach from "@/components/EngineeringApproach";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Products from "@/components/Products";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";

export default function Home() {
  return (
    <div className="bg-slate-950 text-white">
      <Navbar />
      <main id="main-content">
        <Hero />
        <CompanyPositioning />
        <Services />
        <EngineeringApproach />
        <Products />
        <WhyUs />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
