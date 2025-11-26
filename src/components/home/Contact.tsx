"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { ContactInfo } from "@/types/content";

interface ContactProps {
    content: ContactInfo;
}

export default function Contact({ content }: ContactProps) {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        message: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const whatsappMessage = `Hi, I'm ${formData.name}. ${formData.message}. You can reach me at ${formData.phone}`;
        window.open(
            `https://wa.me/${content.whatsapp}?text=${encodeURIComponent(whatsappMessage)}`,
            "_blank"
        );
    };

    return (
        <section id="contact" className="py-20 bg-gradient-to-b from-brand-light to-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="font-heading font-bold text-4xl sm:text-5xl text-brand-charcoal mb-4">
                        Get In Touch
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Have questions or want to place an order? We'd love to hear from you!
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    required
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 outline-none transition-all"
                                    placeholder="John Doe"
                                />
                            </div>

                            <div>
                                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                                    Phone Number
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    required
                                    value={formData.phone}
                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 outline-none transition-all"
                                    placeholder="+92-300-1234567"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    required
                                    rows={5}
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 outline-none transition-all resize-none"
                                    placeholder="Tell us what you're looking for..."
                                />
                            </div>

                            <motion.button
                                type="submit"
                                className="w-full px-8 py-4 bg-gradient-to-r from-brand-orange to-brand-red text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <Send className="w-5 h-5" />
                                Send via WhatsApp
                            </motion.button>
                        </form>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        className="space-y-6"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="bg-white rounded-2xl p-8 shadow-lg">
                            <h3 className="font-heading font-bold text-2xl text-brand-charcoal mb-6">
                                Contact Information
                            </h3>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-gradient-to-br from-brand-orange to-brand-red rounded-xl flex items-center justify-center flex-shrink-0">
                                        <Phone className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-900 mb-1">Phone</p>
                                        <a
                                            href={`tel:${content.phone}`}
                                            className="text-gray-600 hover:text-brand-orange transition-colors"
                                        >
                                            {content.phone}
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-gradient-to-br from-brand-orange to-brand-red rounded-xl flex items-center justify-center flex-shrink-0">
                                        <Mail className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-900 mb-1">Email</p>
                                        <a
                                            href={`mailto:${content.email}`}
                                            className="text-gray-600 hover:text-brand-orange transition-colors"
                                        >
                                            {content.email}
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-gradient-to-br from-brand-orange to-brand-red rounded-xl flex items-center justify-center flex-shrink-0">
                                        <MapPin className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-900 mb-1">Location</p>
                                        <p className="text-gray-600">{content.address}</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-gradient-to-br from-brand-orange to-brand-red rounded-xl flex items-center justify-center flex-shrink-0">
                                        <Clock className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-900 mb-1">Business Hours</p>
                                        <p className="text-gray-600">{content.hours}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* WhatsApp Direct */}
                        <a
                            href={`https://wa.me/${content.whatsapp}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block w-full px-8 py-4 bg-green-500 text-white font-semibold rounded-2xl text-center hover:bg-green-600 transition-colors shadow-lg"
                        >
                            Chat on WhatsApp
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
