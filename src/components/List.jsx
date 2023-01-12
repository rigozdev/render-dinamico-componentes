const List = ({ trabajadores, busqueda }) => {

    return (
        <table className="table table-striped">
            <thead>
                <tr>
                    <td scope="col"><b>Nombre</b> </td>
                    <td scope="col"><b>Correo</b></td>
                </tr>
            </thead>
            <tbody>
                {trabajadores.filter((elem)=>{
                    return busqueda.toLowerCase() === '' ? elem : elem.nombre.toLowerCase().includes(busqueda)||busqueda.toLowerCase() === '' ? elem : elem.correo.toLowerCase().includes(busqueda);
                }).map((elem) => {
                    return <tr key={elem.id}><td>{elem.nombre}</td><td>{elem.correo}</td></tr>
                })}
            </tbody>
        </table>
    );
}

export default List;