import React from 'react'
import Player from '../components/Player'
import { Link, useParams } from 'react-router-dom'
import { songsArray } from '../assets/database/songs'
import { artistArray } from '../assets/database/artists'

const clipe = () => {
   const {id } = useParams();
   
   const {image, name, duration, artist, audio, banner, index} =  songsArray.filter(
         (currentSongObj)=> currentSongObj.id === Number(id))[0];

   const artistObj = artistArray.filter(
    (currentArtistObj)=> currentArtistObj.name === artist)[0];  
    
      const songsArrayFromArtist =  songsArray.filter(
        (currentSongObj)=> currentSongObj.artist === artist);  

    const randomIndex = Math.floor((Math.random() * songsArrayFromArtist.length -1));
    const randomIdFromArtist = songsArrayFromArtist[randomIndex];

    
    const randomIndex2 = Math.floor((Math.random() * songsArrayFromArtist.length -1));
    const randomId2FromArtist = songsArrayFromArtist[randomIndex2];

  return (
    <div className='song'>

      <div className="song__container">
          <div className="song__image-container">
              <video className="clipe__video-contairner"
              src={audio}
                controls                  
              > </video>

              <Player 
              randomIdFromArtist ={randomIdFromArtist} 
              randomId2FromArtist ={randomId2FromArtist}
              />

              <div className="container">
                  <Link to={`/album/${artistObj.id}`}>
                              
                <img 
                  width={75}
                  height={75}
                  src={banner}
                    alt={`Album ${artist}`}
                />
                </Link>
                <div className="info">
                  <p className='song_name'>{name}</p>
                  <p>{artist}</p>
                </div>
              </div>
          </div>
      </div>
    
      <div className="song__bar">
      
      </div>
    </div>
  )

 
}

export default clipe