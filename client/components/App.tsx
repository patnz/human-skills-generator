import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Nav from './Nav'
import Home from './Home'
import FridayProject from './FridayProject'
import FridayProject2 from './FridayProject2'
import WhatsOnTop from './WhatsOnTop'
import Clap from './Clap'

const App = () => {
  return (
    <div id="app-container">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/whatsontop" element={<WhatsOnTop />} />
        <Route path="/clap" element={<Clap />} />
        <Route path="/fridayproject" element={<FridayProject2 />} />
      </Routes>
    </div>
  )
}

export default App
