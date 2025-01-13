import React from 'react'
import './apply.css';
import ph from '../../asset/ph.svg'
import person1 from '../../asset/person1.svg'
import person2 from '../../asset/person2.svg'
import person3 from '../../asset/person3.svg'
import person4 from '../../asset/person4.svg'
import vector2 from '../../asset/Vector 2.svg'
import vector3 from '../../asset/Vector 3.svg'



const Apply = () => {
  return (
    <div>
      <div className='project__apply'>
        <button className="eligiblity">
          <span class="dot">•</span> Eligiblity <span class="dot">•</span>
        </button>
      </div>
      <div className="project__apply-content">
        <div className="project__apply-content-h1">
          <h1>Who can Apply</h1>
          <div className="project__apply-button">
            <button className="btn get-started" type='button'>Get Started <span className="arrow">➔</span></button>
          </div>
        </div>
      </div>
      <div className="project__apply-cards-container">
        <div className="project__apply-cards">
          <div className="project__apply-card_content">
            <div className="project__apply-icon">
              <img src={ph} alt="ph" />
            </div>
            <h3>Small business owners</h3>
            <button className='button1'>Apply Now</button>
          </div>
          <div className="project__apply_card-image">
            <div className="boxe-container">
              <div className="gray-box"></div>
              <div className="black-box"></div>
              <img src={person4} className='person4' alt="person4" />
            </div>
          </div>
        </div>

        <div className="project__apply-cards">
          <div className="project__apply-card_content">
            <div className="project__apply-icon">
              <img src={ph} alt="ph" />
            </div>
            <h3>Low-income individuals</h3>
            <p>Providing access to capital for low-income individuals seeking funds.</p>
            <button>Apply Now</button>
          </div>
          <div className="project__apply_card-image">
            <div className="boxe-container">
              <div className="gray-box"></div>
              <div className="black-box"></div>
              <img src={person1} className='person1' alt="person1" />
            </div>
          </div>
        </div>

        <div className="project__apply-cards">
          <div className="project__apply-card_content">
            <div className="project__apply-icon">
              <img src={ph} alt="ph" />
            </div>
            <h3>Women Entrepreneurs</h3>
            <p>Providing access to capital for Women Entrepreneurs.</p>
            <button>Apply Now</button>
          </div>
          <div className="project__apply_card-image">
            <div className="boxe-container">
              <div className="gray-box"></div>
              <div className="black-box"></div>
              <img src={person2} className='person2' alt="person2" />
            </div>
          </div>
        </div>

        <div className="project__apply-cards">
          <div className="project__apply-card_content">
            <div className="project__apply-icon">
              <img src={ph} alt="ph" />
            </div>
            <h3>Youth</h3>
            <p>Providing access to capital for youth seeking to start a business.</p>
            <button>Apply Now</button>
          </div>
          <div className="project__apply_card-image">
            <div className="boxe-container">
              <div className="gray-box"></div>
              <div className="black-box"></div>
              <img src={person3} className='person3' alt="person3" />
            </div>

          </div>
        </div>
      </div>
      <div className='project__section'>
      <div className="project__apply-section">
        <img className='vector2' src={vector2} alt="frame16" />
        <img className='vector3' src={vector3} alt="frame16" />
      </div>
    </div>
    </div>

  )
}

export default Apply