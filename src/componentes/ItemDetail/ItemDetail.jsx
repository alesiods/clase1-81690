import React from 'react'
import "./ItemDetail.css"

export const ItemDetail = ({id, nombre, precio, img}) => {
  return (
    <div className='contenerdorItem'>
        <h2>Nombre: {nombre}</h2>
        <h3>Precio: {precio}</h3>
        <h3>ID: {id}</h3>
        <img src={img} alt={nombre} />
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni libero eligendi, molestiae eum dolorum sint similique ratione consectetur ab consequatur, et qui id, recusandae itaque fuga maxime illo dicta officiis?</p>
        <button>Agregar al Carrito</button>
    </div>
  )
}
