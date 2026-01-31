"use client";

import { motion } from "framer-motion";
import Button from "./Button";
import HeroIllustration from "./HeroIllustration";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useContactModal } from "@/context/ContactModalContext";

export default function Hero() {
    const { openContactModal } = useContactModal();

    return (
        <section className="relative min-h-screen pt-20 pb-12 sm:pt-24 sm:pb-16 md:pt-32 md:pb-32 flex items-center overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
                {/* Left Column: Content */}
                <div className="space-y-6 sm:space-y-8 z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold leading-tight sm:leading-tight">
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-gray-400 block">
                                Transform Your Ideas Into
                            </span>
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple to-accent block">
                                Market-Ready
                            </span>
                            <span className="text-white block">IoT Products</span>
                        </h1>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-base sm:text-lg md:text-xl text-muted max-w-lg leading-relaxed"
                    >
                        End-to-end embedded systems development — from PCB design to cloud integration. We turn concepts into production-ready solutions.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="flex flex-col sm:flex-row gap-4"
                    >
                        <Button
                            size="lg"
                            icon={<ArrowRight className="w-5 h-5" />}
                            onClick={openContactModal}
                        >
                            Start Your Project
                        </Button>
                    </motion.div>

                    {/* Social Proof */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="pt-6 sm:pt-8 border-t border-white/5 flex flex-wrap gap-4 sm:gap-6 text-xs sm:text-sm font-medium text-muted"
                    >
                        {[
                            "50+ Products Launched",
                            "ESP32 | STM32 | nRF52",
                            "Concept to Production",
                        ].map((text, i) => (
                            <div key={i} className="flex items-center gap-2">
                                <CheckCircle2 className="w-3 h-3 sm:w-4 sm:h-4 text-accent flex-shrink-0" />
                                <span className="whitespace-nowrap">{text}</span>
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* Right Column: Illustration */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="relative mt-8 md:mt-0"
                >
                    <HeroIllustration />
                </motion.div>
            </div>
        </section>
    );
}
