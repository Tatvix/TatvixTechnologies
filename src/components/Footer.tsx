"use client";

import Link from "next/link";
import { Linkedin, Mail, MapPin, Phone } from "lucide-react";
import Logo from "./Logo";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full border-t border-white/10 bg-black/40 backdrop-blur-xl">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                    {/* Brand Column */}
                    <div className="col-span-1 md:col-span-2 space-y-4">
                        <div className="mb-4">
                            <Logo />
                        </div>
                        <p className="text-sm text-white/50 max-w-sm">
                            Empowering the next generation of smart devices with premium embedded systems design and IoT connectivity.
                        </p>
                        <div className="flex items-center gap-4 pt-2">
                            <SocialLink href="tel:+918758729042" icon={<Phone className="w-5 h-5" />} label="Con₹1234tact" />
                            <SocialLink href="https://www.linkedin.com/company/tatvix" icon={<Linkedin className="w-5 h-5" />} label="LinkedIn" />
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-semibold text-white mb-4">Company</h4>
                        <ul className="space-y-2 text-sm text-white/60">
                            <li><FooterLink href="#services">Services</FooterLink></li>
                            <li><FooterLink href="#process">Process</FooterLink></li>
                            <li><FooterLink href="#industries">Industries</FooterLink></li>
                            <li><FooterLink href="#about">About Us</FooterLink></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-semibold text-white mb-4">Contact</h4>
                        <ul className="space-y-3 text-sm text-white/60">
                            <li className="flex items-center gap-2">
                                <Mail className="w-4 h-4 text-blue-400" />
                                <a href="mailto:hello@tatvix.com" className="hover:text-white transition-colors">
                                    info@tatvixtech.com
                                </a>
                            </li>
                            <li className="flex items-start gap-2">
                                <MapPin className="w-4 h-4 text-blue-400 mt-0.5" />
                                <span>
                                    Ahmedabad, Gujarat, India
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40">
                    <p>&copy; {currentYear} Tatvix. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
    return (
        <a
            href={href}
            className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white/60 hover:text-white transition-all transform hover:scale-110"
            aria-label={label}
        >
            {icon}
        </a>
    );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
    return (
        <Link
            href={href}
            className="hover:text-blue-400 transition-colors block py-0.5"
        >
            {children}
        </Link>
    );
}
