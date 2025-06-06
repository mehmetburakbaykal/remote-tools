"use client";

import { useState } from "react";
import ToolCard from "@/components/ToolCard";
import tools from "@/data/tools.json";
import CategoryFilter from "@/components/CategoryFilter";
import SearchInput from "@/components/SearchInput";

const categories = Array.from(new Set(tools.map((tool) => tool.category)));

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredTools = tools.filter((tool) => {
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
      <h1 className="text-3xl font-bold mb-6">All Tools</h1>

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
        <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onFilterChange={setSelectedCategory}
        />
        <SearchInput searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      </div>

      {filteredTools.length === 0 ? (
        <p className="text-gray-600">No tools match your search.</p>
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
