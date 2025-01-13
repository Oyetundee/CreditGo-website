import React from 'react'
import './cta.css';
import frame16 from '../../asset/Frame16.svg'

const Cta = () => {
  return (
    <div className='project__cta'>
      <div className="project__cta-section">
        <img className='frame16' src={frame16} alt="frame16" />
      </div>
    </div>
  )
}

export default Cta