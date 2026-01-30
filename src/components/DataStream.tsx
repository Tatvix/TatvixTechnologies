"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface DataStreamProps {
    isActive: boolean;
}

export default function DataStream({ isActive }: DataStreamProps) {
    const [particles, setParticles] = useState<Array<{ width: string; delay: number; y: number }>>([]);

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setParticles(
            Array.from({ length: 6 }).map((_, i) => ({
                width: Math.random() * 20 + 10 + "px",
                delay: i * 0.2,
                y: Math.random() * 40 - 20
            }))
        );
    }, []);

    if (!isActive) return null;

    return (
        <div className="absolute top-1/2 left-0 right-0 h-10 -translate-y-1/2 overflow-hidden pointer-events-none z-10">
            {particles.map((p, i) => (
                <motion.div
                    key={i}
                    className="absolute left-0 top-1/2 h-[2px] bg-primary rounded-full shadow-[0_0_10px_rgba(0,217,255,0.8)]"
                    style={{ width: p.width, marginTop: p.y }}
                    initial={{ x: "0%", opacity: 0 }}
                    animate={{ x: "100%", opacity: [0, 1, 1, 0] }}
                    transition={{
                        duration: 1,
                        repeat: Infinity,
                        delay: p.delay,
                        ease: "linear"
                    }}
                />
            ))}
        </div>
    );
}
