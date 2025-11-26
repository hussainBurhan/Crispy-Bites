"use client";

import { motion } from "framer-motion";
import { ArrowRight, ShoppingBag } from "lucide-react";
import { HeroSection } from "@/types/content";

interface HeroProps {
    content: HeroSection;
}

export default function Hero({ content }: HeroProps) {
    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
        >
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-charcoal/90 via-brand-charcoal/80 to-brand-orange/60 z-10" />
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: "url('/images/hero-bg.jpg')",
                        backgroundAttachment: "fixed",
                    }}
                />
            </div>

            {/* Animated Background Elements */}
            <div className="absolute inset-0 z-0">
                <motion.div
                    className="absolute top-20 left-10 w-72 h-72 bg-brand-orange/20 rounded-full blur-3xl"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
                <motion.div
                    className="absolute bottom-20 right-10 w-96 h-96 bg-brand-red/20 rounded-full blur-3xl"
                    animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            </div>

            {/* Content */}
            <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.div
                        className="inline-block mb-6 px-6 py-2 bg-brand-gold/20 backdrop-blur-sm rounded-full border border-brand-gold/30"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <span className="text-brand-cream font-medium">Premium Frozen Foods</span>
                    </motion.div>

                    <h1 className="font-heading font-bold text-5xl sm:text-6xl lg:text-7xl text-white mb-6 leading-tight">
                        {content.tagline}
                    </h1>

                    <p className="text-xl sm:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto">
                        {content.subtitle}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <motion.a
                            href="#products"
                            className="group px-8 py-4 bg-gradient-to-r from-brand-orange to-brand-red text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <ShoppingBag className="w-5 h-5" />
                            {content.cta.primary}
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </motion.a>

                        <motion.a
                            href="#contact"
                            className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full border-2 border-white/30 hover:bg-white/20 transition-all duration-300"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {content.cta.secondary}
                        </motion.a>
                    </div>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
                        <motion.div
                            className="w-1.5 h-1.5 bg-white rounded-full"
                            animate={{ y: [0, 12, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
