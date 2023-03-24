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
<<<<<<< HEAD
        <Route path="/whatsOnTopSnippet" element={<WhatsOnTop />} />
        <Route path="/" element={<Home />} />
=======
        <Route path="/whatsontop" element={<WhatsOnTop />} />
        <Route path="/clap" element={<Clap />} />
        <Route path="/fridayproject" element={<FridayProject />} />
>>>>>>> 58a9aef1e069c2e9e075d509d1210bebf019ad2f
      </Routes>
    </>
  )
}

export default App
