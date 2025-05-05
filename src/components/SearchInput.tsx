"use client";

type Props = {
  searchTerm: string;
  onSearchChange: (value: string) => void;
};

export default function SearchInput({ searchTerm, onSearchChange }: Props) {
  return (
    <input
      type="text"
      placeholder="Search tools..."
      value={searchTerm}
      onChange={(e) => onSearchChange(e.target.value)}
      className="w-full sm:w-80 px-4 py-2 border rounded-lg mb-6 text-sm focus:outline-none focus:ring-2 focus:ring-slate-600"
    />
  );
}
