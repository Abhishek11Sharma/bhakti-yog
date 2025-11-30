"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function NaamJapCircle() {
  const [count, setCount] = useState<number>(0);
  const [totalCount, setTotalCount] = useState<number>(0);
  const [time, setTime] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [mounted, setMounted] = useState(false);

  const startRef = useRef<number>(0);
  const requestRef = useRef<number>(0);

  const petals = Array.from({ length: 14 });

  useEffect(() => setMounted(true), []);

  // Load total count
  useEffect(() => {
    const savedTotal = parseInt(localStorage.getItem("naamJapTotal") || "0");
    setTotalCount(savedTotal);
  }, []);

  // Timer
  const updateTime = () => {
    const now = Date.now();
    setTime(now - startRef.current);
    requestRef.current = requestAnimationFrame(updateTime);
  };

  const startTimer = () => {
    startRef.current = Date.now() - time;
    requestRef.current = requestAnimationFrame(updateTime);
    setIsRunning(true);
  };

  const pauseTimer = () => {
    cancelAnimationFrame(requestRef.current);
    setIsRunning(false);
  };

  const resetTimer = () => {
    cancelAnimationFrame(requestRef.current);
    setTime(0);
    setIsRunning(false);
  };

  const handleClick = () => {
    setCount((prev) => prev + 1);
    setTotalCount((prev) => {
      const updated = prev + 1;
      localStorage.setItem("naamJapTotal", updated.toString());
      return updated;
    });
  };

  const formatTime = (ms: number) => {
    const milliseconds = Math.floor(ms % 1000);
    const totalSeconds = Math.floor(ms / 1000);
    const seconds = totalSeconds % 60;
    const totalMinutes = Math.floor(totalSeconds / 60);
    const minutes = totalMinutes % 60;
    const hours = Math.floor(totalMinutes / 60);
    const pad = (n: number, z = 2) => n.toString().padStart(z, "0");
    return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}.${pad(milliseconds, 3)}`;
  };

  if (!mounted) return null;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-100 via-white to-purple-200 dark:from-gray-900 dark:via-gray-800 p-6 relative overflow-hidden">
      
      {/* Floating lotus petals */}
      {petals.map((_, i) => {
        const angle = (i / petals.length) * 360;
        const radius = 210;
        return (
          <motion.div
            key={i}
            initial={{ rotate: angle }}
            animate={{ rotate: angle + 360 }}
            transition={{
              duration: 12 + Math.random() * 6,
              repeat: Infinity,
              ease: "linear",
              delay: i * 0.3,
            }}
            className="absolute text-pink-400 text-3xl"
            style={{
              top: "50%",
              left: "50%",
              marginLeft: `${Math.cos((angle * Math.PI) / 180) * radius}px`,
              marginTop: `${Math.sin((angle * Math.PI) / 180) * radius}px`,
            }}
          >
            🌸
          </motion.div>
        );
      })}

      {/* Naam Jap Counter Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center gap-4">
        <h2 className="text-3xl md:text-4xl font-bold text-purple-700 dark:text-purple-300">
          Naam Jap
        </h2>
        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300">
          Timer: {formatTime(time)}
        </p>
        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300">
          Session Count: {count}
        </p>
        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300">
          Total Count: {totalCount}
        </p>

        <div className="flex flex-wrap justify-center gap-3 mt-2">
          <button
            onClick={handleClick}
            className="px-6 py-3 bg-purple-700 text-white rounded-xl shadow hover:bg-purple-800 transition"
          >
            Chant
          </button>
          {!isRunning ? (
            <button
              onClick={startTimer}
              className="px-6 py-3 bg-purple-300 dark:bg-purple-600 text-purple-900 dark:text-white rounded-xl shadow hover:bg-purple-400 dark:hover:bg-purple-700 transition"
            >
              Start
            </button>
          ) : (
            <button
              onClick={pauseTimer}
              className="px-6 py-3 bg-purple-300 dark:bg-purple-600 text-purple-900 dark:text-white rounded-xl shadow hover:bg-purple-400 dark:hover:bg-purple-700 transition"
            >
              Pause Timer
            </button>
          )}
          <button
            onClick={() => {
              setCount(0);
              resetTimer();
            }}
            className="px-6 py-3 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-xl hover:bg-gray-300 dark:hover:bg-gray-600 transition"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}
