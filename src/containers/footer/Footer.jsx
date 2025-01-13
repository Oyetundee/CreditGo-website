import React from 'react'
import './footer.css';
import vector4 from '../../asset/Vector4.svg'
import frame5 from '../../asset/Frame5.svg'

const Footer = () => {
  return (
    <div className='project__footer'>
      <div className="project__footer-image">
        <img src={vector4} className='vector' alt="vector" />
      </div>
      <div class="footer-section">
        <div className="footer_section-logo">
          <div class="footer-logo">
            <img src={frame5} alt="CreditGo Logo" class="logo" />
          </div>
          <div className="project__footer-links_logo-h1">
            <h1>CreditGo</h1>
          </div>
        </div>
        <div className="footer-section2">
          <div className="footer-section-content">
            <div className="footer-p">
              <p>Empowering Nigerian entrepreneurs and small businesses with accessible financing solutions.</p>
            </div>
            <div className="footer-p2">
              <p>Address: 123 Main Street, Lagos, Nigeria</p>
              <p>+2341234567890</p>
            </div>
          </div>
          <div class="footer-links">
            <div class="resources">
              <h4>Resources</h4>
              <p>Home</p>
              <p>About us</p>
              <p>Services</p>
              <p>Eligibility</p>

            </div>
            <div class="socials">
              <h4>Socials</h4>
              <p>Instagram</p>
              <p>Facebook</p>
              <p>LinkdIn</p>
              <p>X</p>

            </div>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <div className="footer-bottom1">
          <div className="footer-bottom-1">
            <p>Privacy Policy</p>
          </div>
          <div className="footer-bottom-2">
            <p>Terms of Service</p>
          </div>

        </div>
        <div className="footer-bottom2">
          <p>© 2024 CreditGo. All rights reserved.</p>
        </div>

      </div>
    </div>
  )
}

export default Footer