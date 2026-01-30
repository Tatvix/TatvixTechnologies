"use client";

import { Factory, Stethoscope, Tractor, Zap } from "lucide-react";
import IndustryCard from "./IndustryCard";

const industries = [
    {
        name: "Industrial Automation",
        description: "Ruggedized controllers, PLCs, and HMI solutions for smart factories and Industry 4.0 applications.",
        icon: Factory,
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
    },
    {
        name: "Medical Devices",
        description: "ISO 13485 compliant embedded systems for patient monitoring, diagnostics, and wearable health tech.",
        icon: Stethoscope,
        image: "https://images.unsplash.com/photo-1516549655169-df83a0833860?auto=format&fit=crop&q=80&w=800",
    },
    {
        name: "AgriTech",
        description: "Smart sensors and automated systems for precision farming, livestock monitoring, and environmental control.",
        icon: Tractor,
        image: "https://images.unsplash.com/photo-1625246333195-58197bd47d26?auto=format&fit=crop&q=80&w=800",
    },
    {
        name: "Energy Management",
        description: "Smart metering, renewable energy controllers, and battery management systems (BMS).",
        icon: Zap,
        image: "https://images.unsplash.com/photo-1473341304170-5799d416f718?auto=format&fit=crop&q=80&w=800",
    },
];

export default function IndustriesSection() {
    return (
        <section id="industries" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div className="max-w-xl">
                        <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4">
                            Industries We Serve
                        </h2>
                        <p className="text-lg text-muted">
                            Delivering specialized embedded solutions across diverse sectors.
                        </p>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {industries.map((industry, index) => (
                        <IndustryCard
                            key={industry.name}
                            {...industry}
                            delay={index * 0.1}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
