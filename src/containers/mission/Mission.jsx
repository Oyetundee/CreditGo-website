import React from 'react'
import './mission.css';
import Vector4 from '../../asset/Vector4.svg'
import Frame15 from '../../asset/Frame15.svg'
import person5 from '../../asset/person5.svg'

const Mission = () => {
  return (
    <div className="project__mission">
      <div className='project__mission-section'>
        <img className='wave' src={Vector4} alt="vector" />
        <img className='frame' src={Frame15} alt="fraame" />
        <div className="project__mission-content">
          <img src={person5} alt="frrame" className="person" />
        </div>
      </div>
    </div>
  )
}

export default Mission