import {Routes, Route} from 'react-router-dom';
import React from 'react';
import Menu from './components/Menu';
import './css/app.css';
import Home from "./pages/Home"
import Technoadd from "./pages/Technoadd";
import AllTechnos from "./pages/AllTechnos";

const App = () => {
  return (
    <> 
    <Menu />
    <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/add' element={<Technoadd />} />
    <Route path='/alltechno' element={< AllTechnos  />} />
  </Routes>
    </>
    

  );
};

export default App;