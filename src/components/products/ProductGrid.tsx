"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Product } from "@/types/content";
import ProductCard from "./ProductCard";
import ProductModal from "./ProductModal";

interface ProductGridProps {
    products: Product[];
}

export default function ProductGrid({ products }: ProductGridProps) {
    const [selectedCategory, setSelectedCategory] = useState<string>("All");
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

    const categories = ["All", ...Array.from(new Set(products.map((p) => p.category)))];

    const filteredProducts =
        selectedCategory === "All"
            ? products
            : products.filter((p) => p.category === selectedCategory);

    return (
        <section id="products" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="font-heading font-bold text-4xl sm:text-5xl text-brand-charcoal mb-4">
                        Our Products
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Explore our delicious range of frozen foods, made with premium ingredients
                    </p>
                </motion.div>

                {/* Category Filter */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {categories.map((category) => (
                        <motion.button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${selectedCategory === category
                                    ? "bg-gradient-to-r from-brand-orange to-brand-red text-white shadow-lg"
                                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                }`}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {category}
                        </motion.button>
                    ))}
                </div>

                {/* Product Grid */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    layout
                >
                    {filteredProducts.map((product) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            onClick={() => setSelectedProduct(product)}
                        />
                    ))}
                </motion.div>

                {/* Empty State */}
                {filteredProducts.length === 0 && (
                    <motion.div
                        className="text-center py-20"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                    >
                        <p className="text-gray-500 text-lg">No products found in this category.</p>
                    </motion.div>
                )}
            </div>

            {/* Product Modal */}
            {selectedProduct && (
                <ProductModal
                    product={selectedProduct}
                    onClose={() => setSelectedProduct(null)}
                />
            )}
        </section>
    );
}
