import { useState } from 'react';
import './Menu.css';

function Menu({doElegirMenu}) {

    const [idBtnSeleccionado,setIdBtnSeleccionado] = useState('');
    const [opcionSeleccionada,setOpcionSeleccionada] = useState('Seleccione una opcion');

    const handleClick = (evnt) => {
        console.log(evnt.target);
        setIdBtnSeleccionado(evnt.target.id);
        setOpcionSeleccionada(evnt.target.innerHTML);
        doElegirMenu(evnt.target.id);
    }

    return (
    <div>
        <div>{opcionSeleccionada}</div>
        <div className="menuPrincipal">
            <button id='btnTemas' disabled={idBtnSeleccionado==='btnTemas'} onClick={handleClick}>Temas</button>
            <button id='btnCursos' disabled={idBtnSeleccionado==='btnCursos'} onClick={handleClick}>Cursos</button>
            <button id='btnBuscar' disabled={idBtnSeleccionado==='btnBuscar'} onClick={handleClick}>Buscar</button>
        </div>
    </div>
  );
}

export default Menu;
