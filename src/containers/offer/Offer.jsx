import React from 'react'
import './offer.css';
import frame1 from '../../asset/Frame1.svg'
import frame4 from '../../asset/Frame4.svg'
import frame3 from '../../asset/Frame3.svg'
import frame2 from '../../asset/Frame2.svg'
import ph2 from '../../asset/ph2.svg'

const Offer = () => {
  return (
    <div>
      <div className="project__offer">
        <button class="our-services-button">
          <span class="dot">•</span> Our Services <span class="dot">•</span>
        </button>
      </div>
      <div className="project__offer-content">
        <div className="project__offer-content-h1">
          <h1>What we Offer</h1>
          <div className="project__offer-button">
            <button className="btn get-started" type='button'>Get Started <span className="arrow">➔</span></button>
          </div>
        </div>
      </div>
      <div className="project__offer-container">
        <div className="project__offer-cards">
          <div className="project__offer-icon">
            <img src={frame1} alt="icon1" />
          </div>
          <h3>Microloans</h3>
          <p>We offer group loans to facilitate peer support and accountability among borrowers, as well as loans to small and medium enterprises (SMEs) to support their growth and expansion.</p>
        </div>
        <div className="project__offer-cards">
          <div className="project__offer-icon">
            <img src={frame4} alt="icon4" />
          </div>
          <h3>Non-Interest Loans</h3>
          <p>We offer interest-free loans based on a profit-sharing model, catering to individuals who adhere to religious principles that prohibit interest-based transactions.</p>
        </div>
        <div className="project__offer-cards">
          <div className="project__offer-icon">
            <img src={ph2} alt="iconn" />
          </div>
          <h3>Hire Purchase</h3>
          <p>We provide hire purchase options for small businesses to acquire essential equipment and machinery, facilitating their growth and productivity.</p>
        </div>
        <div className="project__offer-cards">
          <div className="project__offer-icon">
            <img src={frame3} alt="icon3" />
          </div>
          <h3>Financial Literacy</h3>
          <p>We offer financial education programs to help our clients make informed financial decisions, manage their finances effectively, and build credit history.</p>
        </div>
        <div className="project__offer-cards">
          <div className="project__offer-icon">
            <img src={frame2} alt="icon2" />
          </div>
          <h3>Savings Products</h3>
          <p>We encourage savings habits through various savings products, including group savings and individual savings accounts.</p>
        </div>
      </div>
    </div>
  )
}

export default Offer