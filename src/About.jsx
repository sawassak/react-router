import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <>
      <div className="max-w-2xl mx-auto mt-8 border-4 border-blue-400 p-8 rounded-2xl bg-white shadow-2xl text-center">
        <h2 className="text-3xl font-extrabold text-blue-600 mb-4">About Me</h2>

        <div className="space-y-3 text-gray-700">
          <p className="text-xl"><span className="font-semibold text-blue-500">Name:</span> Sawassak Settheechaivara</p>
          <p className="text-xl"><span className="font-semibold text-blue-500">Nickname:</span> Nos</p>
          <p className="text-xl"><span className="font-semibold text-blue-500">Studying at:</span> Nakhon Pathom Vocational College</p>
          <p className="text-xl"><span className="font-semibold text-blue-500">Faculty:</span> Information Technology</p>
          <p className="text-xl"><span className="font-semibold text-blue-500">Free time:</span> Play games 🎮</p>
        </div>

        <div className="mt-8">
          <Link
            to="/"
            className="inline-block bg-gradient from-blue-500 to-indigo-500 text-white text-lg px-6 py-2 rounded-full shadow-md hover:scale-105 hover:shadow-lg transition-transform duration-300"
          >
            ⬅ กลับหน้าแรก
          </Link>
        </div>
      </div>
    </>
  )
}

export default About
