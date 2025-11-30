"use client";
import { motion } from "framer-motion";

export default function FloatingPetals() {
  const petals = Array.from({ length: 12 });
  return (
    <>
      {petals.map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0.2, y: -50 }}
          animate={{ opacity: 0.4, y: 50 }}
          transition={{
            duration: 8 + Math.random() * 4,
            repeat: Infinity,
            repeatType: "mirror",
            delay: i * 0.5,
          }}
          className="absolute text-pink-300 text-3xl"
          style={{
            top: `${Math.random() * 80}%`,
            left: `${Math.random() * 80}%`,
          }}
        >
          🌸
        </motion.div>
      ))}
    </>
  );
}
