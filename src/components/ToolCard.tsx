import { Tool } from '@/types/tool'

export default function ToolCard({ tool }: { tool: Tool }) {
    return (
        <div className='border p-4 rounded-x1 shadow hover:shadow-md transition'>
            <h2 className='text-xl font-semibold'>{tool.name}</h2>
            <p className='text-gray-600 mb-2'>{tool.description}</p>
            <span className='text-sm bg-gray-100 px-2 py-1 rounded'>{tool.category}</span>
            <div className='mt-2 text-sm text-yellow-600'>{tool.rating}</div>
            <a href={`/tools/${tool.id}`} className='text-blue-600 mt-2 block hover:underline'>
                View details →
            </a>
        </div>
    )
}