import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 shadow">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold"><Link to="/" className="hover:text-gray-200">MyApp</Link></div>
        <ul className="flex space-x-6">
          <li><Link to="/" className="hover:text-gray-200">Home</Link></li>
          <li><Link to="/users" className="hover:text-gray-200">Users</Link></li>
          <li><Link to="/Register" className="hover:text-gray-200">Register</Link></li>
        </ul>
      </div>
    </nav>
  )
}
