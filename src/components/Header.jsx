import React from 'react'
import logoRhcp from '../assets/logo/icon_rhcp2.png'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='header'>
      {/* <Link to="/">
        <img style={{ width: '50px', height: '50px' }} 
        src={logoRhcp} alt="Logo RHCP" />
      </Link> */}

      <Link to="/">
        <img 
          className="logo-spin" 
          style={{ width: '50px', height: '50px' }} 
          src={logoRhcp} 
          alt="Logo RHCP" 
        />
      </Link>

      <Link to='/' className= 'header__link' >
        <h1>RHCP</h1>
      </Link>

    </div>
  )
}

export default Header