import { useState } from 'react';
import FormularioTemas from './FormularioTemas';
import './GestionTemas.css';
import ListaTemas from './ListaTemas';

const temaDefecto = {id:0,nombre:'',destacar:false};

function GestionTemas() {

    const [tema,setTema] = useState(temaDefecto);
    const [listaTemas,setListaTemas] = useState([]);

    const actualizarTema = (t) => {
        console.log(t);
        setTema(t);
    }

    const guardarTema = () => {
        const nuevaListaTemas = [...listaTemas,tema];
        console.log(nuevaListaTemas);
        setListaTemas(nuevaListaTemas);
        setTema(temaDefecto);
    }

    

    return (
    <div> 
        <h1>Gestion de Temas</h1>
        <div className="row">
            <div className="column">
                <FormularioTemas tema={tema} updateTema={actualizarTema} procesarFormTema={guardarTema} ></FormularioTemas>
            </div>
            <div className="column">
                <ListaTemas lista={listaTemas}></ListaTemas>
            </div>
        </div>
    </div>

        );
}

export default GestionTemas;