"use client";

import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Sun, Moon, Menu, X } from "lucide-react";
import { useTheme } from "next-themes";

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Blogs", href: "/blogs" },
    { name: "Naam Jap", href: "/naam-jap" },
    { name: "Contact Me", href: "/contact-us" },
  ];

  return (
    <header className="w-full shadow-md bg-white dark:bg-gray-900 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-purple-700 dark:text-purple-300">
          Bhakti Yog
        </h1>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => router.push(item.href)}
              className={`font-medium transition ${
                pathname === item.href
                  ? "text-purple-600 dark:text-purple-300"
                  : "text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-300"
              }`}
            >
              {item.name}
            </button>
          ))}

          {/* Theme Toggle */}
          <button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
            aria-label="Toggle theme"
          >
            {theme === "light" ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </nav>

        {/* Mobile menu button and theme toggle */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
            aria-label="Toggle theme"
          >
            {theme === "light" ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button
            className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 px-4 py-3 space-y-2">
          {navItems.map((item) => (
            <button
              key={item.name}
              className={`block py-3 w-full text-left font-medium transition ${
                pathname === item.href
                  ? "text-purple-600 dark:text-purple-300 bg-purple-50 dark:bg-purple-900/20 px-3 rounded"
                  : "text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-300"
              }`}
              onClick={() => {
                router.push(item.href);
                setOpen(false);
              }}
            >
              {item.name}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
