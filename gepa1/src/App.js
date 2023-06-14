import {useState} from 'react';
import {Routes, Route} from 'react-router-dom';
import React from 'react';
import Menu from './components/Menu';
import './css/app.css';
import Home from "./pages/Home"
import Technoadd from "./pages/Technoadd";
import AllTechnos from "./pages/AllTechnos";
import {v4 as uuidv4 } from "uuid";

const App = () => {
  const [technos, setTechnos]= useState([ ]);
  

function handleAddtechnos(techno) {
  // console.log('handleaddtechnos', techno);
  setTechnos([...technos,  {...techno, technoid : uuidv4() }] );
  
}

  return (
    <> 
    <Menu /> 
    <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/add' element={<Technoadd handleaddtechnos={handleAddtechnos}/>} />
    <Route path='/alltechno' element={< AllTechnos technos={technos} />} />
  </Routes>
    </>
    

  );
};

export default App;