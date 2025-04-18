import React from 'react'
import ItemList from './Itemlist';
import {artistArray} from "../assets/database/artists";
import {songsArray} from "../assets/database/songs"


const Main = ({type }) => {
  return ( 
    <div className='main'>
      {/* Item de Lista de Albuns */}
      {type === "albuns" || type === undefined ?
           (<ItemList 
           title="Álbuns" 
           items={7} 
           itemsArray={artistArray} 
           path='/Albuns'
           idPath = "/Album"/>) : (<></>)}


      {/* Item de Lista de Clipes*/}
      {type === "clipes" || type === undefined ?(
             <ItemList 
             title="Clipes" 
             items={16} 
             itemsArray={songsArray} 
             path='/Clipes'
             idPath = "/Clipe"/>) : (<></>)}

  </div>
  );
}

export default Main