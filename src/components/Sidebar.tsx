"use client";

interface Props {
  categories: string[];
  activeCategory: string;
  setActiveCategory: (cat: string) => void;
}

export default function Sidebar({ categories, activeCategory, setActiveCategory }: Props) {
  return (
    <aside className="w-full md:w-64 bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-4 sticky top-6 h-fit z-10">
      <h2 className="text-2xl font-bold text-purple-700 dark:text-purple-300 mb-4 text-center md:text-left">
        Categories
      </h2>
      <nav className="flex flex-col gap-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`text-lg font-medium p-2 rounded-md w-full text-left transition ${
              activeCategory === category
                ? "bg-purple-700 text-white"
                : "hover:bg-purple-100 dark:hover:bg-gray-700 dark:text-gray-200"
            }`}
          >
            {category}
          </button>
        ))}
      </nav>
    </aside>
  );
}
