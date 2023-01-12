const Form = ({ handle, trabajador, correo, workerVal, emailVal }) => {
    return (
        <form onSubmit={handle}>

            <div className="form-container">
                <div className="mb-3">
                    <label className="form-label" htmlFor="">Nombre del Colaborador: </label>
                    <input className="form-control" type="text" name="nombreCol" id="" placeholder="Nombre" onChange={(e) => trabajador(e.target.value)} value={workerVal} />
                </div>
                <br />
                <div className="mb-3">
                    <label className="form-label" htmlFor="">Correo colaborador: </label>
                    <input className="form-control" type="text" name="emailCol" id="" placeholder="Correo" onChange={(e) => correo(e.target.value)} value={emailVal} />
                </div>
                <br />
                {emailVal.includes('@') && emailVal.trim().length > 2 && workerVal.trim().length >= 2 ?
                    <button className="btn btn-primary" type="submit">Agregar colaborador</button> : null}
            </div>


        </form>
    );
}

export default Form;