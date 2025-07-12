import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Navigation from './components/Navigation';
import About from './components/About';
import Travel from './components/Travel';
import Photography from './components/Photography';
import Baseball from './components/Baseball';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/travel" element={<Travel />} />
          <Route path="/photography" element={<Photography />} />
          <Route path="/baseball" element={<Baseball />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  )
}

export default App
