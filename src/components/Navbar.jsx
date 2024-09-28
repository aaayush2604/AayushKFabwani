import React from 'react'
import { SiInstagram } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className='absolute w-20 right-6 lg:w-14 lg:h-36 lg:top-48 lg:left-8 z-50 flex lg:flex-col justify-around items-center'>
      <a  href='https://www.instagram.com/aaayush2604/' target="_blank" className='w-[35px] h-[35px] lg:w-[50px] lg:h-[50px] my-1 border-2 border-black rounded-full flex justify-center items-center bg-[var(--third-color)] shadow-solid-black-right hover:bg-black hover:text-white'><SiInstagram className='w-3/5 h-3/5'/></a>
      <a href='https://www.linkedin.com/in/aayush-kumar-fabwani'  target="_blank" className='w-[35px] h-[35px] lg:w-[50px] lg:h-[50px] my-1 border-2 border-black rounded-full flex justify-center items-center bg-[var(--third-color)] shadow-solid-black-right  hover:bg-black hover:text-white '><FaLinkedin className='w-3/5 h-3/5'/></a>
    </div>
  )
}

export default Navbar
