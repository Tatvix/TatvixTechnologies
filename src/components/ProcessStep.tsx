"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface ProcessStepProps {
    number: number;
    title: string;
    description: string;
    icon: LucideIcon;
    visual?: React.ElementType;
    isLeft: boolean;
    delay: number;
}

export default function ProcessStep({ number, title, description, icon: Icon, visual: Visual, isLeft, delay }: ProcessStepProps) {
    return (
        <div className="relative w-full flex flex-col md:flex-row items-center justify-between mb-24 md:gap-8">

            {/* Left Side Content */}
            <div className={`w-full md:w-[42%] flex ${isLeft ? "justify-end" : "justify-start"}`}>
                {isLeft ? (
                    <StepCard
                        number={number}
                        title={title}
                        description={description}
                        Icon={Icon}
                        isLeft={true}
                        delay={delay}
                    />
                ) : (
                    <StepVisual Visual={Visual} delay={delay + 0.2} isLeft={false} />
                )}
            </div>

            {/* Center Spacer (approx width of trace line area) */}
            <div className="hidden md:block w-[16%]"></div>

            {/* Right Side Content */}
            <div className={`w-full md:w-[42%] flex ${!isLeft ? "justify-start" : "justify-end"}`}>
                {!isLeft ? (
                    <StepCard
                        number={number}
                        title={title}
                        description={description}
                        Icon={Icon}
                        isLeft={false}
                        delay={delay}
                    />
                ) : (
                    <StepVisual Visual={Visual} delay={delay + 0.2} isLeft={true} />
                )}
            </div>
        </div>
    );
}

// Sub-component for the Text Card
const StepCard = ({ number, title, description, Icon, isLeft, delay }: { number: number, title: string, description: string, Icon: LucideIcon, isLeft: boolean, delay: number }) => (
    <motion.div
        initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay }}
        className="relative group p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/30 transition-colors backdrop-blur-sm w-full max-w-md"
    >
        {/* Connector Line to Center (Desktop) - Only for Card */}
        <div className={`hidden md:block absolute top-1/2 ${isLeft ? "-right-[22%]" : "-left-[22%]"} w-[22%] h-[2px] bg-primary/20`}>
            <div className={`absolute top-1/2 ${isLeft ? "left-0" : "right-0"} -translate-y-1/2 w-2 h-2 rounded-full bg-primary/50`} />
            <div className={`absolute top-1/2 ${isLeft ? "right-0" : "left-0"} -translate-y-1/2 w-3 h-3 rounded-full border-2 border-primary bg-bg`} />
        </div>

        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />

        {/* Step Number Badge */}
        <div className="absolute -top-4 -right-4 w-10 h-10 rounded-xl bg-bg border border-primary/30 flex items-center justify-center text-primary font-bold shadow-[0_0_15px_rgba(0,217,255,0.2)]">
            {number}
        </div>

        <div className="relative z-10">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 text-primary group-hover:scale-110 transition-transform duration-300">
                <Icon className="w-6 h-6" />
            </div>

            <h3 className="text-xl font-heading font-bold text-white mb-2">{title}</h3>
            <p className="text-muted leading-relaxed text-sm">
                {description}
            </p>
        </div>
    </motion.div>
);

// Sub-component for the Visual
const StepVisual = ({ Visual, delay, isLeft }: { Visual?: React.ElementType, delay: number, isLeft: boolean }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay }}
        className={`w-full max-w-md hidden md:flex items-center justify-center h-64 ${isLeft ? "origin-right" : "origin-left"}`}
    >
        {Visual ? (
            <div className="w-full h-full relative">
                <Visual className="scale-100" />
                {/* Decorative connecting glow to center? */}
                <div className={`absolute top-1/2 ${isLeft ? "-left-[20%]" : "-right-[20%]"} w-[20%] h-[1px] bg-gradient-to-r from-transparent to-primary/20`} />
            </div>
        ) : (
            <div className="w-full h-full flex items-center justify-center text-white/10 font-mono text-xs border border-dashed border-white/10 rounded-xl">
                VISUAL PLACEHOLDER
            </div>
        )}
    </motion.div>
);
