import Link from "next/link";
import { notFound } from "next/navigation";

const posts = {
    technology: [
        {
            id: "1",
            title: "Tech Post 1",
            description: "Intro to tech",
            content: "Full content of Tech Post 1.",
            date: "2025-05-15",
            readTime: "3 min",
            author: "Jane Smith",
        },
        {
            id: "4",
            title: "Latest AI Trends in 2025",
            description: "Explore the latest breakthroughs in AI",
            content: "Full content of AI trends in 2025.",
            date: "2025-04-20",
            readTime: "5 min",
            author: "John Doe",
        },
        {
            id: "5",
            title: "Building a PC: Step-by-Step Guide",
            description: "Learn how to assemble your own computer",
            content: "Full content of PC building guide.",
            date: "2025-03-10",
            readTime: "8 min",
            author: "Alex Johnson",
        },
    ],
    health: [
        {
            id: "2",
            title: "Health Post 1",
            description: "Healthy living",
            content: "Full content of Health Post 1.",
            date: "2025-05-10",
            readTime: "4 min",
            author: "Sarah Williams",
        },
        {
            id: "6",
            title: "10 Tips for a Healthier Lifestyle",
            description: "Daily habits for long-term wellness",
            content: "Full content of 10 healthy tips.",
            date: "2025-04-15",
            readTime: "6 min",
            author: "Dr. Michael Chen",
        },
        {
            id: "7",
            title: "The Science of Sleep",
            description: "How quality sleep affects your health",
            content: "Full content of sleep science.",
            date: "2025-02-28",
            readTime: "7 min",
            author: "Dr. Emily Parker",
        },
    ],
    travel: [
        {
            id: "3",
            title: "Travel Post 1",
            description: "Travel tips",
            content: "Full content of Travel Post 1.",
            date: "2025-06-01",
            readTime: "4 min",
            author: "Mark Taylor",
        },
        {
            id: "8",
            title: "Top 5 Hidden Gems in Europe",
            description: "Underrated destinations to visit",
            content: "Full content about hidden European gems.",
            date: "2025-05-05",
            readTime: "5 min",
            author: "Lisa Rodriguez",
        },
        {
            id: "9",
            title: "Solo Travel Safety Tips",
            description: "How to travel solo and stay safe",
            content: "Full content on safe solo travel.",
            date: "2025-04-02",
            readTime: "6 min",
            author: "David Kim",
        },
    ],
};

const allPosts = Object.values(posts).flat();

export default async function PostDetail({ params }) {
    const pid = await params.id;
    const post = allPosts.find((p) => p.id === pid);

    await new Promise((resolve) => {
        setTimeout(() => {
            resolve("delay");
        }, 1000);
    });

    if (!post) {
        notFound();
    }

    return (
        <div className="max-w-3xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
            <article className="prose prose-lg max-w-none">
                <header className="mb-12">
                    <div className="flex items-center text-sm text-gray-500 mb-4">
                        <span className="mr-4">
                            {new Date(post.date).toLocaleDateString("en-US", {
                                month: "long",
                                day: "numeric",
                                year: "numeric",
                            })}
                        </span>
                        <span>•</span>
                        <span className="ml-4">{post.readTime} read</span>
                    </div>
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">
                        {post.title}
                    </h1>
                    <p className="text-xl text-gray-600 mb-6">
                        {post.description}
                    </p>
                    <div className="flex items-center">
                        <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center mr-3">
                            <span className="text-gray-600 font-medium">
                                {post.author
                                    .split(" ")
                                    .map((name) => name[0])
                                    .join("")}
                            </span>
                        </div>
                        <div>
                            <p className="text-sm font-medium text-gray-900">
                                {post.author}
                            </p>
                            <p className="text-sm text-gray-500">Author</p>
                        </div>
                    </div>
                </header>

                <div className="border-t border-b border-gray-200 py-8 mb-8">
                    <div className="prose prose-gray max-w-none">
                        {post.content.split("\n").map((paragraph, i) => (
                            <p key={i} className="mb-6 last:mb-0">
                                {paragraph}
                            </p>
                        ))}
                    </div>
                </div>

                <footer className="mt-12">
                    <Link
                        href="/posts"
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
                        Back to all posts
                    </Link>
                </footer>
            </article>
        </div>
    );
}
