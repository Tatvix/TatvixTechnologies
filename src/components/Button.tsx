import React from "react";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "ghost";
    size?: "sm" | "md" | "lg";
    isLoading?: boolean;
    icon?: React.ReactNode;
}

export default function Button({
    className,
    variant = "primary",
    size = "md",
    isLoading = false,
    icon,
    children,
    ...props
}: ButtonProps) {
    const baseStyles =
        "relative inline-flex items-center justify-center font-medium transition-all duration-300 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed group overflow-hidden";

    const variants = {
        primary:
            "bg-primary text-bg shadow-[0_0_20px_rgba(0,217,255,0.3)] hover:shadow-[0_0_30px_rgba(0,217,255,0.5)] border border-transparent",
        secondary:
            "bg-transparent text-primary border border-primary/30 hover:border-primary hover:bg-primary/10 hover:shadow-[0_0_20px_rgba(0,217,255,0.2)]",
        ghost:
            "bg-transparent text-muted hover:text-white hover:bg-white/5",
    };

    const sizes = {
        sm: "h-9 px-4 text-sm rounded-lg",
        md: "h-12 px-6 text-base rounded-xl",
        lg: "h-14 px-8 text-lg rounded-xl",
    };

    return (
        <button
            className={cn(baseStyles, variants[variant], sizes[size], className)}
            disabled={isLoading || props.disabled}
            {...props}
        >
            {/* Glow effect for primary/secondary buttons */}
            {variant !== "ghost" && (
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
            )}

            {isLoading ? (
                <Loader2 className="w-5 h-5 animate-spin mr-2" />
            ) : icon ? (
                <span className="mr-2">{icon}</span>
            ) : null}

            <span className="relative z-10 flex items-center justify-center">{children}</span>
        </button>
    );
}
