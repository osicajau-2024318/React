import React from 'react'

export const Saludo = ({nombre,apellido, edad}) => {
  return (
    <div>
        <h2>Hola, soy {nombre}{apellido}</h2>
        <p>Tengo {edad} años</p>

    </div>
  )
}   