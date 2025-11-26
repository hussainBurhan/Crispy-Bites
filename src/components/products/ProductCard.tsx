"use client";

import { motion } from "framer-motion";
import { Product } from "@/types/content";
import { cn } from "@/lib/utils";

interface ProductCardProps {
    product: Product;
    onClick: () => void;
}

export default function ProductCard({ product, onClick }: ProductCardProps) {
    return (
        <motion.div
            className="group cursor-pointer"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            whileHover={{ y: -8 }}
            onClick={onClick}
        >
            <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden bg-gradient-to-br from-brand-cream to-brand-light">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />

                    <motion.div
                        className="w-full h-full bg-cover bg-center"
                        style={{ backgroundImage: `url(${product.image})` }}
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.4 }}
                    />

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4 z-20">
                        <span className="px-4 py-1.5 bg-white/90 backdrop-blur-sm text-brand-orange font-semibold text-sm rounded-full shadow-md">
                            {product.category}
                        </span>
                    </div>
                </div>

                {/* Content */}
                <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                        <h3 className="font-heading font-bold text-xl text-brand-charcoal group-hover:text-brand-orange transition-colors">
                            {product.name}
                        </h3>
                        <span className="text-brand-red font-bold text-lg whitespace-nowrap ml-2">
                            {product.price}
                        </span>
                    </div>

                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                        {product.description}
                    </p>

                    {/* Features */}
                    <div className="flex flex-wrap gap-2">
                        {product.features.slice(0, 2).map((feature, index) => (
                            <span
                                key={index}
                                className="px-3 py-1 bg-brand-cream text-brand-orange text-xs font-medium rounded-full"
                            >
                                {feature}
                            </span>
                        ))}
                    </div>

                    {/* Hover CTA */}
                    <motion.div
                        className="mt-4 pt-4 border-t border-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        initial={{ opacity: 0 }}
                    >
                        <span className="text-brand-orange font-semibold text-sm flex items-center gap-2">
                            View Details
                            <svg
                                className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 5l7 7-7 7"
                                />
                            </svg>
                        </span>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
}
