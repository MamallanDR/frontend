import React from "react"

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-blue-100 to-white min-h-screen">
      {/* Hero Section */}
      <section className="text-center py-20 px-4">
        <h1 className="text-5xl md:text-6xl font-extrabold text-blue-700 drop-shadow-sm">
          Welcome to MyApp
        </h1>
        <p className="mt-6 text-xl text-gray-700 max-w-2xl mx-auto">
          A modern platform to manage users, connect with data, and explore beautiful interfaces built with React and Tailwind CSS.
        </p>
        <button className="mt-8 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold rounded-lg shadow-md transition">
          Get Started
        </button>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-white">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Key Features
        </h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {/* Feature Card 1 */}
          <div className="bg-blue-50 p-6 rounded-lg shadow hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-blue-800 mb-2">Fast API Integration</h3>
            <p className="text-gray-600">Quickly fetch and display user data using Axios and RESTful endpoints.</p>
          </div>

          {/* Feature Card 2 */}
          <div className="bg-blue-50 p-6 rounded-lg shadow hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-blue-800 mb-2">Modern UI</h3>
            <p className="text-gray-600">Beautifully crafted UI with responsive layouts using Tailwind CSS.</p>
          </div>

          {/* Feature Card 3 */}
          <div className="bg-blue-50 p-6 rounded-lg shadow hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-blue-800 mb-2">Routing Made Easy</h3>
            <p className="text-gray-600">Navigate between pages effortlessly with React Router.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-600 text-white text-center py-6 mt-12">
        <p>&copy; 2025 MyApp. All rights reserved.</p>
      </footer>
    </div>
  )
}
