"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Loader2, CheckCircle2, ChevronDown } from "lucide-react";
import Button from "./Button";

interface ContactModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        mobile: "",
        company: "",
        title: "",
        inquiryType: "General",
        description: "",
    });

    const inquiryTypes = [
        "Select Inquiry Type",
        "Inquiry for",
        "PCB Design",
        "Firmware Development",
        "IoT System Integration",
        "Cloud Solutions",
        "Prototyping",
        "Production Support",
    ];

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setIsSuccess(true);
                setTimeout(() => {
                    onClose();
                    setIsSuccess(false);
                    setFormData({
                        name: "",
                        email: "",
                        mobile: "",
                        company: "",
                        title: "",
                        inquiryType: "General",
                        description: "",
                    });
                }, 3000);
            }
        } catch (error) {
            console.error("Failed to send message", error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-bg/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto"
                    >
                        {/* Modal Container */}
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.95, opacity: 0, y: 20 }}
                            onClick={(e) => e.stopPropagation()}
                            className="relative w-full max-w-2xl bg-[#0A0E1A] border border-white/10 rounded-2xl shadow-2xl overflow-hidden my-8"
                        >
                            {/* Glass Effect Overlay */}
                            <div className="absolute inset-0 bg-white/5 pointer-events-none" />

                            {/* Header */}
                            <div className="relative px-6 py-4 border-b border-white/10 flex justify-between items-center bg-white/5">
                                <div>
                                    <h3 className="text-xl font-heading font-semibold text-white">Start Your Project</h3>
                                    <p className="text-sm text-muted">Tell us about your embedded or IoT requirements</p>
                                </div>
                                <button
                                    onClick={onClose}
                                    className="p-2 rounded-full hover:bg-white/10 text-muted hover:text-white transition-colors"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </div>

                            {/* Body */}
                            <div className="relative p-6 md:p-8 max-h-[85vh] overflow-y-auto">
                                {isSuccess ? (
                                    <div className="flex flex-col items-center justify-center py-12 text-center space-y-4">
                                        <div className="w-16 h-16 rounded-full bg-emerald-500/20 flex items-center justify-center mb-4">
                                            <CheckCircle2 className="w-8 h-8 text-emerald-500" />
                                        </div>
                                        <h4 className="text-2xl font-bold text-white">Message Sent!</h4>
                                        <p className="text-muted max-w-sm">
                                            Thanks for reaching out! Our team will review your project details and get back to you within 24 hours.
                                        </p>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="grid md:grid-cols-2 gap-6">
                                            {/* Name */}
                                            <div className="space-y-2">
                                                <label className="text-sm font-medium text-gray-300">Full Name *</label>
                                                <input
                                                    required
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-gray-600"
                                                    placeholder="John Doe"
                                                />
                                            </div>

                                            {/* Email */}
                                            <div className="space-y-2">
                                                <label className="text-sm font-medium text-gray-300">Email Address *</label>
                                                <input
                                                    required
                                                    type="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-gray-600"
                                                    placeholder="john@company.com"
                                                />
                                            </div>

                                            {/* Mobile */}
                                            <div className="space-y-2">
                                                <label className="text-sm font-medium text-gray-300">Mobile Number *</label>
                                                <input
                                                    required
                                                    type="tel"
                                                    name="mobile"
                                                    value={formData.mobile}
                                                    onChange={handleChange}
                                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-gray-600"
                                                    placeholder="+91 12345 67890"
                                                />
                                            </div>

                                            {/* Company */}
                                            <div className="space-y-2">
                                                <label className="text-sm font-medium text-gray-300">Company Name</label>
                                                <input
                                                    name="company"
                                                    value={formData.company}
                                                    onChange={handleChange}
                                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-gray-600"
                                                    placeholder="Tech Solutions Inc."
                                                />
                                            </div>

                                            {/* Title */}
                                            <div className="space-y-2">
                                                <label className="text-sm font-medium text-gray-300">Job Title</label>
                                                <input
                                                    name="title"
                                                    value={formData.title}
                                                    onChange={handleChange}
                                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-gray-600"
                                                    placeholder="CTO / Product Manager"
                                                />
                                            </div>

                                            {/* Inquiry Type */}
                                            <div className="space-y-2">
                                                <label className="text-sm font-medium text-gray-300">Inquiry *</label>
                                                <div className="relative">
                                                    <select
                                                        required
                                                        name="inquiryType"
                                                        value={formData.inquiryType}
                                                        onChange={handleChange}
                                                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white appearance-none focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all cursor-pointer"
                                                    >
                                                        {inquiryTypes.map((type, i) => (
                                                            <option key={i} value={type === "Select Inquiry Type" ? "" : type} disabled={type === "Select Inquiry Type"} className="bg-slate-900 text-white">
                                                                {type}
                                                            </option>
                                                        ))}
                                                    </select>
                                                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                                                </div>
                                            </div>
                                        </div>

                                        {/* Description */}
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-gray-300">Project Description</label>
                                            <textarea
                                                rows={4}
                                                name="description"
                                                value={formData.description}
                                                onChange={handleChange}
                                                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-gray-600 resize-none"
                                                placeholder="Describe your project, timeline, and any specific requirements..."
                                            />
                                        </div>

                                        {/* Actions */}
                                        <div className="flex justify-end pt-4">
                                            <Button
                                                type="submit"
                                                size="lg"
                                                disabled={isLoading}
                                                className="w-full md:w-auto min-w-[150px]"
                                            >
                                                {isLoading ? (
                                                    <Loader2 className="w-5 h-5 animate-spin mx-auto" />
                                                ) : (
                                                    "Submit Request"
                                                )}
                                            </Button>
                                        </div>
                                    </form>
                                )}
                            </div>
                        </motion.div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
