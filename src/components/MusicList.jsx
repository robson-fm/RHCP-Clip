import React from 'react'
import { ListSongsArray } from '../assets/database/listSongs'

const MusicList = ({ artist }) => {
  // Filtrar as músicas pelo artista/álbum correspondente
  const filteredSongs = ListSongsArray.filter(song => 
    song.artist === artist.artist && song.album === artist.name
  )

  return (
    <div className="music-list">
      {filteredSongs.map((song, index) => (
        <div key={index} className="song-item__album">
          <p className='song-item__name song-list_music'>{song.musica}</p>
        </div>
      ))}
    </div>
  )
}

export default MusicList