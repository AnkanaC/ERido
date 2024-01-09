import './App.css';
import './style.css'
import Services from './components/Services';
import Contacts from './components/Contacts';
import Info from './components/Info';
import About from './components/About';
import Info_two from './components/Info_two';
import Header from './components/Header';

import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";


import Body from './components/Body';
import { Link } from 'react-router-dom';
import Home from './components/Home';

function App() {


  return (

    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/services' element={<Services />} />
          <Route path='/contacts' element={<Contacts />} />
        </Routes>
      </BrowserRouter>
    </>

  );
}

export default App


