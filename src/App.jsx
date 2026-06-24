import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Navbar from './Components/Navbar'
import './App.css'
import Sections from './Components/sections/Sections'
import Banner from './Components/Banner/Banner'
import Target from './Components/Target/Target'
import BlueSection from './Components/BlueSection/Bluesection'
import Logosection from './Components/Logosection/Logosection'
import Footer from './Components/footer/footer'


function App() {
  
  return (
    <div className="app">
   <div className="sticky">
     <div className="nav">
      <Navbar />
    </div>
    <div className="sections">
      <Sections/>
    </div>
   </div>
    <div className="banner">
      <Banner/>
    </div>
    <div className="target">
      <Target/>
    </div>
     <div className="bluesec">
      <BlueSection/>
     </div>
     <div className="Logosection">
<Logosection/>
     </div>
     <dive className="footer">
      <Footer/>
     </dive>
    </div>
  )
}

export default App
