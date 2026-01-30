import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  devIndicators: {
    // @ts-expect-error - appIsrStatus is a valid Next.js 15+ option but may be missing from types
    appIsrStatus: false, // defaults to true
    buildActivity: false, // defaults to true
    buildActivityPosition: "bottom-right",
  },
};

export default nextConfig;
