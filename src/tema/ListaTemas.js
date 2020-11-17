import './GestionTemas.css';

function ListaTemas({lista}) {

    const listaHtml = lista.map( (e,i) => <tr key={1+i}><td>{e.nombre}</td><td>{e.destacar? 'X' : ' '}</td></tr>);

    return (
    <div className="contenedorTabla"> 
        <h1>Lista Temas</h1>
        <table className="tabla">
            <thead>
            <tr>
                <th>Nombre</th>    
                <th>Destacar</th>
            </tr>
            </thead>
            <tbody>
                {listaHtml}
            </tbody>
        </table>
    </div>

        );
}

export default ListaTemas;