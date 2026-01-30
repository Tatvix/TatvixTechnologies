"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface HoloProps {
    className?: string;
}

// 1. Discovery & Specs: The Data Center Map
export const HoloRadar = ({ className }: HoloProps) => {
    return (
        <div className={cn("relative flex items-center justify-center w-full h-full", className)}>
            <svg viewBox="0 0 400 300" className="w-full h-full text-cyan-400">
                {/* 3D Grid Floor */}
                <path d="M50 200 L150 200 L200 150 L100 150 Z" fill="currentColor" fillOpacity="0.05" />
                <path d="M50 200 L350 200" stroke="currentColor" strokeWidth="1" opacity="0.3" />
                <path d="M100 150 L300 150" stroke="currentColor" strokeWidth="1" opacity="0.3" />
                <path d="M150 100 L250 100" stroke="currentColor" strokeWidth="1" opacity="0.3" />

                {/* Vertical Grid Lines */}
                <path d="M50 200 L150 100" stroke="currentColor" strokeWidth="0.5" opacity="0.2" />
                <path d="M150 200 L200 100" stroke="currentColor" strokeWidth="0.5" opacity="0.2" />
                <path d="M250 200 L250 100" stroke="currentColor" strokeWidth="0.5" opacity="0.2" />
                <path d="M350 200 L300 100" stroke="currentColor" strokeWidth="0.5" opacity="0.2" />

                {/* Main Radar Dish */}
                <g transform="translate(200, 140)">
                    <ellipse cx="0" cy="0" rx="80" ry="30" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.6" />
                    <ellipse cx="0" cy="0" rx="50" ry="18" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.4" />
                    <ellipse cx="0" cy="0" rx="20" ry="8" fill="currentColor" fillOpacity="0.1" />

                    {/* Scanning Line */}
                    <motion.path
                        d="M0 0 L0 -30"
                        stroke="url(#beamGradient)"
                        strokeWidth="40"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                        style={{ originX: "0px", originY: "40px" }} // Approximate origin
                    />

                    {/* Active Nodes / Data Points */}
                    <motion.circle cx="40" cy="-10" r="3" fill="white"
                        animate={{ opacity: [0, 1, 0] }} transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                    />
                    <motion.circle cx="-50" cy="10" r="3" fill="white"
                        animate={{ opacity: [0, 1, 0] }} transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
                    />
                    <motion.circle cx="10" cy="20" r="3" fill="white"
                        animate={{ opacity: [0, 1, 0] }} transition={{ duration: 2, repeat: Infinity, delay: 2.5 }}
                    />
                </g>

                {/* Floating Info Panels */}
                <motion.g transform="translate(80, 80)" animate={{ y: [0, -5, 0] }} transition={{ duration: 3, repeat: Infinity }}>
                    <rect x="0" y="0" width="60" height="40" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="0.5" />
                    <line x1="5" y1="10" x2="40" y2="10" stroke="currentColor" strokeWidth="1" opacity="0.8" />
                    <line x1="5" y1="20" x2="30" y2="20" stroke="currentColor" strokeWidth="1" opacity="0.6" />
                    <line x1="5" y1="30" x2="50" y2="30" stroke="currentColor" strokeWidth="1" opacity="0.6" />
                </motion.g>

                <motion.g transform="translate(280, 100)" animate={{ y: [0, -8, 0] }} transition={{ duration: 4, repeat: Infinity, delay: 1 }}>
                    <rect x="0" y="0" width="50" height="70" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="0.5" />
                    <rect x="5" y="5" width="40" height="20" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.5" />
                    {/* Scrolling Data Lines */}
                    <motion.path d="M5 35 H45 M5 45 H45 M5 55 H45" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2"
                        animate={{ strokeDashoffset: [0, -4] }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    />
                </motion.g>

                <defs>
                    <linearGradient id="beamGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="currentColor" stopOpacity="0" />
                        <stop offset="100%" stopColor="currentColor" stopOpacity="0.4" />
                    </linearGradient>
                </defs>
            </svg>
        </div>
    );
};

// 2. Hardware Design: The Motherboard
export const HoloChip = ({ className }: HoloProps) => {
    return (
        <div className={cn("relative flex items-center justify-center w-full h-full", className)}>
            <svg viewBox="0 0 400 300" className="w-full h-full text-cyan-400">
                {/* PCB Board Outline */}
                <rect x="40" y="40" width="320" height="220" rx="10" fill="currentColor" fillOpacity="0.05" stroke="currentColor" strokeWidth="1" />

                {/* Main CPU Socket */}
                <rect x="150" y="100" width="100" height="100" rx="4" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="1" />
                <rect x="165" y="115" width="70" height="70" fill="none" stroke="currentColor" strokeWidth="0.5" />
                <motion.rect x="175" y="125" width="50" height="50" fill="currentColor"
                    animate={{ opacity: [0.3, 0.6, 0.3] }} transition={{ duration: 2, repeat: Infinity }}
                />

                {/* Memory Modules */}
                <rect x="280" y="80" width="40" height="140" fill="none" stroke="currentColor" strokeWidth="0.5" />
                <line x1="300" y1="80" x2="300" y2="220" stroke="currentColor" strokeWidth="0.5" />
                {[...Array(6)].map((_, i) => (
                    <rect key={i} x="285" y={90 + i * 20} width="30" height="10" fill="currentColor" fillOpacity="0.2" />
                ))}

                {/* Power Components */}
                <circle cx="80" cy="80" r="15" fill="none" stroke="currentColor" strokeWidth="1" />
                <circle cx="80" cy="120" r="15" fill="none" stroke="currentColor" strokeWidth="1" />
                <circle cx="80" cy="160" r="15" fill="none" stroke="currentColor" strokeWidth="1" />

                {/* Data Traces (Currents) */}
                <motion.path d="M250 150 L280 150" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4"
                    animate={{ strokeDashoffset: [0, -8] }} transition={{ duration: 0.5, repeat: Infinity, ease: "linear" }}
                />
                <motion.path d="M150 150 L80 160" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4"
                    animate={{ strokeDashoffset: [0, 8] }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                />

                {/* Blinking LEDs */}
                <motion.circle cx="340" cy="60" r="3" fill="white" animate={{ opacity: [1, 0, 1] }} transition={{ duration: 0.2, repeat: Infinity }} />
                <motion.circle cx="350" cy="60" r="3" fill="cyan" animate={{ opacity: [1, 0, 1] }} transition={{ duration: 0.5, repeat: Infinity }} />
            </svg>
        </div>
    );
};

// 3. Firmware Logic: The J.A.R.V.I.S. AI Core
export const HoloWave = ({ className }: HoloProps) => {
    return (
        <div className={cn("relative flex items-center justify-center w-full h-full", className)}>
            <svg viewBox="0 0 400 300" className="w-full h-full text-cyan-400">
                {/* Central "Brain" Node */}
                <g transform="translate(200, 150)">
                    <circle cx="0" cy="0" r="20" fill="white" fillOpacity="0.8" />
                    <circle cx="0" cy="0" r="25" fill="cyan" fillOpacity="0.4" />
                    <motion.circle cx="0" cy="0" r="30" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2"
                        animate={{ rotate: 360, scale: [1, 1.1, 1] }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    />
                </g>

                {/* Gyroscopic Rings */}
                <g transform="translate(200, 150)">
                    {/* Ring 1 - Horizontalish */}
                    <motion.ellipse cx="0" cy="0" rx="80" ry="20" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="20 10"
                        animate={{ rotate: 360 }} transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    />
                    {/* Ring 2 - Verticalish */}
                    <motion.ellipse cx="0" cy="0" rx="20" ry="80" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="10 20"
                        animate={{ rotate: -360 }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    />
                    {/* Ring 3 - Diagonal */}
                    <motion.ellipse cx="0" cy="0" rx="60" ry="60" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.5"
                        animate={{ rotate: [0, 180, 0], rx: [60, 10, 60] }} transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                    />
                </g>

                {/* Orbiting Data Fragments */}
                <motion.g transform="translate(200, 150)">
                    <motion.circle r="3" fill="white"
                        animate={{ cx: [0, 100, 0, -100, 0], cy: [0, -50, 0, 50, 0] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    />
                    <motion.circle r="3" fill="white"
                        animate={{ cx: [0, -80, 0, 80, 0], cy: [0, 40, 0, -40, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "linear", delay: 1 }}
                    />
                </motion.g>

                {/* Coding/Data Stream Background */}
                <motion.text x="20" y="50" fontSize="10" fill="currentColor" opacity="0.3" fontFamily="monospace">
                    <motion.tspan x="20" dy="12">01010101110 SYSTEM.INIT</motion.tspan>
                    <motion.tspan x="20" dy="12">CONNECTING TO HOST...</motion.tspan>
                    <motion.tspan x="20" dy="12">PROTOCOL: SECURE</motion.tspan>
                </motion.text>
                <motion.text x="300" y="250" fontSize="10" fill="currentColor" opacity="0.3" fontFamily="monospace">
                    <motion.tspan x="300" dy="12">CORE: STABLE</motion.tspan>
                    <motion.tspan x="300" dy="12">COMPILING...</motion.tspan>
                </motion.text>
            </svg>
        </div>
    );
};

// 4. Prototyping: The Stark Tech Blueprint (Wireframe Drone/Device)
export const HoloCube = ({ className }: HoloProps) => {
    return (
        <div className={cn("relative flex items-center justify-center w-full h-full", className)}>
            <svg viewBox="0 0 400 300" className="w-full h-full text-cyan-400">
                {/* Rotating Container for 3D effect */}
                <motion.g transform="translate(200, 150)"
                    animate={{ rotateY: 360 }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    style={{ transformStyle: "preserve-3d" }}
                >
                    {/* Central Drone Body (Simplified Wireframe) */}
                    {/* Using a group to simulate the "explode" animation */}
                    <motion.g
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    >
                        {/* Main Chassis */}
                        <ellipse cx="0" cy="0" rx="40" ry="10" fill="none" stroke="currentColor" strokeWidth="1" />
                        <ellipse cx="0" cy="0" rx="10" ry="40" fill="none" stroke="currentColor" strokeWidth="1" />
                        <circle cx="0" cy="0" r="15" fill="currentColor" fillOpacity="0.2" />

                        {/* Arms/Rotors */}
                        <line x1="0" y1="0" x2="60" y2="60" stroke="currentColor" strokeWidth="1" />
                        <circle cx="60" cy="60" r="10" fill="none" stroke="currentColor" strokeWidth="0.5" />
                        <motion.path d="M55 60 L65 60" stroke="white" strokeWidth="1" animate={{ rotate: 360 }} style={{ originX: "60px", originY: "60px" }} transition={{ duration: 0.2, repeat: Infinity }} />

                        <line x1="0" y1="0" x2="-60" y2="-60" stroke="currentColor" strokeWidth="1" />
                        <circle cx="-60" cy="-60" r="10" fill="none" stroke="currentColor" strokeWidth="0.5" />
                        <motion.path d="M-65 -60 L-55 -60" stroke="white" strokeWidth="1" animate={{ rotate: 360 }} style={{ originX: "-60px", originY: "-60px" }} transition={{ duration: 0.2, repeat: Infinity }} />

                        <line x1="0" y1="0" x2="60" y2="-60" stroke="currentColor" strokeWidth="1" />
                        <circle cx="60" cy="-60" r="10" fill="none" stroke="currentColor" strokeWidth="0.5" />
                        <motion.path d="M55 -60 L65 -60" stroke="white" strokeWidth="1" animate={{ rotate: 360 }} style={{ originX: "60px", originY: "-60px" }} transition={{ duration: 0.2, repeat: Infinity }} />

                        <line x1="0" y1="0" x2="-60" y2="60" stroke="currentColor" strokeWidth="1" />
                        <circle cx="-60" cy="60" r="10" fill="none" stroke="currentColor" strokeWidth="0.5" />
                        <motion.path d="M-65 60 L-55 60" stroke="white" strokeWidth="1" animate={{ rotate: 360 }} style={{ originX: "-60px", originY: "60px" }} transition={{ duration: 0.2, repeat: Infinity }} />
                    </motion.g>

                    {/* Spherical Grid Enclosure */}
                    <motion.ellipse cx="0" cy="0" rx="90" ry="90" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.3" strokeDasharray="5 5"
                        animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    />
                    <motion.ellipse cx="0" cy="0" rx="90" ry="20" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.2"
                        animate={{ rotate: -360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    />
                </motion.g>

                {/* Analysis Lines / Blueprint callouts */}
                <motion.line x1="260" y1="100" x2="300" y2="80" stroke="currentColor" strokeWidth="1" opacity="0.6" animate={{ opacity: [0.2, 0.8, 0.2] }} transition={{ duration: 2, repeat: Infinity }} />
                <text x="310" y="80" fontSize="10" fill="currentColor" opacity="0.8">ROTOR_SPEED: 100%</text>

                <motion.line x1="140" y1="200" x2="100" y2="220" stroke="currentColor" strokeWidth="1" opacity="0.6" animate={{ opacity: [0.2, 0.8, 0.2] }} transition={{ duration: 2, repeat: Infinity, delay: 1 }} />
                <text x="40" y="225" fontSize="10" fill="currentColor" opacity="0.8">STRUCTURAL_INTEGRITY</text>
            </svg>
        </div>
    );
};

// 5. Production: The Assembly Grid
export const HoloHex = ({ className }: HoloProps) => {
    return (
        <div className={cn("relative flex items-center justify-center w-full h-full", className)}>
            <svg viewBox="0 0 400 300" className="w-full h-full text-cyan-400">
                {/* Perspective conveyor/grid */}
                <path d="M50 250 L100 250 L150 150 L100 150 Z" fill="currentColor" fillOpacity="0.05" stroke="currentColor" strokeWidth="0.5" />
                <path d="M150 250 L200 250 L250 150 L200 150 Z" fill="currentColor" fillOpacity="0.05" stroke="currentColor" strokeWidth="0.5" />
                <path d="M250 250 L300 250 L350 150 L300 150 Z" fill="currentColor" fillOpacity="0.05" stroke="currentColor" strokeWidth="0.5" />

                {/* Moving Units */}
                <motion.g
                    animate={{ x: [0, 100] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                >
                    <g transform="translate(50, 180)">
                        <rect x="0" y="0" width="40" height="40" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="1" />
                        <text x="10" y="25" fontSize="10" fill="currentColor" opacity="0.8">CHK</text>
                    </g>
                    <g transform="translate(150, 180)">
                        <rect x="0" y="0" width="40" height="40" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="1" />
                        <path d="M10 20 L20 30 L30 10" fill="none" stroke="white" strokeWidth="2" />
                    </g>
                    <g transform="translate(-50, 180)">
                        <rect x="0" y="0" width="40" height="40" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="1" />
                    </g>
                </motion.g>

                {/* Robotic Arms / Scanners */}
                <g transform="translate(200, 100)">
                    <line x1="0" y1="0" x2="0" y2="50" stroke="currentColor" strokeWidth="2" />
                    <circle cx="0" cy="0" r="5" fill="currentColor" />
                    <motion.line x1="0" y1="50" x2="20" y2="70" stroke="currentColor" strokeWidth="2"
                        animate={{ x2: [20, -20, 20], y2: [70, 70, 70] }} transition={{ duration: 1, repeat: Infinity }}
                    />
                    <motion.circle cx="0" cy="50" r="3" fill="white" animate={{ opacity: [1, 0] }} transition={{ duration: 0.2, repeat: Infinity }} />
                    <motion.path d="M-20 80 L20 80" stroke="cyan" strokeWidth="1" opacity="0.5"
                        animate={{ opacity: [0, 0.8, 0] }} transition={{ duration: 0.5, repeat: Infinity }}
                    />
                </g>
            </svg>
        </div>
    );
};
