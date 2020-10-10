import React from 'react';
import shortid from 'shortid';


function App() {
  
  const [tarea,setTarea] = React.useState('')
  const [tareas,setTareas] = React.useState([])
  const [modoEdicion, setModoEdicion] = React.useState(false)
  
  const agregarTarea = e => {
    e.preventDefault()  
    if(!tarea.trim()){
      console.log('Campo vacío')
      return
    }
    
    
    setTareas([
        ...tareas,
        {tarea, id: shortid.generate()}
      ])
    
    setTarea('')
  }

  const elminarTarea = id => {
    //console.log(id)
    const arrayFiltrado = tareas.filter(item => item.id !== id)
    setTareas(arrayFiltrado)

  }

  const editar = item => {
    console.log(item)
  }







  return (
    <div className="container mg-5">
      <h1 className="text-center">Tare-o-matic 3000</h1>
      <hr/>
      <div className="row">
        <div className="col-8">
          <h4 className="text-center">Lista de Tareas</h4>
          <ul className="list-group">
            {
              tareas.map(item => (
                <li key={item.id} className="list-group-item">
                  <span className="lead">{item.nombreTarea}</span>
                  <button 
                  className="btn btn-danger btn sm float-right mx-2"
                  onClick={()=> elminarTarea(item.id)}
                  
                  >
                    Elimiar
                  </button>
                  
                  <button 
                  className="btn btn-warning btn sm float-right"
                  onClick={()=>editar(item.id)}
                  >
                    Editar
                  </button>

                </li>
                  ))
              }
          </ul>
        </div>
        <div className="col-4">
          <h4 className="text-center">Añadir tarea</h4>
          <form onSubmit={ agregarTarea }>
            <input 
              type="text" 
              className="form-control mb-2" 
              placeholder="Ingrese tarea"
              onChange={e => setTarea(e.target.value)}
              value={tarea}
            />
            <button className="btn btn-dark btn-block float-right" type="submit">Agregar</button>

          </form>
        </div>
      </div>




    </div>
  );
}

export default App;
