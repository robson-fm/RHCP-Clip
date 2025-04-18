import React from 'react'
import SongItem from './SongItem'
import MusicList from './MusicList'

const SongList = ({ songsArray }) => {
  return (
    <div className="song-list">
      {songsArray.map((currentSongObj, index) => (
        <SongItem {...currentSongObj} index={index} key={index} />
      ))} 
      
      <h3 className='song-list__see-more'>Músicas do Álbum</h3>
      
      {/* Passo o objeto do artista/álbum atual para o MusicList */}
      {songsArray.length > 0 && (
        <MusicList artist={{
          artist: "Red Hot Chili Peppers", 
          name: songsArray[0].artist // Assumindo que todas as músicas no array são do mesmo álbum
        }} />
      )}
    </div>
  )
}

export default SongList