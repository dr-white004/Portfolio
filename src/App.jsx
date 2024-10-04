import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import './App.css'
import NavigationBar from './componenets/navbar'
import HeroSection from './componenets/hero'
import AboutMeSection from './componenets/About'
import ProjectsSection from './componenets/projects'
import Footer from './componenets/footer'

function App() {


  return (
    <>
      <NavigationBar />
      <HeroSection />
      <AboutMeSection />
      <ProjectsSection/>
      <Footer/>
    </>
  )
}

export default App
