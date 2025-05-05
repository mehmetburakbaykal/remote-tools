"use client";

import { useState } from "react";

type Props = {
  categories: string[];
  onFilterChange: (category: string | null) => void;
  selectedCategory: string | null;
};

export default function CategoryFilter({
  categories,
  selectedCategory,
  onFilterChange,
}: Props) {
  return (
    <div className="flex flex-wrap gap-3 mb-6">
      <button
        onClick={() => onFilterChange(null)}
        className={`px-3 py-1 rounded-full border text-sm transition ${
          selectedCategory === null
            ? "bg-slate-600 text-white"
            : "bg-white text-gray-700 hover:bg-gray-100"
        }`}
      >
        All
      </button>

      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onFilterChange(category)}
          className={`px-3 py-1 rounded-full border text-sm transition ${
            selectedCategory === category
              ? "bg-slate-600 text-white"
              : "bg-white text-gray-700 hover:bg-gray-100"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
