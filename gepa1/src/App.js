import {useState, useEffect} from 'react';
import {Routes, Route} from 'react-router-dom';
import React from 'react';
import Menu from './components/Menu';
import './css/app.css';
import Home from "./pages/Home"
import Technoadd from "./pages/Technoadd";
import AllTechnos from "./pages/AllTechnos";
import {v4 as uuidv4 } from "uuid";
import { useLocalStorage } from "./hooks/useLocalStorage";


const App = () => {
  const [technos, setTechnos]= useState([ ]);
  const STORAGE_KEY = "technos";
  const [storedTechnos, setStoredTechnos] = useLocalStorage(STORAGE_KEY, []);


  // On first App component mount
  useEffect(() => {
    setTechnos(storedTechnos);
    console.log("App component mounted");
  }, []);

  // On every technos change
  useEffect(() => {
    setStoredTechnos(technos);
    console.log("Technos changed");
  }, [technos]);
  
  

function handleAddtechnos(techno) {
  // console.log('handleaddtechnos', techno);
  setTechnos([...technos,  {...techno, technoid : uuidv4() }] );
  
}
function handleDelete (id ) {
  setTechnos(technos.filter((tech) => tech.technoid !== id));

  
}

  return (
    <> 
    <Menu /> 
    <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/add' element={<Technoadd handleaddtechnos={handleAddtechnos}/>} />
    <Route path='/alltechno' element={< AllTechnos technos={technos} handleDelete={handleDelete} />} />
  </Routes>
    </>
    

  );
};

export default App;