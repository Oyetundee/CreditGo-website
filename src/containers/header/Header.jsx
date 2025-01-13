import React from 'react'
import './header.css';
import heroBG from '../../asset/heroBG.svg';

const Header = () => {
  return (
    <div className='project__header'>
      <div className="project__header-image">
        <img src={heroBG} alt='herobg' />
      </div>
      <div className="project__header-content">
        <h2>Empowering Lives, Financing Dreams  </h2>
      </div>
      <div className="project__header-content-text">
        <p>Empowering Nigerian entrepreneurs and small businesses with accessible financing solutions.</p>
      </div>
      <div className="project__header-button-container">
        <button className="btn get-started" type='button'>Get Started <span className="arrow">➔</span></button>
        <button className="btn download-app" type='button'>Download App</button>
      </div>
    </div>
  )
}

export default Header