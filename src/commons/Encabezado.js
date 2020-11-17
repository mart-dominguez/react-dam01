import './Encabezado.css';

function Encabezado({titulo}) {

    const opcionSeleccionada = 'Seleccione una opcion';

    return (
    <div className="titulo">
        <br/>
        {titulo}
    </div>
  );
}

export default Encabezado;
