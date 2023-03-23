import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Nav from './Css/Nav'
import Home from './Home'
import WhatsOnTop from './WhatsOnTop'

const App = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/whatsontop" element={<WhatsOnTop />} />
      </Routes>
      <Home />
    </>
  )
}

export default App
