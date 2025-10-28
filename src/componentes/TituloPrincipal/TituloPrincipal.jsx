// Pirmer forma

/* const TituloPrincipal = (props) => {




  return (
    <h2>{props.saludo}</h2>
  )
}

export default TituloPrincipal */


//Segunda Forma


/* const TituloPrincipal = (props) => {

    const {saludo} = props


  return (
    <h2>{saludo}</h2>
  )
}

export default TituloPrincipal */


// Tercer forma


const TituloPrincipal = ({saludo, producto}) => {

    console.log(producto)

  return (
    <h2>{saludo}</h2>
  )
}

export default TituloPrincipal