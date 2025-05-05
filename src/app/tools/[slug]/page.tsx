import tools from "@/data/tools.json";
import { notFound } from "next/navigation";
import Link from "next/link";

type Props = {
  params: { slug: string };
};

export default function ToolDetailPage({ params }: Props) {
  const tool = tools.find((item) => item.id === params.slug);

  if (!tool) return notFound();

  return (
    <main className="p-4 sm:p-6 lg:p-8 max-w-2xl w-full">
      <Link
        href="/"
        className="text-sm text-slate-600 hover:underline block mb-4"
      >
        ← Back to tools
      </Link>
      <h1 className="text-3xl font-bold mb-2">{tool.name}</h1>
      <p className="text-gray-700">{tool.description}</p>
      <div className="mt-4">
        <span className="inline-block bg-gray-100 px-3 py-1 rounded-full text-sm">
          {tool.category}
        </span>
      </div>
      <div className="mt-2 text-yellow-600">⭐ {tool.rating}</div>
      <a
        href={tool.website}
        target="_blank"
        rel="noopener noreferrer"
        className="text-slate-600 hover:underline mt-4 inline-block"
      >
        Visit Website →
      </a>
    </main>
  );
}
