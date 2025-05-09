import Link from "next/link";

const posts = {
    technology: [
        {
            id: "1",
            title: "Tech Post 1",
            excerpt: "Exploring modern technology trends",
            date: "2025-05-15",
        },
        {
            id: "4",
            title: "Latest AI Trends in 2025",
            excerpt: "Discover breakthroughs in artificial intelligence",
            date: "2025-04-20",
        },
        {
            id: "5",
            title: "Building a PC: Step-by-Step Guide",
            excerpt: "Complete tutorial for assembling your own computer",
            date: "2025-03-10",
        },
    ],
    health: [
        {
            id: "2",
            title: "Health Post 1",
            excerpt: "Essential wellness tips for daily life",
            date: "2025-05-10",
        },
        {
            id: "6",
            title: "10 Tips for a Healthier Lifestyle",
            excerpt: "Simple changes for significant health improvements",
            date: "2025-04-15",
        },
        {
            id: "7",
            title: "The Science of Sleep",
            excerpt: "Understanding the importance of quality rest",
            date: "2025-02-28",
        },
    ],
    travel: [
        {
            id: "3",
            title: "Travel Post 1",
            excerpt: "Adventures from around the globe",
            date: "2025-06-01",
        },
        {
            id: "8",
            title: "Top 5 Hidden Gems in Europe",
            excerpt: "Underrated destinations worth visiting",
            date: "2025-05-05",
        },
        {
            id: "9",
            title: "Solo Travel Safety Tips",
            excerpt: "Essential advice for independent explorers",
            date: "2025-04-02",
        },
    ],
};

export default async function CategoryPosts({ params }) {
    const { category } = await params;

    await new Promise((resolve) => {
        setTimeout(() => {
            resolve("delay");
        }, 1000);
    });

    const formatCategoryName = (cat) => {
        return cat.charAt(0).toUpperCase() + cat.slice(1);
    };

    const data = posts[category];

    if (!data) {
        return (
            <div className="max-w-4xl mx-auto p-6 text-center">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">404</h1>
                <p className="text-xl text-gray-600 mb-6">
                    Category "{category}" not found
                </p>
                <Link
                    href="/categories"
                    className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                    Browse All Categories
                </Link>
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto p-6">
            <header className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                    {formatCategoryName(category)} Posts
                </h1>
                <p className="text-gray-500">
                    {data.length} {data.length === 1 ? "article" : "articles"}{" "}
                    available
                </p>
            </header>

            <div className="space-y-6">
                {data.map((post) => (
                    <article
                        key={post.id}
                        className="border-b border-gray-200 pb-6 last:border-0"
                    >
                        <Link href={`/posts/${post.id}`} className="group">
                            <h2 className="text-2xl font-semibold text-gray-800 group-hover:text-blue-600 transition-colors mb-2">
                                {post.title}
                            </h2>
                            {post.excerpt && (
                                <p className="text-gray-600 mb-2">
                                    {post.excerpt}
                                </p>
                            )}
                            {post.date && (
                                <p className="text-sm text-gray-500">
                                    Published:{" "}
                                    {new Date(post.date).toLocaleDateString(
                                        "en-US",
                                        {
                                            year: "numeric",
                                            month: "long",
                                            day: "numeric",
                                        }
                                    )}
                                </p>
                            )}
                        </Link>
                    </article>
                ))}
            </div>

            <div className="mt-12">
                <Link
                    href="/categories"
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-2"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fillRule="evenodd"
                            d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                            clipRule="evenodd"
                        />
                    </svg>
                    Back to all categories
                </Link>
            </div>
        </div>
    );
}
