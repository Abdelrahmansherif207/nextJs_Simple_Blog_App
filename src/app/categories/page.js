import Link from "next/link";

const categories = [
    { id: 1, name: "Technology", slug: "technology", count: 24 },
    { id: 2, name: "Health & Wellness", slug: "health", count: 15 },
    { id: 3, name: "Travel", slug: "travel", count: 32 },
];

export default async function CategoriesPage() {
    await new Promise((resolve) => {
        setTimeout(() => {
            resolve("delay");
        }, 1000);
    });

    return (
        <div className="max-w-4xl mx-auto p-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">
                Categories
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categories.map((category) => (
                    <Link
                        key={category.id}
                        href={`/categories/${category.slug}`}
                        className="block border border-gray-200 rounded-lg p-6 hover:border-blue-500 hover:shadow-md transition-all duration-200"
                    >
                        <h2 className="text-xl font-semibold text-gray-800 mb-2 capitalize">
                            {category.name}
                        </h2>
                        <p className="text-gray-500">
                            {category.count}{" "}
                            {category.count === 1 ? "post" : "posts"}
                        </p>
                        <div className="mt-4 text-blue-600 font-medium flex items-center">
                            View posts
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
                    </Link>
                ))}
            </div>
        </div>
    );
}
