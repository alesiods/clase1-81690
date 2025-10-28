
import React from 'react'
import Boton from './componentes/Boton/Boton'
import "./App.css"
import "bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import TituloPrincipal from './componentes/TituloPrincipal/TituloPrincipal';
import ItemCount from './componentes/ItemCount/ItemCount';
import NavBar from './componentes/NavBar/NavBar';


const App = () => {

  function saludo(){
    console.log("Hola")
  }

  saludo()


  let cantidad = 10

  let colorFondo = {backgroundColor: "green"}


  const celular = {
    marca :  "Samsung",
    precio: 500000
  }




  return (

    <>
      {/* <h1 className='colorFondoPrincipal'>Hola chicos, bienvenidos, en la clase de hoy somos {cantidad}</h1>

      <h2 style={colorFondo}>Hola mundoooooo</h2>

      <h3 style={{color: "blue"}} >Esta es la 2da clase</h3>

      <TituloPrincipal saludo="Esto es una props" producto={celular} />


      <Boton texto="agregar"/>
      <Boton texto="eliminar"/>
      <Boton texto="salir"/> 
      <ItemCount stock={20}/>
      <hr />
      <ItemCount stock={15}/>
      <hr />
      <ItemCount stock={10}/>*/}

      <NavBar/>
      
      
    </>



   
    
    
  )
}

export default App