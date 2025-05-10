// app/layout.js
import Link from "next/link";
import "./globals.css";

export const metadata = {
    title: "Simple Blog",
    description: "A basic blog in JS",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className="bg-white text-gray-900 min-h-screen flex flex-col">
                <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
                    <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                        <nav className="space-x-4">
                            <Link
                                href="/"
                                className="text-black hover:text-gray-600 font-medium"
                            >
                                Home
                            </Link>
                            <Link
                                href="/users"
                                className="text-black hover:text-gray-600 font-medium"
                            >
                                Users
                            </Link>
                            <Link
                                href="/posts"
                                className="text-black hover:text-gray-600 font-medium"
                            >
                                Posts
                            </Link>
                        </nav>
                    </div>
                </header>

                <main className="flex-grow container mx-auto px-4 py-8">
                    {children}
                </main>

                <footer className="bg-gray-100 border-t border-gray-200 py-6">
                    <div className="container mx-auto px-4 text-center text-gray-600">
                        © 2025 Simple Blog - All rights reserved
                    </div>
                </footer>
            </body>
        </html>
    );
}
