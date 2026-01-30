"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface StatItemProps {
    value: string;
    label: string;
    delay?: number;
}

const StatItem = ({ value, label, delay = 0 }: StatItemProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    return (
        <div ref={ref} className="text-center group">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay }}
                className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50 mb-2 font-display group-hover:from-cyan-400 group-hover:to-emerald-400 transition-all duration-300"
            >
                {value}
            </motion.div>
            <div className="text-sm font-mono text-emerald-500/80 tracking-wider uppercase">
                {label}
            </div>
        </div>
    );
};

export default function StatsTicker() {
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 py-12 border-y border-white/5 bg-white/[0.02]">
            <StatItem value="4+" label="Years Experience" delay={0} />
            <StatItem value="50+" label="Projects Delivered" delay={0.1} />
            <StatItem value="10M+" label="Lines of Code" delay={0.2} />
            <StatItem value="100%" label="Client Satisfaction" delay={0.3} />
        </div>
    );
};
