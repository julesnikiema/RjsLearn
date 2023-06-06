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
      <Home />
      <Technoadd />
      < AllTechnos  />
    </>
  );
};

export default App;