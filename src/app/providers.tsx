"use client";

import { ContactModalProvider } from "@/context/ContactModalContext";
import { ReactNode } from "react";

export function Providers({ children }: { children: ReactNode }) {
    return (
        <ContactModalProvider>
            {children}
        </ContactModalProvider>
    );
}
