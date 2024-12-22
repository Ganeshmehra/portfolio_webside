import React, { useEffect } from 'react'
import './App.css'
import Navbar from './Component/Navbar'
import Home from './Component/Home'
import Skils from './Component/Skils'
import Projects from './Component/Projects'
import Aos from 'aos'
import "aos/dist/aos.css"
import Contect from './Component/Contect'

function App() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <Navbar/>
      <div>
        <Home />
        <Skils/>
        <Projects/>
        <Contect/>
      </div>
    </>
  )
}

export default App
