import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Home'
import About from './About'

const App = () => {
  return (
    <Router>
      <div className="text-center border-4 border-accent p-6 rounded-lg bg-bg-card shadow-xl">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
