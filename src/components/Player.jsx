import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBackwardStep, faForwardStep } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Player = ( randomIdFromArtist, randomId2FromArtist ) => {
  return (
    <div className='player'>
        <div className="player__controllers">
            {/* <Link to={`/clipe/${randomIdFromArtist}`}>
             <FontAwesomeIcon className='player__icon' icon={faBackwardStep} />
          </Link>
          <Link to={`/clipe/${randomId2FromArtist}`}>  
            <FontAwesomeIcon className='player__icon' icon={faForwardStep} />
         </Link> */}
        </div>
    </div>
  )
}

export default Player