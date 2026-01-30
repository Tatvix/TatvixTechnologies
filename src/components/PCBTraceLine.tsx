"use client";

import { motion } from "framer-motion";

export default function PCBTraceLine() {
    return (
        <div className="absolute top-0 bottom-0 left-4 md:left-1/2 w-[2px] bg-white/5 -translate-x-1/2 h-full">
            <motion.div
                className="w-full bg-gradient-to-b from-primary via-cyan-400 to-purple"
                initial={{ height: "0%" }}
                whileInView={{ height: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 2, ease: "linear" }}
                style={{
                    boxShadow: "0 0 20px rgba(0, 217, 255, 0.5)",
                }}
            />
            {/* Pulse effect traversing the line */}
            <motion.div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-20 bg-white blur-sm"
                animate={{ top: ["0%", "100%"] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />
        </div>
    );
}
