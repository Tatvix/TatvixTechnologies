"use client";

import StatsTicker from "./StatsTicker";
import TechBadges from "./TechBadges";

export default function TrustSection() {
    return (
        <section className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4">
                        Trusted by Innovators
                    </h2>
                    <p className="text-lg text-muted max-w-2xl mx-auto">
                        We power the next generation of connected devices.
                    </p>
                </div>

                <StatsTicker />

                <div className="mt-20">
                    <p className="text-center text-sm text-muted uppercase tracking-widest mb-8">
                        Built with Technologies from
                    </p>
                    <TechBadges />
                </div>
            </div>
        </section>
    );
}
