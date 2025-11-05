import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-pink-50">
      <div className="bg-pink-300 rounded-2xl shadow-lg p-10 text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Sawassak</h1>
        <Link
          to="/about"
          className="text-xl font-semibold text-purple-800 bg-pink-200 px-4 py-2 rounded-lg hover:bg-pink-400 hover:text-white transition"
        >
          About
        </Link>
      </div>
    </div>
  )
}

export default Home
