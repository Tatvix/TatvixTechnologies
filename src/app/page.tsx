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
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Embedded Product Design & IoT Development Services",
  description: "Expert embedded systems design and IoT product development services. End-to-end solutions for smart devices, industrial automation, and connected products. Based in Ahmedabad, India.",
  openGraph: {
    title: "Tatvix | Embedded Product Design & IoT Development Services",
    description: "Expert embedded systems design and IoT product development services. End-to-end solutions for smart devices and connected products.",
  },
};

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
