"use client";

import { Facebook, Instagram, Twitter } from "lucide-react";
import { FooterSection } from "@/types/content";

interface FooterProps {
    content: FooterSection;
}

const socialIcons = {
    facebook: Facebook,
    instagram: Instagram,
    twitter: Twitter,
};

export default function Footer({ content }: FooterProps) {
    return (
        <footer className="bg-brand-charcoal text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    {/* Brand */}
                    <div>
                        <div className="flex items-center space-x-2 mb-4">
                            <div className="w-10 h-10 bg-gradient-to-br from-brand-orange to-brand-red rounded-lg flex items-center justify-center">
                                <span className="text-white font-heading font-bold text-xl">CB</span>
                            </div>
                            <span className="font-heading font-bold text-2xl">Crispy Bites</span>
                        </div>
                        <p className="text-gray-400 leading-relaxed">{content.tagline}</p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-heading font-semibold text-lg mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            {content.quickLinks.map((link) => (
                                <li key={link.href}>
                                    <a
                                        href={link.href}
                                        className="text-gray-400 hover:text-brand-orange transition-colors"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Social Media */}
                    <div>
                        <h3 className="font-heading font-semibold text-lg mb-4">Follow Us</h3>
                        <div className="flex gap-4">
                            {content.social.map((social) => {
                                const Icon = socialIcons[social.platform as keyof typeof socialIcons];
                                return Icon ? (
                                    <a
                                        key={social.platform}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-brand-orange transition-all duration-300"
                                        aria-label={social.platform}
                                    >
                                        <Icon className="w-5 h-5" />
                                    </a>
                                ) : null;
                            })}
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="pt-8 border-t border-white/10 text-center text-gray-400">
                    <p>{content.copyright}</p>
                </div>
            </div>
        </footer>
    );
}
