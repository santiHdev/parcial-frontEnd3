import { useState } from 'react'
import Card from './Card'
import './Form.css'

const Form = () => {
    const [showCard, setShowCard] = useState(false)
    const [errorMessage, setErrorMessage] = useState(false)

    const [album, setAlbum] = useState("");
    const [artist, setArtist] = useState("");
    const [quality, setQuality] = useState("");

    const [selectedAlbum, setSelectedAlbum] = useState("");
    const [selectedArtist, setSelectedArtist] = useState("");
    const [selectedQuality, setSelectedQuality] = useState("");

    

    
    const onChangeArtist = (e) => {
        setArtist(e.target.value)
        console.log(e.target.value)
    }
    const onChangeAlbum = (e) => {
        setAlbum(e.target.value)
        console.log(e.target.value)
    }

    const onChangeQuality = (e) => {
        setQuality(e.target.value)
        console.log(e.target.value)
    }

    const onSubmitForm = (e) => {
        e.preventDefault()

        setSelectedQuality(quality)

        setSelectedArtist(artist.trim())
        setSelectedAlbum(album.trim())

       
        console.log(selectedAlbum)
        console.log(selectedArtist)
        
        if (artist.length> 2 && album.length > 5){
            setShowCard(true)
            setErrorMessage(false)
           
        } else {
            setErrorMessage(true)
            setShowCard(false)
            
            
        }

        console.log(album + " " + artist);
    }

    

  return (
    
    <>
    <form onSubmit={onSubmitForm}>
            <input type="text" placeholder='Ingrese el artista' value={artist} onChange={onChangeArtist}/>
            <input type="text" placeholder='Ingrese el album' value={album} onChange={onChangeAlbum}/>
            <label htmlFor="quality">Seleccione la calidad deseada</label>
            <select name="quality" id="" value={quality} onChange={onChangeQuality}>
                <option value="128 kbps">128 kbps</option>
                <option value="256 kbps">256 kbps</option>
                <option value="320 kbps">320 kbps</option>
                
            </select>
            <button type='submit'>Enviar</button>
    </form>
    {showCard && <Card album={selectedAlbum} artist={selectedArtist} quality={selectedQuality}/>}
    {errorMessage && <h3 style={{color: '#e63946'}}>Por favor chequea que la informacion es correcta!</h3>}

    
    </>
        
    
  )
}

export default Form