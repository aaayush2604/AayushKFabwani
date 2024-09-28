import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { SiInstagram } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='h-[30vh] sm:h-[40vh] md:h-[50vh] w-full border-2 border-black flex justify-end relative'>
        <div className='h-full w-full md:flex justify-end relative items-end bg-[var(--third-color)] hidden'>
            <div className='w-4/5 h-4/5 bg-black absolute z-30 left-0 text-white'>
                <div className='w-full h-full px-5 py-5 relative flex flex-col justify-center'>
                    <div className='absolute h-12 w-12 z-20 right-16 top-16 bg-[var(--third-color)] rounded-full'></div>
                    <img src="./Icons/Curl.png" className='absolute sm:w-[12vw] z-20 right-10 invert top-16 w-[30vw] rotate-180' alt="" />
                    <div className='text-[3vw]'>Let's Connect</div>
                    <div className='flex text-[1.5vw] items-center '><FaPhoneAlt className='mr-4 '/> +91 9617637923</div>
                    <div className='flex text-[1.5vw] items-center '><BiLogoGmail className='mr-4'/> aayushfabwani2@gmail.com</div>
                    <div className='text-[2.5vw]'>Reach Out</div>
                    <div className='flex w-1/12 justify-around'>
                    <SiInstagram className='size-7'/>
                    <FaLinkedin className='size-7'/>
                    </div>
                </div>
            </div>
            <div className='h-full w-2/5 absolute hidden md:block z-10'>
                <div className='absolute w-full h-full inset-0 bg-black opacity-75'></div>
                <img src="./FooterBg.jpg" alt="" className='w-full h-full object-cover' />
                <img src="./ContactMe-bandw.png" alt="" className='absolute bottom-0 right-0 h-full'/>
            </div>
        </div>
        <div className='h-full w-full flex md:hidden bg-black justify-end relative items-end text-white'>
            <div className='bg-[#262727] w-4/5 h-4/5 absolute z-30 left-0'>
            <div className='w-full h-full px-2 py-5 relative flex flex-col justify-center font-FredokaRegular'>
                    <div className='text-[4.5vh]'>Let's Connect</div>
                    <div className='flex items-center mb-1'><FaPhoneAlt className='mr-4 size-4 sm:size-6'/> +91 9617637923</div>
                    <div className='flex items-center mb-1'><BiLogoGmail className='mr-4 size-4 sm:size-6'/> aayushfabwani2@gmail.com</div>
                    <div className='text-[3.5vh]'>Reach Out</div>
                    <div className='flex w-1/4 justify-around items-center'>
                    <a href="https://www.instagram.com/aaayush2604/" target="_blank"><SiInstagram className='size-4 sm:size-6'/></a>
                    <a href="https://www.linkedin.com/in/aayush-kumar-fabwani" target="_blank"><FaLinkedin className='size-5 sm:size-7'/></a>
                    </div>
                </div>
            </div>
            <div className='h-full w-full absolute z-10 object-cover'>
                <div className='absolute w-full h-full'></div>
                <img src="./FooterBg.jpg" alt="" className='w-full h-full object-cover' />
            </div>
        </div>
    </div>
  )
}

export default Footer
