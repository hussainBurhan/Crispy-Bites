"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Check } from "lucide-react";
import { Product } from "@/types/content";
import { useEffect } from "react";

interface ProductModalProps {
    product: Product;
    onClose: () => void;
}

export default function ProductModal({ product, onClose }: ProductModalProps) {
    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "unset";
        };
    }, []);

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                {/* Backdrop */}
                <motion.div
                    className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                />

                {/* Modal */}
                <motion.div
                    className="relative bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: 20 }}
                    transition={{ duration: 0.3 }}
                >
                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 z-10 p-2 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-colors"
                        aria-label="Close modal"
                    >
                        <X className="w-6 h-6 text-gray-700" />
                    </button>

                    <div className="grid md:grid-cols-2 gap-8 p-8">
                        {/* Image */}
                        <div className="relative h-80 md:h-full rounded-2xl overflow-hidden bg-gradient-to-br from-brand-cream to-brand-light">
                            <div
                                className="w-full h-full bg-cover bg-center"
                                style={{ backgroundImage: `url(${product.image})` }}
                            />
                            <div className="absolute top-4 left-4">
                                <span className="px-4 py-2 bg-white/90 backdrop-blur-sm text-brand-orange font-semibold rounded-full shadow-md">
                                    {product.category}
                                </span>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="flex flex-col">
                            <div className="flex-1">
                                <h2 className="font-heading font-bold text-3xl text-brand-charcoal mb-2">
                                    {product.name}
                                </h2>
                                <p className="text-2xl font-bold text-brand-red mb-6">
                                    {product.price}
                                </p>

                                <p className="text-gray-600 leading-relaxed mb-6">
                                    {product.description}
                                </p>

                                {/* Features */}
                                <div className="mb-8">
                                    <h3 className="font-heading font-semibold text-lg text-brand-charcoal mb-4">
                                        Features
                                    </h3>
                                    <ul className="space-y-3">
                                        {product.features.map((feature, index) => (
                                            <li key={index} className="flex items-center gap-3">
                                                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                                                    <Check className="w-4 h-4 text-green-600" />
                                                </div>
                                                <span className="text-gray-700">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* CTA Buttons */}
                            <div className="flex flex-col sm:flex-row gap-3">
                                <a
                                    href="#contact"
                                    onClick={onClose}
                                    className="flex-1 px-6 py-3 bg-gradient-to-r from-brand-orange to-brand-red text-white font-semibold rounded-full text-center hover:shadow-lg transition-all duration-300"
                                >
                                    Order Now
                                </a>
                                <a
                                    href={`https://wa.me/923001234567?text=Hi, I'm interested in ${product.name}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 px-6 py-3 bg-green-500 text-white font-semibold rounded-full text-center hover:bg-green-600 transition-colors"
                                >
                                    WhatsApp
                                </a>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
}
