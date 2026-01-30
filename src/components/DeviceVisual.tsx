"use client";

import { motion } from "framer-motion";
import { Cpu, Thermometer, Battery, Activity, Wifi } from "lucide-react";

interface DeviceVisualProps {
    isActive: boolean;
}

export default function DeviceVisual({ isActive }: DeviceVisualProps) {
    return (
        <div className="relative w-full h-[400px] bg-white/5 border border-white/10 rounded-2xl p-6 flex items-center justify-center overflow-hidden">
            {/* PCB Circuit Pattern Background */}
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)", backgroundSize: "20px 20px" }} />

            {/* Device Board */}
            <div className="relative w-64 h-80 bg-slate-900 border-2 border-emerald-500/30 rounded-lg shadow-2xl p-4 flex flex-col items-center">
                {/* Antenna */}
                <div className="absolute -top-6 right-8 w-1 h-6 bg-gray-500 rounded-t-full" />

                {/* MCU */}
                <div className="w-24 h-24 bg-gray-800 border border-gray-600 rounded mb-6 flex items-center justify-center relative shadow-inner">
                    <Cpu className="w-12 h-12 text-gray-500" />
                    <span className="absolute bottom-2 text-[8px] text-gray-400 font-mono">ESP32-WROOM</span>
                    {isActive && (
                        <motion.div
                            animate={{ opacity: [0.2, 1, 0.2] }}
                            transition={{ duration: 0.2, repeat: Infinity, repeatDelay: 0.5 }}
                            className="absolute top-2 right-2 w-1.5 h-1.5 bg-blue-500 rounded-full shadow-[0_0_8px_rgba(59,130,246,1)]"
                        />
                    )}
                </div>

                {/* Sensors Area */}
                <div className="grid grid-cols-2 gap-3 w-full mb-auto">
                    {/* Sensor 1 */}
                    <motion.div
                        animate={isActive ? { borderColor: "rgba(16, 185, 129, 0.5)", backgroundColor: "rgba(16, 185, 129, 0.1)" } : {}}
                        className="p-2 border border-white/10 rounded bg-white/5 flex flex-col items-center"
                    >
                        <Thermometer className="w-5 h-5 text-orange mb-1" />
                        <div className="h-1 w-full bg-gray-700 rounded overflow-hidden">
                            <motion.div
                                animate={isActive ? { width: ["40%", "70%", "50%"] } : { width: "0%" }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className="h-full bg-orange"
                            />
                        </div>
                    </motion.div>

                    {/* Sensor 2 */}
                    <motion.div
                        animate={isActive ? { borderColor: "rgba(139, 92, 246, 0.5)", backgroundColor: "rgba(139, 92, 246, 0.1)" } : {}}
                        className="p-2 border border-white/10 rounded bg-white/5 flex flex-col items-center"
                    >
                        <Activity className="w-5 h-5 text-purple mb-1" />
                        <motion.div
                            animate={isActive ? { scale: [1, 1.2, 1] } : {}}
                            transition={{ duration: 0.5, repeat: Infinity }}
                            className="w-2 h-2 bg-purple rounded-full"
                        />
                    </motion.div>
                </div>

                {/* Status Indicators */}
                <div className="w-full mt-4 pt-4 border-t border-white/10 flex justify-between items-center text-xs">
                    <div className="flex items-center gap-1.5 text-gray-400">
                        <Battery className="w-4 h-4" />
                        <span className="font-mono">87%</span>
                    </div>

                    <div className={`flex items-center gap-1.5 transition-colors ${isActive ? "text-emerald-400" : "text-gray-500"}`}>
                        <Wifi className="w-4 h-4" />
                        <span className="font-bold">{isActive ? "ONLINE" : "OFFLINE"}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
