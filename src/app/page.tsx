import AnimatedBackground from "@/components/AnimatedBackground";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HowWeBuild from "@/components/HowWeBuild";
import ServicesGrid from "@/components/ServicesGrid";
import IoTDemo from "@/components/IoTDemo";
import IndustriesSection from "@/components/IndustriesSection";
import AboutSection from "@/components/AboutSection";
import TrustSection from "@/components/TrustSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full flex flex-col items-center overflow-x-hidden">
      <Navbar />
      <AnimatedBackground />

      <Hero />
      <HowWeBuild />
      <ServicesGrid />
      <IoTDemo />
      <IndustriesSection />
      <TrustSection />
      <AboutSection />
      <CTASection />
      <Footer />

    </main>
  );
}
