"use client";

import { useState } from "react";
import { useFavorites } from "@/context/FavoritesContext";
import tools from "@/data/tools.json";
import ToolCard from "@/components/ToolCard";
import CategoryFilter from "@/components/CategoryFilter";
import SearchInput from "@/components/SearchInput";

export default function FavoritesPage() {
  const { favorites } = useFavorites();

  const favoriteTools = tools.filter((tool) => favorites.includes(tool.id));

  const categories = Array.from(
    new Set(favoriteTools.map((tool) => tool.category))
  );

  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredTools = favoriteTools.filter((tool) => {
    const matchesCategory = selectedCategory
      ? tool.category === selectedCategory
      : true;
    const matchesSearch = tool.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-6">Favorite Tools</h1>

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
        <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onFilterChange={setSelectedCategory}
        />
        <SearchInput searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      </div>

      {filteredTools.length === 0 ? (
        <p className="text-gray-600">
          No favorite tools match your search or filter.
        </p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTools.map((tool) => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>
      )}
    </main>
  );
}
