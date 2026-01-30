"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface VisualProps {
    className?: string;
}

// 1. Discovery & Specs: "The Solution Pathfinder"
// A isometric map showing multiple routes, but highlighting the *one best path*
export const IsoPathfinder = ({ className }: VisualProps) => {
    return (
        <div className={cn("relative w-full h-full flex items-center justify-center perspective-[1000px]", className)}>
            <motion.div
                className="relative w-64 h-64"
                style={{ transform: "rotateX(60deg) rotateZ(-45deg)", transformStyle: "preserve-3d" }}
            >
                {/* Base Grid Map */}
                <div className="absolute inset-0 bg-slate-900/80 border border-slate-700/50 rounded-xl" style={{ transform: "translateZ(0px)" }}>
                    {/* Grid Lines */}
                    <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 100 100">
                        <defs>
                            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" />
                            </pattern>
                        </defs>
                        <rect width="100" height="100" fill="url(#grid)" />
                    </svg>
                </div>

                {/* Nodes */}
                {/* Start Node (Idea) */}
                <div className="absolute left-10 bottom-10 w-8 h-8 bg-slate-700 rounded-full border border-white/20 shadow-lg flex items-center justify-center" style={{ transform: "translateZ(10px)" }}>
                    <div className="w-2 h-2 bg-white rounded-full" />
                </div>

                {/* End Node (Solution) */}
                <div className="absolute right-10 top-10 w-12 h-12 bg-cyan-500 rounded-full border border-cyan-300 shadow-[0_0_20px_cyan] flex items-center justify-center z-20" style={{ transform: "translateZ(20px)" }}>
                    <div className="w-4 h-4 bg-white rounded-full animate-pulse" />
                </div>

                {/* Failed Paths (Dim) */}
                <div className="absolute left-14 bottom-14 w-20 h-1 bg-slate-700 origin-left rotate-45" style={{ transform: "translateZ(5px)" }} />
                <div className="absolute left-20 bottom-32 w-10 h-1 bg-slate-700 origin-left -rotate-12" style={{ transform: "translateZ(5px)" }} />

                {/* The Golden Path (Glowing) */}
                <svg className="absolute inset-0 w-full h-full overflow-visible" style={{ transform: "translateZ(15px)" }}>
                    <motion.path
                        d="M 50 200 C 50 150, 150 150, 200 50" // Adjusted coordinates roughly for the div size logic
                        fill="none"
                        stroke="cyan"
                        strokeWidth="3"
                        strokeDasharray="10 5"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    />
                    {/* Connection Points along the path */}
                    <circle cx="100" cy="150" r="3" fill="cyan" />
                    <circle cx="150" cy="100" r="3" fill="cyan" />
                </svg>

                {/* Analysing Cursor */}
                <motion.div
                    className="absolute w-8 h-8 border-2 border-yellow-400/50 rounded-full"
                    style={{ transform: "translateZ(30px)" }}
                    animate={{ x: [40, 180, 40], y: [180, 40, 180], opacity: [0, 1, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                />
            </motion.div>
        </div>
    );
};

// 2. Hardware Design: "The Detailed PCBA"
// A complex, populated PCB board shown in isometric view.
export const IsoPCBA = ({ className }: VisualProps) => {
    return (
        <div className={cn("relative w-full h-full flex items-center justify-center perspective-[1000px]", className)}>
            <motion.div
                className="relative w-56 h-40" // Rectangular board
                style={{ transform: "rotateX(60deg) rotateZ(-45deg)", transformStyle: "preserve-3d" }}
                animate={{ rotateZ: ["-45deg", "-40deg", "-45deg"] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            >
                {/* PCB Substrate (Green/Black) */}
                <div className="absolute inset-0 bg-emerald-950 border-2 border-emerald-700/50 rounded-md shadow-2xl" style={{ transform: "translateZ(0px)" }}>
                    {/* Traces */}
                    <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 100 100">
                        <path d="M10 10 L40 10 L40 40" fill="none" stroke="emerald" strokeWidth="0.5" />
                        <path d="M60 90 L60 60 L90 60" fill="none" stroke="emerald" strokeWidth="0.5" />
                        <circle cx="40" cy="40" r="1" fill="emerald" />
                        <circle cx="60" cy="60" r="1" fill="emerald" />
                    </svg>
                </div>

                {/* Components */}

                {/* 1. Main MCU (Central Black Square) */}
                <div className="absolute top-10 left-16 w-16 h-16 bg-slate-900 border border-slate-600 rounded-sm shadow-lg flex items-center justify-center" style={{ transform: "translateZ(4px)" }}>
                    <div className="w-8 h-8 border border-white/20 rounded-full" />
                    {/* Pins */}
                    <div className="absolute -left-1 h-10 w-1 bg-slate-400" />
                    <div className="absolute -right-1 h-10 w-1 bg-slate-400" />
                    <div className="absolute -top-1 w-10 h-1 bg-slate-400" />
                    <div className="absolute -bottom-1 w-10 h-1 bg-slate-400" />
                </div>

                {/* 2. Wireless Module + Antenna (Top Right) */}
                <div className="absolute top-4 right-4 w-12 h-8 bg-slate-300 rounded-sm" style={{ transform: "translateZ(3px)" }}>
                    <div className="absolute -right-2 top-2 w-4 h-[1px] bg-yellow-500" /> {/* Antenna Stub */}
                </div>

                {/* 3. Power Cap (Cylinder) */}
                <div className="absolute bottom-4 left-4 w-6 h-6 rounded-full bg-slate-800 border border-slate-600 shadow-md flex items-center justify-center" style={{ transform: "translateZ(8px)" }}>
                    <div className="w-4 h-4 bg-slate-400 rounded-full" />
                </div>

                {/* 4. USB Connector (Edge) */}
                <div className="absolute -left-2 top-14 w-4 h-8 bg-slate-400 rounded-l-sm" style={{ transform: "translateZ(2px)" }} />

                {/* Data Flow (Glowing Lines above board) */}
                <motion.div
                    className="absolute top-14 left-20 w-12 h-1 bg-cyan-400/80 shadow-[0_0_10px_cyan]"
                    style={{ transform: "translateZ(10px)" }}
                    animate={{ opacity: [0, 1, 0], x: [0, 20, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                />

            </motion.div>
        </div>
    );
};


// 3. Firmware Logic: "The Code Blocks" (Approved)
export const IsoBlocks = ({ className }: VisualProps) => {
    return (
        <div className={cn("relative w-full h-full flex items-center justify-center perspective-[1000px]", className)}>
            <motion.div
                className="relative w-48 h-48"
                style={{ transform: "rotateX(60deg) rotateZ(-45deg)", transformStyle: "preserve-3d" }}
            >
                {/* Block 1 (Base) */}
                <motion.div
                    className="absolute bottom-0 right-0 w-24 h-24 bg-cyan-900 border border-cyan-400/50 shadow-lg"
                    style={{ transform: "translateZ(0px)" }}
                    animate={{ transform: ["translateZ(0px)", "translateZ(10px)", "translateZ(0px)"] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                    <div className="absolute -right-2 top-1 w-2 h-full bg-cyan-950 origin-left skew-y-[45deg]" />
                    <div className="absolute -bottom-2 left-1 w-full h-2 bg-cyan-950 origin-top skew-x-[45deg]" />
                    <div className="w-full h-full flex items-center justify-center text-cyan-400 font-mono text-[10px] opacity-70">
                        VOID()
                    </div>
                </motion.div>

                {/* Block 2 (Top Left) */}
                <motion.div
                    className="absolute top-0 left-0 w-24 h-24 bg-emerald-900 border border-emerald-400/50 shadow-lg"
                    style={{ transform: "translateZ(40px)" }}
                    animate={{ transform: ["translateZ(40px)", "translateZ(60px)", "translateZ(40px)"] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                >
                    <div className="absolute -right-2 top-1 w-2 h-full bg-emerald-950 origin-left skew-y-[45deg]" />
                    <div className="absolute -bottom-2 left-1 w-full h-2 bg-emerald-950 origin-top skew-x-[45deg]" />
                    <div className="w-full h-full flex items-center justify-center text-emerald-400 font-mono text-[10px] opacity-70">
                        IF({`{}`}
                    </div>
                </motion.div>

                {/* Block 3 (Interlocking) */}
                <motion.div
                    className="absolute top-8 left-8 w-20 h-20 bg-indigo-600 border border-indigo-400 shadow-[0_0_30px_rgba(99,102,241,0.4)] backdrop-blur-md"
                    style={{ transform: "translateZ(80px)" }}
                    animate={{ transform: "translateZ(80px) rotateZ(0deg)", rotateZ: [0, 5, 0] }} // Using style prop for base transform to verify
                    // Actually Framer Motion handles transforms better via style or animate prop directly. 
                    // Let's stick to animate for dynamic parts.
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                >
                    <div className="absolute -right-2 top-1 w-2 h-full bg-indigo-800 origin-left skew-y-[45deg]" />
                    <div className="absolute -bottom-2 left-1 w-full h-2 bg-indigo-900 origin-top skew-x-[45deg]" />
                    <div className="w-full h-full flex items-center justify-center text-white font-bold font-mono text-xs">
                        &lt;/&gt;
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
};

// 4. Prototyping: "The Floating Assembly" (Approved)
export const IsoLayers = ({ className }: VisualProps) => {
    return (
        <div className={cn("relative w-full h-full flex items-center justify-center perspective-[1000px]", className)}>
            <motion.div
                className="relative w-40 h-64"
                style={{ transform: "rotateX(60deg) rotateZ(0deg)", transformStyle: "preserve-3d" }}
            >
                <motion.div animate={{ rotateZ: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="relative w-full h-full" style={{ transformStyle: "preserve-3d" }}>
                    {/* Layer 1: Casing (Bottom) */}
                    <motion.div
                        className="absolute inset-0 bg-slate-800 border border-slate-600 rounded-3xl shadow-xl flex items-center justify-center"
                        style={{ transform: "translateZ(0px)" }}
                    >
                        <div className="text-slate-600 font-bold">BODY</div>
                    </motion.div>

                    {/* Layer 2: Battery */}
                    <motion.div
                        className="absolute inset-4 bg-slate-900 border border-yellow-600/50 rounded-2xl shadow-lg"
                        style={{ transform: "translateZ(40px)" }}
                        animate={{ transform: ["translateZ(40px)", "translateZ(60px)", "translateZ(40px)"] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <div className="absolute inset-0 grid place-items-center">
                            <div className="w-8 h-12 bg-yellow-600/20 rounded border border-yellow-600/40" />
                        </div>
                    </motion.div>

                    {/* Layer 3: PCB */}
                    <motion.div
                        className="absolute inset-2 bg-green-900/80 border border-green-500/50 rounded-2xl shadow-lg backdrop-blur-sm"
                        style={{ transform: "translateZ(80px)" }}
                        animate={{ transform: ["translateZ(80px)", "translateZ(110px)", "translateZ(80px)"] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                    >
                        <div className="w-full h-full opacity-30 bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)] bg-[length:10px_10px]" />
                    </motion.div>

                    {/* Layer 4: Screen (Top) */}
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 to-blue-500/30 border border-blue-400/50 rounded-3xl shadow-[0_0_30px_rgba(59,130,246,0.3)] backdrop-blur-md overflow-hidden"
                        style={{ transform: "translateZ(120px)" }}
                        animate={{ transform: ["translateZ(120px)", "translateZ(160px)", "translateZ(120px)"] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    >
                        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent skew-x-12" />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-8 h-8 rounded-full border-2 border-white/50 border-t-white animate-spin" />
                        </div>
                    </motion.div>
                </motion.div>
            </motion.div>
        </div>
    );
};

// 5. Production: "The Deployment Launchpad"
// A premium "Launch Platform" showing a finished, boxed unit.
// 5. Production: "The Robotic Assembly Cell"
// A precision industrial robot arm assembling a device.
export const IsoAssembly = ({ className }: VisualProps) => {
    return (
        <div className={cn("relative w-full h-full flex items-center justify-center perspective-[1000px] overflow-hidden", className)}>
            <motion.div
                className="relative w-64 h-64"
                style={{ transform: "rotateX(60deg) rotateZ(-45deg)", transformStyle: "preserve-3d" }}
            >
                {/* Assembly Platform Base */}
                <div className="absolute inset-0 bg-slate-900 border border-slate-700/50 shadow-2xl" style={{ transform: "translateZ(0px)" }}>
                    {/* Safety Markings */}
                    <div className="absolute inset-4 border-2 border-yellow-500/30 border-dashed" />
                </div>

                {/* The Product Being Assembled (Chassis) */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-16 bg-slate-800 rounded-sm shadow-md" style={{ transform: "translateZ(5px)" }}>
                    <div className="absolute inset-0 border border-slate-600 rounded-sm" />
                </div>

                {/* ROBOTIC ARM */}
                <motion.div
                    className="absolute bottom-4 right-4 w-12 h-12"
                    style={{ transform: "translateZ(5px)", transformStyle: "preserve-3d" }}
                >
                    {/* Base Cylinder */}
                    <div className="absolute inset-0 bg-slate-700 rounded-full border border-slate-500 shadow-lg" />

                    {/* Arm Segment 1 (Shoulder) - Rotates */}
                    <motion.div
                        className="absolute inset-x-2 bottom-2 h-24 bg-cyan-700 border border-cyan-500/50 origin-bottom rounded-t-lg"
                        style={{ transformStyle: "preserve-3d" }}
                        animate={{ rotateY: [-20, 10, -20] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    >
                        {/* Joint */}
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-8 bg-slate-600 rounded-full shadow-md" style={{ transform: "rotateY(90deg)" }} />

                        {/* Arm Segment 2 (Elbow/Forearm) - Flexes */}
                        <motion.div
                            className="absolute top-0 left-1 w-6 h-20 bg-cyan-600 border border-cyan-400/50 origin-top rounded-b-lg"
                            style={{ transformStyle: "preserve-3d" }}
                            animate={{ rotateX: [40, 80, 40] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        >
                            {/* Wrist/Claw */}
                            <motion.div
                                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-8"
                                style={{ transformStyle: "preserve-3d" }}
                            >
                                {/* The Screen/Part being placed */}
                                <motion.div
                                    className="absolute -bottom-6 -left-4 w-16 h-10 bg-cyan-400/80 border border-white/50 shadow-[0_0_15px_cyan]"
                                    animate={{ opacity: [1, 0, 1] }}
                                    transition={{ duration: 4, times: [0.4, 0.5, 0.9], repeat: Infinity }}
                                />

                                {/* Claw Fingers */}
                                <div className="absolute -bottom-2 -left-2 w-2 h-6 bg-slate-400 origin-top rotate-12" />
                                <div className="absolute -bottom-2 -right-2 w-2 h-6 bg-slate-400 origin-top -rotate-12" />
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </motion.div>

                {/* Sparks/Welding Flash Effect */}
                <motion.div
                    className="absolute top-1/2 left-1/2 w-10 h-10 bg-white rounded-full blur-xl"
                    style={{ transform: "translateZ(20px)" }}
                    animate={{ opacity: [0, 0, 1, 0, 0] }}
                    transition={{ duration: 4, times: [0.45, 0.48, 0.5, 0.52, 0.55], repeat: Infinity }}
                />

            </motion.div>
        </div>
    );
};

// 6. Cloud Integration: "The Connected Globe"
export const IsoCloud = ({ className }: VisualProps) => {
    return (
        <div className={cn("relative w-full h-full flex items-center justify-center perspective-[1000px]", className)}>
            <motion.div
                className="relative w-48 h-48"
                style={{ transform: "rotateX(60deg) rotateZ(0deg)", transformStyle: "preserve-3d" }}
                animate={{ rotateZ: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            >
                {/* Central Cloud/Globe */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-cyan-900/40 border border-cyan-500/30 backdrop-blur-sm shadow-[0_0_30px_rgba(6,182,212,0.2)]" style={{ transform: "translateZ(20px)" }}>
                    <div className="absolute inset-0 rounded-full border border-dashed border-cyan-400/50 opacity-50" />
                    {/* Inner Core */}
                    <div className="absolute inset-4 rounded-full bg-cyan-500/10 border border-white/10" />
                </div>

                {/* Orbiting Satellites */}
                {[0, 120, 240].map((deg, i) => (
                    <motion.div
                        key={i}
                        className="absolute top-1/2 left-1/2 w-4 h-4 rounded-full bg-white shadow-[0_0_15px_white]"
                        style={{
                            transform: `translate(-50%, -50%) rotate(${deg}deg) translateX(80px) translateZ(20px)`,
                        }}
                    />
                ))}

                {/* Connection Lines to Center */}
                <svg className="absolute inset-0 w-full h-full" style={{ transform: "translateZ(10px)" }}>
                    <circle cx="50%" cy="50%" r="80" fill="none" stroke="rgba(6,182,212,0.2)" strokeWidth="1" />
                </svg>
            </motion.div>

            {/* Floating Data Particles */}
            <div className="absolute inset-0 flex items-center justify-center -translate-y-10" style={{ transform: "translateZ(40px)" }}>
                <motion.div
                    className="w-1 h-8 bg-gradient-to-t from-emerald-400 to-transparent"
                    animate={{ y: [-20, -60], opacity: [1, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut" }}
                />
                <motion.div
                    className="absolute w-1 h-6 bg-gradient-to-t from-cyan-400 to-transparent left-12"
                    animate={{ y: [-10, -50], opacity: [1, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeOut", delay: 0.5 }}
                />
            </div>
        </div>
    );
};
