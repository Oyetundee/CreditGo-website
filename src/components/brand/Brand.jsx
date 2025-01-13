import React from 'react'
import './brand.css';

const Brand = () => {
  return (
    <div className='project__brand'>
      <button class="about-us-button">
        <span class="dot">•</span> About Us <span class="dot">•</span>
      </button>
      <div className="project__brand-content">
        <div className="project__brand-content-h1">
          <h1>Our Mission</h1>
        </div>
        <div className="project__brand-content-p">
          <p>CreditGo Empowerment is a non-profit Microfinance institution dedicated to empowering individuals and small businesses in Nigeria. We aim to provide accessible and affordable financial services to underserved communities, promoting economic growth and social development.</p>
          <button className='get-started-btn'>Get Started</button>
        </div>
      </div>
    </div>
  )
}

export default Brand