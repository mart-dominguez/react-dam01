import logo from './logo.svg';
import './App.css';
import Menu from "./commons/Menu";
import Home from "./commons/Home";
import Encabezado from './commons/Encabezado';
import { useState } from 'react';
import GestionTemas from './tema/GestionTemas';
import GestionCurso from './curso/GestionCurso';
import BuscarCurso from './curso/BuscarCurso';

function App() {

  const [optMenu,setOptMenu] = useState('Home');

  const elegirMenu = (opt) => {
    console.log('Menu Seleccionado');
    setOptMenu(opt);
  }

  return (
    <div className="App">
      <header className="App-header">
        <Encabezado titulo="App Dam 01"></Encabezado>
        <Menu doElegirMenu={elegirMenu}></Menu>
      </header>
      {optMenu==='Home' && <Home />}
      {optMenu==='btnTemas' && <GestionTemas />}
      {optMenu==='btnCursos' && <GestionCurso />}
      {optMenu==='btnBuscar' && <BuscarCurso />}
      
    </div>
  );
}

export default App;
