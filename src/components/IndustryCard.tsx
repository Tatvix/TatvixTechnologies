"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface IndustryCardProps {
    name: string;
    description: string;
    icon: LucideIcon;
    delay?: number;
}

export default function IndustryCard({ name, description, icon: Icon, delay = 0 }: IndustryCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay }}
            className="group relative h-full bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-cyan-500/30 transition-colors duration-300 overflow-hidden"
        >
            {/* Hover Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-10 flex flex-col h-full">
                <div className="w-12 h-12 rounded-xl bg-[#0A0E1A] border border-white/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-gray-400 group-hover:text-cyan-400 transition-colors duration-300" />
                </div>

                <h3 className="text-xl font-bold text-white mb-2 font-display">{name}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                    {description}
                </p>
            </div>
        </motion.div>
    );
};
