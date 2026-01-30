import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                bg: "#0A0E1A",
                surface: "rgba(255,255,255,0.04)",
                glass: "rgba(255,255,255,0.06)",
                border: "rgba(255,255,255,0.12)",
                primary: "#00D9FF", // electric cyan
                accent: "#10B981", // emerald green
                purple: "#8B5CF6", // tech purple
                orange: "#F59E0B", // amber
                text: "#E8F4FF",
                muted: "#8B9DB3",
            },
            fontFamily: {
                sans: ["var(--font-inter)", "sans-serif"],
                heading: ["var(--font-space-grotesk)", "sans-serif"],
                mono: ["var(--font-jetbrains-mono)", "monospace"],
            },
            borderRadius: {
                "2xl": "1rem",
                "3xl": "1.5rem",
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
            },
            animation: {
                "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
                "spin-slow": "spin 20s linear infinite",
            },
        },
    },
    plugins: [],
};
export default config;
