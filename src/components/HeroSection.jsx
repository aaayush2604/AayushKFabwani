import React from 'react'
import { FaCode } from "react-icons/fa";
import { FaArrowPointer } from "react-icons/fa6";
import Navbar from './Navbar';

const HeroSection = () => {
  return (
    <div className='relative w-full h-full'>
      <Navbar/>
    <div className='relative sm:bottom-24 sm:right-11 sm:w-[120vw] h-full sm:-rotate-[4deg] -rotate-6 bottom-24 right-10 w-[140vw] bg-[var(--primary-color)] z-10'>
    <div className='absolute -bottom-12 -left-5 sm:-bottom-2 w-full h-24 sm:h-14 lg:h-10 bg-black z-50 HeroBand flex text-white'>
      <div className='w-3/4 sm:w-3/4 lg:w-3/4 flex flex-wrap justify-center sm:justify-around font-WardrumBold relative left-0 sm:left-16 letter-spacing-4 items-center'>
      <div>-</div>
      <div className=' w-3/4 sm:w-1/4 text-center'>Web Development</div>
      <div className='text-[#dffa6b] text-center'>-</div>
      <div className='text-[#dffa6b]  w-3/4 sm:w-1/4 text-center relative'><span className='sm:hidden absolute left-0'>-</span>Machine Learning</div>
      <div className='text-[#dffa6b] text-center'>-</div>
      <div  className=' sm:w-1/3 text-center'>Software Engineering</div>
      <div className='text-[#dffa6b] text-center mx-2 sm:mx-0'>-</div>
      <div className='text-[#dffa6b]  sm:w-1/12 text-center'>2024 </div>
      <div className='hidden sm:block'>-</div>
      </div>
    </div>
    <img src='HeroSection.png' className='absolute w-64 sm:w-72 md:w-80 lg:w-96 bottom-2 z-30 HeroImage sm:rotate-[4deg] rotate-6 lg:left-96 sm:left-72 left-10'></img>
    <div className='absolute w-[120px] h-[120px] lg:w-[175px] lg:h-[175px] sm:w-[150px] sm:h-[150px] sm:left-[32rem] sm:-bottom-4 rounded-full left-56 lg:left-[42rem] lg:bottom-0 -bottom-4 z-40 flex items-center justify-center sm:rotate-[4deg] rotate-6 bg-white'>
        <img src='/RotateRing.png' className='animate-spin-slow w-full h-full'></img>
        <FaCode className='absolute w-2/5 h-2/5'/>
    </div>
    <div className='absolute h-12 w-12 z-20  left-16 top-16 sm:left-24 sm:top-24 bg-[var(--second-color)] rounded-full md:left-40 md:top-16'></div>
    <img src="./Icons/Curl.png" className='absolute sm:w-[12vw] z-20 sm:left-24 sm:top-24 left-10 top-20 w-[30vw] sm:rotate-90 rotate-[135deg] md:left-40 md:top-16 md:rotate-90' alt="" />
    <FaArrowPointer className='absolute top-[28rem] right-96 size-10 sm:size-20 z-20 sm:top-36 rotate-90 md:right-56 sm:right-72 text-[#d9fa69]'/>
    <div className='font-Dancing z-40 absolute sm:text-[4vw] top-52 left-40 text-[7vw] md:text-[5vw] md:top-40 lg:top-[187px] md:rotate-0 lg:left-[670px] sm:rotate-[4deg] rotate-0'>Aayush Kumar Fabwani</div>
    <div className='w-[20px] h-[20px] sm:w-[50px] sm:h-[50px] bg-[#ddb139] z-30 relative left-[60%] top-[50%] sm:left-3/4 sm:top-3/4 rounded-full bg-gradient-to-r from-[#deba58] to-[#fd9600]'></div>
    <div className='absolute z-20 text-[15vw] left-8 sm:text-[9vw] sm:left-40  lg:text-[10vw] lg:left-52 font-WardrumBoldOutline sm:rotate-[4deg] rotate-6 top-56 text-[#a1ce8b] w-full'>
      <div className='absolute left-5 lg:left-9 sm:text-nowrap text-wrap'>HI I'M A WEB</div>
      <div className='absolute top-32'>DEVELOPER</div>
    </div>
    </div>
    </div>
  )
}

export default HeroSection
