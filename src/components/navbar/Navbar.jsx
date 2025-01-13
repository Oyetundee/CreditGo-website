import React, {useState} from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css';
import Frame5 from '../../asset/Frame5.svg';

const Menu = () => (
  <>
  <p><a href="#home">Home</a></p>
  <p><a href="#mission">About us</a></p>
  <p><a href="#offer">Services</a></p>
  <p><a href="#apply">Eligibility</a></p>
  </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className='project__navbar'>
      <div className='project__navbar-links'>
        <div className='project__navbar-links_logo'>
          <img src={Frame5} alt='logo' />
        </div>
        <div className="project__navbar-links_logo-h1">
          <h1>CreditGo</h1>
        </div>
        <div className="project__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="project__navbar-sign">
        <button type='button'>Apply Now</button>
        <p>Contact Us</p>
      </div>
      <div className="project__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color='#000' size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color='#000' size={35} onClick={() => setToggleMenu(true)} />
        }
        {toggleMenu && (
          <div className='project__navbar-menu_container scale-up-center'>
            <div className='project__navbar-menu_container-links'>
              <Menu />
              <div className='project__navbar-menu_container-links-sign'>
                <button type='button'>Apply Now</button>
                <p>Contact Us</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar