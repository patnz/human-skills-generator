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
        <Route path="/whatsontop" element={<WhatsOnTop />} />
        <Route path="/clap" element={<Clap />} />
        <Route path="/fridayproject" element={<FridayProject />} />
      </Routes>
      <Home />
    </>
  )
}

export default App
