import Link from "next/link";

const posts = {
    technology: [
        {
            id: "1",
            title: "Tech Post 1",
            description: "Intro to tech",
            date: "2025-05-15",
            readTime: "3 min",
        },
        {
            id: "4",
            title: "Latest AI Trends in 2025",
            description: "Explore the latest breakthroughs in AI",
            date: "2025-04-20",
            readTime: "5 min",
        },
        {
            id: "5",
            title: "Building a PC: Step-by-Step Guide",
            description: "Learn how to assemble your own computer",
            date: "2025-03-10",
            readTime: "8 min",
        },
    ],
    health: [
        {
            id: "2",
            title: "Health Post 1",
            description: "Healthy living",
            date: "2025-05-10",
            readTime: "4 min",
        },
        {
            id: "6",
            title: "10 Tips for a Healthier Lifestyle",
            description: "Daily habits for long-term wellness",
            date: "2025-04-15",
            readTime: "6 min",
        },
        {
            id: "7",
            title: "The Science of Sleep",
            description: "How quality sleep affects your health",
            date: "2025-02-28",
            readTime: "7 min",
        },
    ],
    travel: [
        {
            id: "3",
            title: "Travel Post 1",
            description: "Travel tips",
            date: "2025-06-01",
            readTime: "4 min",
        },
        {
            id: "8",
            title: "Top 5 Hidden Gems in Europe",
            description: "Underrated destinations to visit",
            date: "2025-05-05",
            readTime: "5 min",
        },
        {
            id: "9",
            title: "Solo Travel Safety Tips",
            description: "How to travel solo and stay safe",
            date: "2025-04-02",
            readTime: "6 min",
        },
    ],
};

const allPosts = Object.values(posts).flat();

export default async function PostsPage() {
    await new Promise((resolve) => {
        setTimeout(() => {
            resolve("delay");
        }, 3000);
    });

    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
            <header className="mb-12 text-center">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">
                    All Blog Posts
                </h1>
                <p className="text-lg text-gray-600">
                    Discover our latest articles and insights
                </p>
            </header>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {allPosts.map((post) => (
                    <article
                        key={post.id}
                        className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow"
                    >
                        <div className="p-6">
                            <div className="flex justify-between items-center mb-2">
                                <span className="text-sm font-medium text-blue-600">
                                    {post.readTime}
                                </span>
                                <span className="text-sm text-gray-500">
                                    {new Date(post.date).toLocaleDateString(
                                        "en-US",
                                        {
                                            month: "short",
                                            day: "numeric",
                                            year: "numeric",
                                        }
                                    )}
                                </span>
                            </div>

                            <h2 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                                {post.title}
                            </h2>

                            <p className="text-gray-600 mb-4 line-clamp-3">
                                {post.description}
                            </p>

                            <Link
                                href={`/posts/${post.id}`}
                                className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors"
                            >
                                Read more
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4 ml-1"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 5l7 7-7 7"
                                    />
                                </svg>
                            </Link>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    );
}
