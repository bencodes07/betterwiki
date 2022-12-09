import React from 'react';
import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Content from './pages/Content';
import About from './pages/About';
import Help from './pages/Help';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/pages' element={<Content />} />
        <Route path='/about' element={<About />} />
        <Route path='/help' element={<Help />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
