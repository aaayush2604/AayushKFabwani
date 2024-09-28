import React from 'react'
import HeroSection from '../components/HeroSection'
import MySkills from '../components/MySkills'
import Projects from '../components/Projects'
import AboutMe from '../components/AboutMe'
import Footer from '../components/Footer'


const Home = () => {
  return (
    <div className='h-full overflow-x-hidden overflow-y-auto bg-[var(--BG-COLOR)]'>
      <HeroSection/>
      <MySkills/>
      <AboutMe/>
      <Projects/>
      <Footer/>
    </div>
  )
}

export default Home
