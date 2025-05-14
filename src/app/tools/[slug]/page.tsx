import { notFound } from "next/navigation";
import tools from "@/data/tools.json";
import type { Tool } from "@/types/tool";
import Image from "next/image";
import Link from "next/link";
import { Globe, Twitter } from "lucide-react";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function ToolDetailPage({ params }: Props) {
  const { slug } = await params;

  const rawTool = tools.find((t) => t.id === slug);
  if (!rawTool) return notFound();

  const tool = rawTool as Tool;
  const features = tool.features ?? [];
  const integrations = tool.integrations ?? [];
  const tags = tool.tags ?? [];
  return (
    <main className="p-6 max-w-6xl mx-auto">
      <Link
        href="/"
        className="text-sm text-slate-600 hover:underline block mb-4"
      >
        ← Back to all tools
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-10">
        <div className="bg-white p-6 rounded-2xl shadow space-y-6">
          <div className="flex items-center gap-4 border-b pb-4">
            {tool.image && (
              <Image
                src={tool.image}
                alt={tool.name}
                width={48}
                height={48}
                className="rounded"
              />
            )}
            <div>
              <h1 className="text-2xl font-bold">{tool.name}</h1>
              <p className="text-sm text-gray-500">{tool.category}</p>
            </div>
          </div>

          <p className="text-gray-700">{tool.description}</p>

          {features?.length > 0 && (
            <>
              <h2 className="text-xl font-semibold">Key Features</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                {features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </>
          )}

          {integrations?.length > 0 && (
            <>
              <h2 className="text-xl font-semibold">Integrations</h2>
              <div className="flex flex-wrap gap-2">
                {integrations.map((name) => (
                  <span
                    key={name}
                    className="text-sm bg-slate-100 px-3 py-1 rounded-full text-gray-700 border"
                  >
                    {name}
                  </span>
                ))}
              </div>
            </>
          )}
        </div>

        <aside className="space-y-6">
          {tags?.length > 0 && (
            <div>
              <h3 className="text-sm font-semibold text-slate-600 mb-2">
                Tags
              </h3>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-slate-100 text-sm text-gray-700 px-3 py-1 rounded-full border"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className="bg-gray-50 p-4 rounded-xl shadow-sm space-y-2 text-sm text-gray-700">
            <p>
              <strong>Launch Date:</strong> {tool.launchDate || "Not specified"}
            </p>
            <p>
              <strong>Rating:</strong> ⭐ {tool.rating}
            </p>
          </div>

          <div className="space-y-2 text-sm text-slate-700">
            {tool.website && (
              <a
                href={tool.website}
                target="_blank"
                className="flex items-center gap-2 hover:underline text-blue-600"
              >
                <Globe className="w-4 h-4" /> Visit Website
              </a>
            )}
            {tool.twitter && (
              <a
                href={tool.twitter}
                target="_blank"
                className="flex items-center gap-2 hover:underline text-slate-700"
              >
                <Twitter className="w-4 h-4" /> X (formerly Twitter)
              </a>
            )}
            {tool.github && (
              <a
                href={tool.github}
                target="_blank"
                className="block hover:underline text-gray-800"
              >
                💻 GitHub
              </a>
            )}
          </div>
        </aside>
      </div>
    </main>
  );
}
