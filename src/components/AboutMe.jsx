import React from 'react';
import { FaArrowPointer } from "react-icons/fa6";

const AboutMe = () => {
  return (
    <div className='w-full min-h-[80vh] md:h-[80vh] relative'>
      <div className='w-full min-h-[80vh] md:h-full bg-[#0e0e0e] flex justify-center items-center py-8 relative'>
      <div className='absolute top-20 left-[30rem] w-[10vw] h-[10vw] rounded-full bg-[var(--third-color)] z-0'> </div>
      <div className='absolute top-3 left-5 w-[10vw] h-[10vw] rounded-full bg-[var(--third-color)] z-0'> </div>
      <div className='absolute bottom-5 right-9 w-[10vw] h-[10vw] rounded-full bg-[var(--third-color)] z-0'> </div>
      <div className='relative w-4/5 h-4/5 md:h-[60vh] rounded-xl bg-gray-700 bg-clip-padding backdrop-filter backdrop-blur-2xl bg-opacity-0 flex justify-between flex-col md:flex-row z-10'>
        <FaArrowPointer className='text-[var(--third-color)] size-10 absolute z-30 left-6 top-10'/>
        
        <div className='md:h-full min-h-[50vh] w-full md:w-2/5 flex justify-center items-end bg-[#1b1b1a] relative rounded-t-xl md:rounded-tl-xl md:rounded-tr-none md:rounded-bl-xl  text-white '>
          <div className='w-2/5 h-1/5 bg-[var(--second-color)] absolute z-40 top-20 right-0 flex justify-center items-center'>
            <span className='text-[10vw] md:text-[5vw]'>9.63</span>
            <span className='text-[3vw] md:text-[1vw]'>CGPA</span>
          </div>
          <img src="./AboutMe.png" className='absolute z-30 w-[80%] left-0 sm:w-[50%] sm:left-[20%] lg:w-[80%] lg:left-0 md:rounded-bl-xl'/>
          <div className='h-3/5 w-3/5 bg-[var(--third-color)] rounded-t-xl absolute z-20'></div>
        </div>
        <div className='min-h-[50vh] md:h-[60vh] w-full md:w-3/5 border-2 rounded-b-xl md:rounded-r-xl md:rounded-bl-none text-white font-FredokaRegular p-7 z-10'>
          <div className='text-[10vw] md:text-[5vw]'>About Me</div>
          <div className='hidden md:block'>I am a third-year Computer Science & Engineering student at Vellore Institute of Technology, Chennai, originally from Sagar, Madhya Pradesh, with a strong academic track record. My passion for technology drives me to solve problems that span from the complex to the everyday. Along the way, I’ve built proficiency in Python, C, C++, Java, and JavaScript, as well as hands-on experience with frameworks like Django and React.</div>
          <div className='md:hidden'>
          I am a third-year Computer Science & Engineering student at Vellore Institute of Technology, Chennai, originally from Sagar, Madhya Pradesh, with a strong academic track record. My passion for technology drives me to solve problems that span from the complex to the everyday.
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default AboutMe
