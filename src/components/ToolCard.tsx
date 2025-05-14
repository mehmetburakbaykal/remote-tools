"use client";

import { Tool } from "@/types/tool";
import Link from "next/link";
import { useFavorites } from "@/context/FavoritesContext";
import { Heart, Star } from "lucide-react";

export default function ToolCard({ tool }: { tool: Tool }) {
  const { favorites, toggleFavorite } = useFavorites();
  const isFavorite = favorites.includes(tool.id);

  return (
    <div className="border p-6 rounded-2xl shadow hover:shadow-lg transition bg-white relative hover:bg-gray-100">
      <button
        onClick={() => toggleFavorite(tool.id)}
        className="absolute top-4 right-4 text-xl cursor-pointer"
        aria-label="Toggle Favorite"
      >
        {isFavorite ? (
          <Heart className="text-red-500 fill-red-500 w-5 h-5" />
        ) : (
          <Heart className="text-slate-400 w-5 h-5" />
        )}
      </button>

      <h2 className="text-xl font-semibold">{tool.name}</h2>
      <p className="text-gray-600 mb-2">{tool.description}</p>
      <span className="text-sm bg-yellow-100 text-yellow-800 px-2 py-1 rounded">
        {tool.category}
      </span>

      <div className="flex gap-2 mt-2 text-sm text-yellow-600">
        <Star className="text-yellow-400 fill-yellow-400 w-5 h-5" />
        {tool.rating}
      </div>

      <Link
        href={`/tools/${tool.id}`}
        className="text-blue-600 mt-4 inline-block text-sm hover:underline"
      >
        View details →
      </Link>
    </div>
  );
}
