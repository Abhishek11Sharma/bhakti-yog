"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Blog } from "@/app/blogs/data";

interface Props {
  blog: Blog;
  index: number;
}

export default function BlogCard({ blog, index }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition transform"
    >
      <h2 className="text-xl md:text-2xl font-bold text-purple-700 dark:text-purple-300 mb-2">
        {blog.title}
      </h2>
      <p className="text-gray-700 dark:text-gray-300 mb-4">{blog.excerpt}</p>

      {/* Update Link component */}
      <Link href={blog.link} className="text-purple-700 dark:text-purple-400 font-semibold hover:underline">
        Read More
      </Link>
    </motion.div>
  );
}
