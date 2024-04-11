import { useState, useEffect } from 'react';

import Homepage from './pages/Homepage'
import Coinpage from './pages/Coinpage'
import Cryptdetailpage from './pages/Cryptdetailpage';
import Exchangedetailpage from './pages/Exchangedetailpage';
import Exchangpage from './pages/Exchangpage';

import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  


  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/cryptocurrencies" element={<Coinpage  />} />
        <Route path="/Cryptocurrencies/details" element={<Cryptdetailpage />} />
        <Route path="/exchanges" element={<Exchangpage />} />
        <Route path="/exchanges/details" element={<Exchangedetailpage />} />
      </Routes>
    </BrowserRouter>

    
    
   
      
    </>
  )
}

export default App
