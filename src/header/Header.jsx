import React from 'react'

import './header.css'

import logo from '../../images/logoo.png' 

const Header = () => {
  return (
    <>
          <div className="content">
      <img src={logo} alt="main logo for website" />
      <nav>
        <a href=""> home </a>
        <a href=""> intro </a>
        <a href=""> product </a>
        <a href=""> about </a>
        <a href=""> contact </a>
        <button> Check our Builder </button>
      </nav>
    </div> 

    </>
  )
}

export default Header
