"use client";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";

import Sidebar from "@/components/Sidebar";
import BlogCard from "@/components/BlogCard";
import FloatingPetals from "@/components/FloatingPetals";
import { blogsData } from "./data";

export default function BlogsPage() {
  const categories = Object.keys(blogsData);
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-100 dark:from-gray-900 dark:via-gray-800 relative overflow-hidden p-6 flex flex-col md:flex-row gap-6">
      
      <FloatingPetals />

      {/* Sidebar */}
      <Sidebar
        categories={categories}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />

      {/* Main content */}
      <main className="flex-1 flex flex-col gap-6 z-10">
        <h1 className="text-3xl md:text-4xl font-extrabold text-purple-700 dark:text-purple-300 mb-4">
          {activeCategory} Blogs
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AnimatePresence mode="wait">
            {blogsData[activeCategory].map((blog, index) => (
              <BlogCard key={blog.title} blog={blog} index={index} />
            ))}
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}
