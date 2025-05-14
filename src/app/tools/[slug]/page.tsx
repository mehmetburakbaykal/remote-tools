import { notFound } from "next/navigation";
import tools from "@/data/tools.json";
import type { Tool } from "@/types/tool";
import Image from "next/image";
import Link from "next/link";

type Props = {
  params: { slug: string };
};

export default async function ToolDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const tool = tools.find((t) => t.id === slug) as Tool | undefined;

  if (!tool) return notFound();

  return (
    <main className="p-6 max-w-3xl">
      <Link
        href="/"
        className="text-sm text-slate-600 hover:underline mb-4 block"
      >
        ← Back to all tools
      </Link>

      <div className="flex items-center gap-4 mb-6">
        {tool.image && (
          <Image
            src={tool.image}
            alt={tool.name}
            width={48}
            height={48}
            className="rounded"
          />
        )}
        <h1 className="text-3xl font-bold">{tool.name}</h1>
      </div>

      <p className="text-gray-700 mb-4">{tool.description}</p>

      <a
        href={tool.website}
        target="_blank"
        rel="noopener noreferrer"
        className="text-slate-600 underline mb-6 inline-block"
      >
        Visit website →
      </a>

      {tool.features?.length && (
        <>
          <h2 className="text-xl font-semibold mt-6 mb-2">Key Features</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            {tool.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </>
      )}

      {tool.integrations?.length && (
        <>
          <h2 className="text-xl font-semibold mt-6 mb-2">Integrations</h2>
          <div className="flex flex-wrap gap-2">
            {tool.integrations.map((name) => (
              <span
                key={name}
                className="text-sm bg-slate-100 px-2 py-1 rounded-full text-gray-700"
              >
                {name}
              </span>
            ))}
          </div>
        </>
      )}

      <div className="mt-6 flex items-center gap-4 text-sm text-slate-600">
        {tool.twitter && (
          <a href={tool.twitter} target="_blank" rel="noopener noreferrer">
            Twitter ↗
          </a>
        )}
        {tool.github && (
          <a href={tool.github} target="_blank" rel="noopener noreferrer">
            GitHub ↗
          </a>
        )}
      </div>
    </main>
  );
}
