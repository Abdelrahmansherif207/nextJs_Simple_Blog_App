import Link from "next/link";

// const categories = [
//     { id: 1, name: "Technology", slug: "technology", count: 24 },
//     { id: 2, name: "Health & Wellness", slug: "health", count: 15 },
//     { id: 3, name: "Travel", slug: "travel", count: 32 },
// ];

export default async function usersPage() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();

    return (
        <div className="max-w-4xl mx-auto p-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">Users</h1>

            <div className="space-y-4">
                {users.map((usr) => (
                    <Link
                        key={usr.id}
                        href={`/users/${usr.id}`}
                        className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-blue-500 hover:shadow-md transition-all duration-200"
                    >
                        <div className="flex items-center space-x-4">
                            <div className="flex-shrink-0 h-12 w-12 rounded-full bg-gray-300 flex items-center justify-center text-gray-600 font-medium">
                                {usr.name.charAt(0).toUpperCase()}
                            </div>
                            <div>
                                <h2 className="text-lg font-semibold text-gray-800 capitalize">
                                    {usr.name}
                                </h2>
                                <p className="text-gray-500 text-sm">
                                    {usr.email}
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center space-x-6">
                            <p className="text-gray-500">{usr.phone}</p>
                            <div className="text-blue-600 font-medium flex items-center">
                                View profile
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
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
