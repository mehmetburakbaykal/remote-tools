"use client";

import { Tool } from "@/types/tool";
import Link from "next/link";
import { useFavorites } from "@/context/FavoritesContext";

export default function ToolCard({ tool }: { tool: Tool }) {
  const { favorites, toggleFavorite } = useFavorites();
  const isFavorite = favorites.includes(tool.id);

  return (
    <div className="border p-6 rounded-2xl shadow hover:shadow-lg transition bg-white relative">
      <button
        onClick={() => toggleFavorite(tool.id)}
        className="absolute top-4 right-4 text-xl cursor-pointer"
        aria-label="Toggle Favorite"
      >
        {isFavorite ? "⭐" : "☆"}
      </button>

      <h2 className="text-xl font-semibold">{tool.name}</h2>
      <p className="text-gray-600 mb-2">{tool.description}</p>
      <span className="text-sm bg-gray-100 px-2 py-1 rounded">
        {tool.category}
      </span>
      <div className="mt-2 text-sm text-yellow-600">⭐ {tool.rating}</div>

      <Link
        href={`/tools/${tool.id}`}
        className="text-blue-600 mt-4 inline-block text-sm hover:underline"
      >
        View details →
      </Link>
    </div>
  );
}
