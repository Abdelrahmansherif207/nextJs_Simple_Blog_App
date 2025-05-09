import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-between p-8 bg-white">
            <main className="max-w-4xl w-full flex-1 flex flex-col items-center justify-center gap-8 py-16 text-center">
                <Image
                    src="/next.svg"
                    alt="Logo"
                    width={200}
                    height={40}
                    className="dark:invert"
                />

                <h2 className="text-4xl font-bold text-black">
                    Welcome to Simple Blog
                </h2>

                <p className="text-lg text-gray-600 max-w-2xl">
                    A clean, simple blogging platform built with Next.js and
                    Tailwind CSS.
                </p>

                <div className="flex gap-4 mt-8">
                    <Link
                        href="/posts"
                        className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
                    >
                        Browse Posts
                    </Link>
                    <Link
                        href="/categories"
                        className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                        View Categories
                    </Link>
                </div>
            </main>
        </div>
    );
}
