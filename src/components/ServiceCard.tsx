"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { useRef, useState, useEffect } from "react";

interface ServiceCardProps {
    title: string;
    description: string;
    icon: LucideIcon;
    accentColor: string;
    delay: number;
}

export default function ServiceCard({ title, description, icon: Icon, accentColor, delay }: ServiceCardProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [randomDelay, setRandomDelay] = useState(0);

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setRandomDelay(Math.random() * 2);
    }, []);

    // Motion values for tilt effect
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Spring physics for smooth tilt
    const mouseX = useSpring(x, { stiffness: 250, damping: 25 });
    const mouseY = useSpring(y, { stiffness: 250, damping: 25 });

    // Transform mouse position to rotation degrees
    const rotateX = useTransform(mouseY, [-0.5, 0.5], [15, -15]); // Reverse axis for natural tilt
    const rotateY = useTransform(mouseX, [-0.5, 0.5], [-15, 15]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;

        const clientX = e.clientX - rect.left;
        const clientY = e.clientY - rect.top;

        const xPct = clientX / width - 0.5;
        const yPct = clientY / height - 0.5;

        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    // gradients for border/glow based on accent color
    const gradients: Record<string, string> = {
        cyan: "from-cyan-500 to-blue-500",
        purple: "from-purple-500 to-pink-500",
        green: "from-green-500 to-emerald-500",
        blue: "from-blue-500 to-indigo-500",
        orange: "from-orange-500 to-red-500",
        emerald: "from-emerald-500 to-teal-500",
    };

    const textColors: Record<string, string> = {
        cyan: "text-cyan-400 group-hover:text-cyan-300",
        purple: "text-purple-400 group-hover:text-purple-300",
        green: "text-green-400 group-hover:text-green-300",
        blue: "text-blue-400 group-hover:text-blue-300",
        orange: "text-orange-400 group-hover:text-orange-300",
        emerald: "text-emerald-400 group-hover:text-emerald-300",
    };

    const borderGradient = gradients[accentColor] || "from-white/20 to-white/5";

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                transformStyle: "preserve-3d",
                rotateX,
                rotateY,
            }}
            className="relative group h-full perspective-[1000px]"
        >
            {/* Hover Lift & Shadow Container */}
            <motion.div
                className="h-full relative rounded-3xl transition-transform duration-300 group-hover:-translate-y-2"
                style={{ transformStyle: "preserve-3d" }}
            >
                {/* 1. Animated Gradient Border (Background Layer) */}
                <div
                    className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${borderGradient} opacity-0 group-hover:opacity-100 blur-[2px] transition-all duration-500`}
                    style={{ transform: "translateZ(-1px)" }} // Push slightly back
                />

                {/* 2. Glass Card Content */}
                <div className="relative h-full p-8 rounded-3xl bg-[#0A0E1A]/90 backdrop-blur-xl border border-white/10 group-hover:border-transparent transition-colors duration-300 overflow-hidden">

                    {/* Inner Content Component */}
                    <div className="relative z-10 flex flex-col h-full" style={{ transform: "translateZ(20px)" }}>

                        {/* Icon Container */}
                        <motion.div
                            className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 bg-white/5 border border-white/10 group-hover:scale-110 transition-transform duration-300 ${textColors[accentColor]}`}
                            animate={{ y: [0, -5, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: randomDelay }}
                        >
                            <Icon className="w-8 h-8" />
                        </motion.div>

                        <h3 className="text-2xl font-heading font-bold text-white mb-3">{title}</h3>

                        <p className="text-muted text-sm leading-relaxed mb-6 flex-grow">
                            {description}
                        </p>


                    </div>

                    {/* Subtle Glow Overlay inside card */}
                    <div className={`absolute -right-20 -bottom-20 w-64 h-64 bg-gradient-to-br ${borderGradient} opacity-0 group-hover:opacity-10 blur-[60px] transition-opacity duration-500 pointer-events-none`} />

                    {/* Glass Surface Shine Effect */}
                    <div className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none">
                        <motion.div
                            className="absolute top-0 bottom-0 -left-[100%] w-[100%] bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-[-25deg]"
                            initial={{ x: "0%" }}
                            whileHover={{ x: "250%" }}
                            transition={{ duration: 0.8, ease: "easeInOut" }}
                        />
                    </div>
                </div>
            </motion.div>
        </motion.div >
    );
}
