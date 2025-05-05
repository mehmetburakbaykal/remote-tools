import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";
import { FavoritesProvider } from "@/context/FavoritesContext";

export const metadata: Metadata = {
  title: "Remote Tools",
  description: "A directory of tools for remote work",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900 font-sans">
        <FavoritesProvider>
          <header className="bg-slate-600 text-white py-4 shadow">
            <div className="w-full px-4 sm:px-6 lg:px-8 flex items-center gap-6">
              <Link href="/" className="text-xl font-bold">
                Remote<span className="text-slate-200">Tools</span>
              </Link>
              <nav className="space-x-4 text-sm">
                <Link href="/" className="hover:underline">
                  Home
                </Link>
                <Link href="/favorites" className="hover:underline">
                  Favorites
                </Link>
              </nav>
            </div>
          </header>
          <main className="w-full px-4 sm:px-6 lg:px-8 min-h-[80vh]">
            {children}
          </main>
          <footer className="text-center text-sm text-gray-500 py-8">
            © {new Date().getFullYear()} RemoteTools. Built with Next.js.
          </footer>
        </FavoritesProvider>
      </body>
    </html>
  );
}
