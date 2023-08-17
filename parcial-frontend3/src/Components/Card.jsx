import React from 'react'
import './Card.css'


const Card = ({album, artist, quality}) => {
  return (
    <div className='Card'>
    <h2>Seleccionaste el album: {album}</h2>
    <h2>Del artista: {artist}</h2>
    <h2>Calidad de descarga: {quality}</h2>
    </div>
    


  
    
  )
}

export default Card