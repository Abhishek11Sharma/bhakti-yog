"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function HareKrishnaPremium() {
  const text = "HARE KRISHNA ".split("");
  const petals = Array.from({ length: 14 });
  const haloParticles = Array.from({ length: 16 });
  const router = useRouter();

  return (
    <section className="relative overflow-hidden min-h-[85vh] flex items-center justify-center bg-gradient-to-br from-purple-200 via-white to-purple-300 dark:from-black dark:via-gray-900 dark:to-black">

      {/* ---------------------- RADHA-KRISHNA SILHOUETTE GLOW ---------------------- */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div
          initial={{ scale: 0.95, opacity: 0.25 }}
          animate={{ scale: 1, opacity: 0.35 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
          className="w-[400px] md:w-[700px] h-[400px] md:h-[700px] relative"
        >
          <svg viewBox="0 0 512 512" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <path d="M256 0C120 0 0 120 0 256s120 256 256 256 256-120 256-256S392 0 256 0z" fill="url(#gradGlow)" />
            <defs>
              <radialGradient id="gradGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#b45309" stopOpacity="0.05" />
              </radialGradient>
            </defs>
          </svg>
        </motion.div>
      </div>

      {/* ---------------------- HALO GOLDEN PARTICLES ---------------------- */}
      {haloParticles.map((_, i) => (
        <motion.div
          key={i}
          initial={{ rotate: 0, x: 0, y: 0 }}
          animate={{ rotate: 360 }}
          transition={{
            duration: 12 + Math.random() * 6,
            repeat: Infinity,
            ease: "linear",
            delay: i * 0.2,
          }}
          className="absolute w-[6px] h-[6px] bg-yellow-700 rounded-full shadow-lg blur-sm"
          style={{
            top: "50%",
            left: "50%",
            marginLeft: `${Math.cos((i / haloParticles.length) * Math.PI * 2) * 200}px`,
            marginTop: `${Math.sin((i / haloParticles.length) * Math.PI * 2) * 200}px`,
          }}
        />
      ))}

      {/* ---------------------- FLOATING LOTUS PETALS ---------------------- */}
      {petals.map((_, i) => (
        <motion.div
          key={i}
          initial={{ x: Math.random() * 800 - 400, y: Math.random() * 400 - 200, opacity: 0, scale: Math.random() * 0.6 + 0.4 }}
          animate={{ x: Math.random() * 800 - 400, y: Math.random() * 400 - 200, opacity: Math.random() * 0.7 + 0.3, rotate: Math.random() * 180 }}
          transition={{ duration: 6 + Math.random() * 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute text-pink-300/80 text-2xl"
        >
          🌸
        </motion.div>
      ))}

      {/* ---------------------- DIVINE FLOATING ORBS ---------------------- */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.1, 0.4, 0.1], scale: [1, 1.3, 1], x: [0, Math.random() * 200 - 100, 0], y: [0, Math.random() * 200 - 100, 0] }}
            transition={{ duration: 6 + i * 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute w-40 h-40 bg-purple-300/20 rounded-full blur-3xl"
            style={{ top: `${Math.random() * 80}%`, left: `${Math.random() * 80}%` }}
          />
        ))}
      </div>

      {/* ---------------------- RADIANT LIGHT PULSE ---------------------- */}
      <motion.div
        initial={{ opacity: 0.25, scale: 0.7 }}
        animate={{ opacity: 0.4, scale: 1.2 }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-[900px] h-[900px] rounded-full bg-yellow-700/20 dark:bg-yellow-800/20 blur-[120px]"
      />

      {/* ---------------------- MAIN CONTENT ---------------------- */}
      <motion.div initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.2, ease: "easeOut" }} className="relative z-10 text-center px-6">

        {/* TITLE */}
        <motion.h1 className="text-5xl md:text-6xl font-extrabold text-purple-800 dark:text-purple-300 drop-shadow-[0_0_25px_rgba(255,230,80,0.7)] whitespace-nowrap" initial={{ opacity: 0, y: 30, filter: "blur(4px)" }} animate={{ opacity: 1, y: 0, filter: "blur(0px)" }} transition={{ duration: 1 }}>
          Bhakti Yog — The Path of Devotion
        </motion.h1>

        {/* HARE KRISHNA ANIMATION */}
        <div className="mt-6 flex gap-2 md:gap-4 justify-center flex-wrap text-4xl md:text-6xl font-extrabold">
          {text.map((letter, index) => (
            <motion.span key={index} initial={{ opacity: 0, y: 40, scale: 0.8, filter: "blur(6px)" }} animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }} transition={{ delay: index * 0.15, duration: 0.6, ease: "easeOut" }} className="text-purple-700 dark:text-purple-300 drop-shadow-[0_0_12px_rgba(245,200,80,0.8)]">
              {letter === " " ? "\u00A0" : letter}
            </motion.span>
          ))}
        </div>

        {/* TAGLINE */}
        <motion.p className="mt-6 text-lg md:text-2xl text-gray-700 dark:text-gray-300 drop-shadow" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.5, duration: 0.8 }}>
          Walk the path of devotion — Chant & Be Happy ✨
        </motion.p>

        {/* BUTTONS */}
        <motion.div className="mt-8 flex gap-4 justify-center" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 3, duration: 0.8 }}>
          <button onClick={() => router.push("/naam-jap")} className="px-6 py-3 rounded-xl bg-purple-700 text-white font-semibold shadow-lg shadow-purple-400/40 hover:bg-purple-800 transition">
            Start Chanting
          </button>
          <button onClick={() => router.push("/blogs")} className="px-6 py-3 rounded-xl border border-purple-400/50 text-purple-700 dark:text-purple-300 font-semibold hover:bg-purple-100/40 dark:hover:bg-purple-900/30 transition">
            Read Blogs
          </button>
        </motion.div>
      </motion.div>

      {/* SOFT MIST */}
      <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-purple-200/40 dark:from-purple-900/30 to-transparent blur-xl pointer-events-none"></div>
    </section>
  );
}
