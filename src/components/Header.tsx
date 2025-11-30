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
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-purple-700 dark:text-purple-300">
          Bhakti Yog
        </h1>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => router.push(item.href)}
              className={`text-lg hover:text-purple-600 dark:hover:text-purple-300 transition ${
                pathname === item.href
                  ? "text-purple-600 dark:text-purple-300"
                  : "text-gray-800 dark:text-gray-200"
              }`}
            >
              {item.name}
            </button>
          ))}

          {/* Theme Toggle */}
          <button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            {theme === "light" ? <Sun /> : <Moon />}
          </button>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white dark:bg-gray-900 px-4 pb-4 space-y-2">
          {navItems.map((item) => (
            <button
              key={item.name}
              className="block py-2 text-lg border-b border-gray-200 dark:border-gray-700 w-full text-left"
              onClick={() => {
                router.push(item.href);
                setOpen(false);
              }}
            >
              {item.name}
            </button>
          ))}

          {/* Mobile Theme Button */}
          <button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="flex gap-2 items-center py-2"
          >
            {theme === "light" ? <Sun /> : <Moon />} Change Theme
          </button>
        </div>
      )}
    </header>
  );
}
