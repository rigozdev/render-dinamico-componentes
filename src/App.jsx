import Form from "./components/Form"
import List from "./components/List"
import Search from "./components/Search"
import { BaseColaboradores } from "./api/BaseColaboradores"
import { useState } from "react"


const App = () => {

  const [workers, setWorkers] = useState(BaseColaboradores);
  const [nameWorker, setNameWorker] = useState("");
  const [emailWorker, setEmailWorker] = useState("");
  const [search, setSearch] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    

    const newWorker = {
      id: Date.now(),
      nombre: nameWorker,
      correo: emailWorker
    }

    setWorkers([...workers, newWorker]);

    setNameWorker("");
    setEmailWorker("");
  }

  return (
    <>
      <Search onChange={(e) => setSearch(e.target.value)}></Search>
      <hr />
      <Form handle={handleSubmit} trabajador={setNameWorker} correo={setEmailWorker} workerVal={nameWorker} emailVal={emailWorker}></Form>
      <hr />
      <List trabajadores={workers} busqueda={search}></List>
    </>
  )
}

export default App
