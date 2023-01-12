const Form = ({ handle, trabajador, correo, workerVal, emailVal }) => {
    return (
        <form onSubmit={handle}>
            <label htmlFor="">Nombre del Colaborador: </label>
            <input type="text" name="nombreCol" id="" placeholder="nombre" onChange={(e) => trabajador(e.target.value)} value={workerVal} />
            <br />
            <label htmlFor="">Correo colaborador: </label>
            <input type="text" name="emailCol" id="" placeholder="correo" onChange={(e) => correo(e.target.value)} value={emailVal} />
            <br />
            {emailVal.includes('@') && emailVal.trim().length > 2 && workerVal.trim().length >= 2 ? 
            <button type="submit">Agregar colaborador</button> : null}
        </form>
    );
}

export default Form;