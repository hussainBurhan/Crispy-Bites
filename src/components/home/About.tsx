"use client";

import { motion } from "framer-motion";
import { Award, CheckCircle, Clock, Snowflake, LucideIcon } from "lucide-react";
import { AboutSection } from "@/types/content";

interface AboutProps {
    content: AboutSection;
}

const iconMap: Record<string, LucideIcon> = {
    award: Award,
    "check-circle": CheckCircle,
    clock: Clock,
    snowflake: Snowflake,
};

export default function About({ content }: AboutProps) {
    return (
        <section id="about" className="py-20 bg-gradient-to-b from-white to-brand-light">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="font-heading font-bold text-4xl sm:text-5xl text-brand-charcoal mb-6">
                        {content.title}
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        {content.story}
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {content.features.map((feature, index) => {
                        const Icon = iconMap[feature.icon] || Award;
                        return (
                            <motion.div
                                key={index}
                                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ y: -8 }}
                            >
                                {/* Gradient Border Effect */}
                                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-brand-orange to-brand-red opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl" />

                                <div className="relative">
                                    <div className="w-16 h-16 bg-gradient-to-br from-brand-orange to-brand-red rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                        <Icon className="w-8 h-8 text-white" />
                                    </div>

                                    <h3 className="font-heading font-bold text-xl text-brand-charcoal mb-3">
                                        {feature.title}
                                    </h3>

                                    <p className="text-gray-600 leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
