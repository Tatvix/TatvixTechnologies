"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Code, Cpu, Cloud, ShieldCheck, Wifi } from "lucide-react";

// Hook to get responsive radius based on screen size
function useResponsiveRadius(base: number, sm: number, md: number, lg: number) {
    const [radius, setRadius] = useState(base);

    useEffect(() => {
        const updateRadius = () => {
            if (window.innerWidth >= 1024) {
                setRadius(lg);
            } else if (window.innerWidth >= 768) {
                setRadius(md);
            } else if (window.innerWidth >= 640) {
                setRadius(sm);
            } else {
                setRadius(base);
            }
        };

        updateRadius();
        window.addEventListener('resize', updateRadius);
        return () => window.removeEventListener('resize', updateRadius);
    }, [base, sm, md, lg]);

    return radius;
}

export default function HeroIllustration() {
    const [mounted, setMounted] = useState(false);
    const radius = useResponsiveRadius(105, 140, 170, 210);

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <div className="relative w-full h-full min-h-[300px] sm:min-h-[400px] md:min-h-[500px] lg:min-h-[600px] flex items-center justify-center pointer-events-none select-none overflow-visible">

            {/* Ambient Background Aura */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] bg-primary/5 rounded-full blur-[100px] animate-pulse-slow" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] md:w-[250px] md:h-[250px] lg:w-[300px] lg:h-[300px] bg-blue-600/10 rounded-full blur-[80px] mix-blend-screen" />

            {/* Main Stage */}
            <div className="relative w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] md:w-[450px] md:h-[450px] lg:w-[500px] lg:h-[500px] perspective-[2000px]">

                {/* --- 0. Orbit Ring (Connecting Icons) --- */}
                {/* Icons are at radius 210px. Container 500px. Inset = (500 - 420) / 2 = 40px */}
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-[20px] sm:inset-[30px] md:inset-[35px] lg:inset-[40px] rounded-full border border-dashed border-cyan-500/20"
                />
                <div className="absolute inset-[20px] sm:inset-[30px] md:inset-[35px] lg:inset-[40px] rounded-full border border-white/5" /> {/* Static base track */}

                {/* --- 1. The Gyroscopic Core --- */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100px] h-[100px] sm:w-[140px] sm:h-[140px] md:w-[170px] md:h-[170px] lg:w-[200px] lg:h-[200px] flex items-center justify-center transform-style-3d z-20">

                    {/* Core Sphere Glow */}
                    <motion.div
                        animate={{ scale: [1, 1.1, 1], opacity: [0.8, 1, 0.8] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-cyan-300/30 via-blue-500/10 to-transparent blur-xl"
                    />

                    {/* Ring 1 - Horizontal Orbit */}
                    <motion.div
                        animate={{ rotateZ: 360, rotateX: 65 }}
                        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-0 rounded-full border-[1px] border-cyan-400/30 border-t-cyan-200/80 shadow-[0_0_15px_rgba(0,255,255,0.2)]"
                        style={{ rotateX: 65 }}
                    />

                    {/* Ring 2 - Vertical Orbit */}
                    <motion.div
                        animate={{ rotateZ: -360, rotateY: 65 }}
                        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-[15px] rounded-full border-[1px] border-blue-400/30 border-l-blue-200/80 shadow-[0_0_15px_rgba(50,50,255,0.2)]"
                        style={{ rotateY: 65 }}
                    />

                    {/* Ring 3 - Inner Diagonal */}
                    <motion.div
                        animate={{ rotateZ: 360, rotateX: -45, rotateY: 45 }}
                        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-[20px] sm:inset-[28px] md:inset-[35px] lg:inset-[40px] rounded-full border-[1px] sm:border-[1.5px] md:border-[2px] border-dashed border-white/20"
                    />

                    {/* Central Energy Singularity */}
                    <div className="absolute w-[20px] h-[20px] sm:w-[30px] sm:h-[30px] md:w-[35px] md:h-[35px] lg:w-[40px] lg:h-[40px] bg-white rounded-full shadow-[0_0_40px_rgba(0,255,255,0.8)] z-10 animate-pulse" />
                    <div className="absolute w-[10px] h-[10px] sm:w-[15px] sm:h-[15px] md:w-[18px] md:h-[18px] lg:w-[20px] lg:h-[20px] bg-cyan-300 rounded-full blur-[2px] z-20" />

                </div>

                {/* --- 2. Data Tethers (CSS Version for Reliability) --- */}
                {/* Connecting Core (Center) to Icons (Radius) - Responsive radius */}
                <DataBeam angle={270} radius={radius} delay={0} />
                <DataBeam angle={342} radius={radius} delay={0.2} />
                <DataBeam angle={54} radius={radius} delay={0.4} />
                <DataBeam angle={126} radius={radius} delay={0.6} />
                <DataBeam angle={198} radius={radius} delay={0.8} />

                {/* --- 3. Floating Satellites (Icons) --- */}
                <Satellite icon={<Code className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />} label="Firmware" angle={270} radius={radius} delay={0} />
                <Satellite icon={<Cloud className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />} label="Cloud" angle={342} radius={radius} delay={1} />
                <Satellite icon={<ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />} label="Security" angle={54} radius={radius} delay={2} />
                <Satellite icon={<Cpu className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />} label="Hardware" angle={126} radius={radius} delay={3} />
                <Satellite icon={<Wifi className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />} label="Connectivity" angle={198} radius={radius} delay={4} />

            </div>
        </div>
    );
}

// Sub-component: Animated Data Beam (CSS Implementation)
function DataBeam({ angle, radius, delay }: { angle: number, radius: number, delay: number }) {
    return (
        <div
            className="absolute top-1/2 left-1/2 h-[1px] sm:h-[1.5px] md:h-[2px] origin-left z-0"
            style={{
                width: `${radius}px`,
                transform: `rotate(${angle}deg)`,
            }}
        >
            <motion.div
                className="w-full h-full bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent"
                animate={{
                    opacity: [0.3, 1, 0.3],
                    scaleX: [0.8, 1, 0.8],
                    translateX: ["-10%", "10%", "-10%"]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: delay }}
            />
        </div>
    );
}

// Sub-component: Floating Satellite Node
function Satellite({ icon, angle, radius, delay }: { icon: React.ReactNode, label?: string, angle: number, radius: number, delay: number }) {
    return (
        <div
            className="absolute top-1/2 left-1/2 w-0 h-0 flex items-center justify-center"
            style={{ 
                transform: `rotate(${angle}deg) translate(${radius}px) rotate(-${angle}deg)`,
            }}
        >
            <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: delay }}
                className="relative group cursor-default"
            >
                {/* Node Glow */}
                <div className="absolute inset-0 bg-cyan-500/20 rounded-xl sm:rounded-2xl blur-lg transition-opacity duration-300 opacity-50 group-hover:opacity-100" />

                {/* Glass Container */}
                <div className="relative p-2 sm:p-3 md:p-3.5 lg:p-4 rounded-xl sm:rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 shadow-[0_0_20px_rgba(0,0,0,0.3)] flex flex-col items-center justify-center gap-1 sm:gap-2 transition-transform duration-300 group-hover:scale-110 group-hover:border-cyan-400/50 group-hover:bg-white/10">
                    <div className="text-cyan-100 group-hover:text-cyan-300 drop-shadow-[0_0_8px_rgba(0,255,255,0.5)]">
                        {icon}
                    </div>
                    {/* Optional Label (Hidden by default, reveal on larger screens or hover if needed? Kept hidden for clean 'Icon only' look or minimal label) */}
                    {/* <span className="text-[10px] uppercase tracking-widest text-cyan-200/60 font-medium">{label}</span> */}
                </div>

                {/* Connection Point Dot (Where the beam hits) */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-cyan-400 rounded-full blur-[1px]" />
            </motion.div>
        </div>
    );
}
