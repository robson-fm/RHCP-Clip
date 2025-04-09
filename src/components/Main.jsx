import React from 'react'
import ItemList from './itemlist';
import {artistArray} from "../assets/database/artists";
import {songsArray} from "../assets/database/songs"


const Main = () => {
  return ( 
    <div className='main'>
      {/* Item de Lista de Albuns */}
     <ItemList 
     title="Álbuns" 
     items={7} 
     itemsArray={artistArray} 
     path='/Albuns'
     idPath = "/Album"/> 

      {/* Item de Lista de Clipes*/}
     <ItemList 
     title="Clipes" 
     items={14} 
     itemsArray={songsArray} 
     path='/Clipes'
     idPath = "Clipe"/> 

  </div>
  );
}

export default Main