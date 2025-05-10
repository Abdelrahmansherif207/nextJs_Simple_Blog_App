import Link from "next/link";

export default async function UserProfile({ params }) {
    const userId = await params.id;

    // Fetch user data
    const userResponse = await fetch(
        `https://jsonplaceholder.typicode.com/users/${userId}`
    );
    const user = await userResponse.json();

    // Fetch user posts
    const postsResponse = await fetch(
        `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
    );
    const posts = await postsResponse.json();

    if (!user || !posts) {
        return (
            <div className="max-w-4xl mx-auto p-6 text-center">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">404</h1>
                <p className="text-xl text-gray-600 mb-6">User not found</p>
                <Link
                    href="/users"
                    className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                    Browse All Users
                </Link>
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto p-6">
            {/* User Profile Section */}
            <header className="mb-8 p-6 bg-gray-50 rounded-lg">
                <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0 h-20 w-20 rounded-full bg-gray-300 flex items-center justify-center text-3xl font-medium text-gray-600">
                        {user.name.charAt(0).toUpperCase()}
                    </div>
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900 mb-2 capitalize">
                            {user.name}
                        </h1>
                        <div className="space-y-1 text-gray-600">
                            <p className="flex items-center">
                                <svg
                                    className="w-5 h-5 mr-2"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                    />
                                </svg>
                                {user.email}
                            </p>
                            <p className="flex items-center">
                                <svg
                                    className="w-5 h-5 mr-2"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                    />
                                </svg>
                                {user.phone}
                            </p>
                            <p className="flex items-center">
                                <svg
                                    className="w-5 h-5 mr-2"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                    />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                </svg>
                                {user.address.city}
                            </p>
                        </div>
                    </div>
                </div>
            </header>

            {/* User Posts Section */}
            <section>
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold text-gray-900">
                        Posts by {user.name.split(" ")[0]}
                    </h2>
                    <p className="text-gray-500">
                        {posts.length} {posts.length === 1 ? "post" : "posts"}
                    </p>
                </div>

                <div className="space-y-6">
                    {posts.map((post) => (
                        <article
                            key={post.id}
                            className="border border-gray-200 rounded-lg p-6 hover:border-blue-500 transition-colors"
                        >
                            <Link href={`/posts/${post.id}`} className="group">
                                <h3 className="text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition-colors mb-3">
                                    {post.title}
                                </h3>
                                <p className="text-gray-600 mb-4">
                                    {post.body}
                                </p>
                                <div className="text-sm text-gray-500 flex items-center">
                                    <svg
                                        className="w-4 h-4 mr-1"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                        />
                                    </svg>
                                    Read post
                                </div>
                            </Link>
                        </article>
                    ))}
                </div>
            </section>

            <div className="mt-12">
                <Link
                    href="/users"
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
                    Back to all users
                </Link>
            </div>
        </div>
    );
}
