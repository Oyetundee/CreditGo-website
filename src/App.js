import React from 'react'
import { Footer, Header, Apply, Offer, Mission } from './containers';
import { Cta, Brand, Navbar } from './components';
import './App.css';
const App = () => {
  return (
    <div className='App'>
      <div className='white'>
        <Navbar />
        <Header />
      </div>
      <Brand />
      <Mission />
      <Offer />
      <Cta />
      <Apply />
      <Footer />
        
    </div>
  )
}

export default App
