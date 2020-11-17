function FormularioTemas({tema,updateTema,procesarFormTema}) {

    const handleChange = (evento) => {
           const nombre = evento.target.id;
           const val= evento.target.type==='checkbox'? evento.target.checked 
                                                     : evento.target.value;
           const temaNuevo ={...tema, [nombre]: val};
           console.log('Actualizar ',temaNuevo);
           updateTema(temaNuevo);
    }


    return (
    <div> 
        <h1>Gestion de Temas</h1>
        <form>
            <p>
                <label htmlFor="nombre"> Nombre: </label>
                <input type="text" id="nombre" value={tema.nombre} 
                                    onChange={handleChange}></input>
            </p>
            <p>
                <label htmlFor="destacar">Destacar: </label>
                <input type="checkbox" id="destacar" 
                        checked={tema.destacar}
                        onChange={handleChange}></input>
            </p>
            <button type="button" onClick={procesarFormTema} >Guardar</button>
        </form>
    </div>

        );
}

export default FormularioTemas;