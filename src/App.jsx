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
  
  </BrowserRouter>
  );
};

export default App