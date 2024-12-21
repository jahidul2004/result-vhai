import React from "react";

const NotFound = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="text-center">
                <h1 className="text-9xl font-extrabold text-blue-600">404</h1>
                <p className="text-2xl md:text-3xl font-bold text-gray-800 my-4">
                    Oops! Page not found.
                </p>
                <p className="text-lg text-gray-600 mb-8">
                    The page you're looking for doesn't exist or has been
                    removed.
                </p>
                <a
                    href="/"
                    className="px-6 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700"
                >
                    Go Back to Home
                </a>
            </div>
        </div>
    );
};

export default NotFound;
