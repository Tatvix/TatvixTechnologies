"use client";

import { useState } from "react";
import Button from "./Button";
import DeviceVisual from "./DeviceVisual";
import CloudDashboard from "./CloudDashboard";
import DataStream from "./DataStream";
import { Play, Pause } from "lucide-react";

export default function IoTDemo() {
    const [isActive, setIsActive] = useState(false);

    return (
        <section id="demo" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4">
                        See Our Tech in Action
                    </h2>
                    <p className="text-lg text-muted max-w-2xl mx-auto">
                        Watch how we bridge the gap between hardware and the cloud in real-time.
                    </p>
                </div>

                {/* Demo Stage */}
                <div className="max-w-6xl mx-auto">
                    <div className="relative grid md:grid-cols-2 gap-8 lg:gap-16 items-center">

                        {/* Connection Stream (Absolute centered) */}
                        <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 z-0">
                            <DataStream isActive={isActive} />
                        </div>

                        {/* Device Panel */}
                        <div className="relative z-10">
                            <div className="text-center mb-4 text-sm font-bold text-muted tracking-widest uppercase">IoT Device</div>
                            <DeviceVisual isActive={isActive} />
                        </div>

                        {/* Cloud Panel */}
                        <div className="relative z-10">
                            <div className="text-center mb-4 text-sm font-bold text-muted tracking-widest uppercase">Cloud Dashboard</div>
                            <CloudDashboard isActive={isActive} />
                        </div>
                    </div>

                    {/* Controls */}
                    <div className="flex justify-center mt-12">
                        <Button
                            onClick={() => setIsActive(!isActive)}
                            icon={isActive ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-1" />}
                            className={isActive ? "bg-red-500/10 text-red-400 border border-red-500/20 hover:bg-red-500/20 hover:shadow-none" : "min-w-[160px]"}
                        >
                            {isActive ? "Stop Simulation" : "Start Live Demo"}
                        </Button>
                    </div>
                </div>

            </div>
        </section>
    );
}
