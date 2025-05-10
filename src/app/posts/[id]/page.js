import Link from "next/link";
import { notFound } from "next/navigation";

export default async function PostDetail({ params }) {
    const postId = await params.id;

    // Fetch the post data
    const postResponse = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${postId}`
    );
    const post = await postResponse.json();

    // Fetch the author (user) data
    let author = null;
    if (post?.userId) {
        const authorResponse = await fetch(
            `https://jsonplaceholder.typicode.com/users/${post.userId}`
        );
        author = await authorResponse.json();
    }

    if (!post || !author) {
        notFound();
    }

    // Calculate read time (approximately 200 words per minute)
    const wordCount = post.body.split(/\s+/).length;
    const readTime = Math.ceil(wordCount / 200);

    return (
        <div className="max-w-3xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
            <article className="prose prose-lg max-w-none">
                <header className="mb-12">
                    <div className="flex items-center text-sm text-gray-500 mb-4">
                        <span className="mr-4">
                            {new Date().toLocaleDateString("en-US", {
                                month: "long",
                                day: "numeric",
                                year: "numeric",
                            })}
                        </span>
                        <span>•</span>
                        <span className="ml-4">{readTime} min read</span>
                    </div>
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">
                        {post.title}
                    </h1>
                    <div className="flex items-center mt-8">
                        <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center mr-3">
                            <span className="text-gray-600 font-medium">
                                {author.name
                                    .split(" ")
                                    .map((name) => name[0])
                                    .join("")}
                            </span>
                        </div>
                        <div>
                            <p className="text-sm font-medium text-gray-900 capitalize">
                                {author.name}
                            </p>
                            <p className="text-sm text-gray-500">
                                {author.company?.name || "Author"}
                            </p>
                        </div>
                    </div>
                </header>

                <div className="border-t border-b border-gray-200 py-8 mb-8">
                    <div className="prose prose-gray max-w-none">
                        {post.body.split("\n").map((paragraph, i) => (
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
