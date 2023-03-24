import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Nav from './Css/Nav'
import Home from './Home'
import FridayProject from './FridayProject'
import WhatsOnTop from './WhatsOnTop'
import Clap from './Clap'

const App = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/whatsOnTopSnippet" element={<WhatsOnTop />} />
        <Route path="/" element={<Home />} />
        <Route path="/whatsontop" element={<WhatsOnTop />} />
        <Route path="/clap" element={<Clap />} />
        <Route path="/fridayproject" element={<FridayProject />} />
      </Routes>
    </>
  )
}

export default App
