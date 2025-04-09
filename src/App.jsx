import React from 'react'
import Header from './components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Albuns from "./pages/albuns"
import Album from "./pages/album"
import Clipes from "./pages/clipes"
import Clipe from "./pages/clipe"

const App = () => {
  return (
  <BrowserRouter>
    <Header/>

    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/albuns' element={<Albuns/>}/>
      <Route path='/album/:id' element={<Album/>}/>
      <Route path='/clipes' element={<Clipes/>}/>
      <Route path='/clipe/:id' element={<Clipe/>}/>
    </Routes>
    {/* <iframe width="853" 
height="480" 
src="https://www.youtube.com/embed/C4bbUPYMhP8" 
title="Red Hot Chili Peppers - Behind The Sun" 
frameborder="0" 
allow="accelerometer; 
autoplay; clipboard-write; 
encrypted-media; gyroscope; 
picture-in-picture; web-share" 
referrerpolicy="strict-origin-when-cross-origin" 
allowfullscreen></iframe> */}


  </BrowserRouter>
  );
};

export default App