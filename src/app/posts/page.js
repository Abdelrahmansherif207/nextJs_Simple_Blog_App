import Link from "next/link";

export default async function PostsPage() {
    // Fetch all posts
    const postsResponse = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
    );
    const allPosts = await postsResponse.json();

    // Fetch all users
    const usersResponse = await fetch(
        "https://jsonplaceholder.typicode.com/users"
    );
    const allUsers = await usersResponse.json();

    // Combine posts with their authors
    const postsWithAuthors = allPosts.map((post) => {
        const author = allUsers.find((user) => user.id === post.userId);
        return {
            ...post,
            authorName: author?.name || "Unknown Author",
            authorId: author?.id,
        };
    });

    return (
        <div className="max-w-6xl mx-auto px-4 py-8">
            <header className="mb-12 text-center">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">
                    All Blog Posts
                </h1>
                <p className="text-lg text-gray-600">
                    Discover our latest articles and insights
                </p>
            </header>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {postsWithAuthors.map((post) => (
                    <article
                        key={post.id}
                        className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow"
                    >
                        <div className="p-6">
                            <div className="flex justify-between items-center mb-3">
                                <Link
                                    href={`/users/${post.authorId}`}
                                    className="flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
                                >
                                    <div className="w-6 h-6 rounded-full bg-gray-300 flex items-center justify-center text-xs font-bold mr-2">
                                        {post.authorName.charAt(0)}
                                    </div>
                                    {post.authorName}
                                </Link>
                                <span className="text-sm text-gray-500">
                                    {new Date().toLocaleDateString("en-US", {
                                        month: "short",
                                        day: "numeric",
                                        year: "numeric",
                                    })}
                                </span>
                            </div>

                            <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                                {post.title}
                            </h2>

                            <p className="text-gray-600 mb-4 line-clamp-3">
                                {post.body}
                            </p>

                            <div className="flex justify-between items-center">
                                <Link
                                    href={`/posts/${post.id}`}
                                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors text-sm"
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
                                <span className="text-xs text-gray-500">
                                    {Math.ceil(post.body.length / 200)} min read
                                </span>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    );
}
