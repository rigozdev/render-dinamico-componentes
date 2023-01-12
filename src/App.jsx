

const App = () => {
  

  return (
    <>
      <form action="">
        <label htmlFor="">Búsqueda:</label>
        <input type="text" />
      </form>
      <hr />
      <form>
        <label htmlFor="">Nombre del Colaborador: </label>
        <input type="text" name="" id="" placeholder="nombre"/>
        <br />
        <label htmlFor="">Correo colaborador: </label>
        <input type="text" name="" id="" placeholder="correo"/>
        <br />
        <button type="submit">Agregar colaborador</button>
      </form>
      <hr />
      <table>
        <thead>
          <tr>
            <td>Id</td>
            <td>Nombre</td>
            <td>Correo</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>0</td>
            <td>Colaborador 0</td>
            <td>colaborador0@colaborador0.com</td>
          </tr>
        </tbody>
      </table>
    </>
  )
}

export default App
