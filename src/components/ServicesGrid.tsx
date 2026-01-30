"use client";

import { CircuitBoard, Code2, Wifi, Cloud, Zap, Factory } from "lucide-react";
import ServiceCard from "./ServiceCard";

const services = [
    {
        title: "Custom PCB Design",
        description: "Single & multi-layer PCB design with focus on manufacturability, signal integrity, and cost optimization.",
        icon: CircuitBoard,
        accentColor: "cyan",
    },
    {
        title: "Firmware Development",
        description: "High-performance embedded C/C++ firmware, RTOS integration, secure bootloaders, and OTA updates.",
        icon: Code2,
        accentColor: "purple",
    },
    {
        title: "IoT Connectivity",
        description: "Secure wireless communication using Wi-Fi, BLE, LoRa, Zigbee, NB-IoT, and LTE protocols.",
        icon: Wifi,
        accentColor: "green",
    },
    {
        title: "Cloud Integration",
        description: "End-to-end cloud connectivity with AWS IoT, Azure, or Google Cloud, including real-time dashboards.",
        icon: Cloud,
        accentColor: "blue",
    },
    {
        title: "Rapid Prototyping",
        description: "Fast-track your idea to reality with quick Proof of Concept (PoC) development and functional testing.",
        icon: Zap,
        accentColor: "orange",
    },
    {
        title: "Production Support",
        description: "Manufacturing support, test jig design, and lifecycle management for seamless mass production.",
        icon: Factory,
        accentColor: "emerald",
    },
];

export default function ServicesGrid() {
    return (
        <section id="services" className="py-24 relative overflow-hidden bg-bg/50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4">
                        Our Expertise
                    </h2>
                    <p className="text-lg text-muted max-w-2xl mx-auto">
                        Comprehensive embedded & IoT development services tailored to your needs.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {services.map((service, index) => (
                        <ServiceCard
                            key={service.title}
                            {...service}
                            delay={index * 0.1}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
