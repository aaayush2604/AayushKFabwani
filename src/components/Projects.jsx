import React from 'react'
import { BsGithub } from "react-icons/bs"
import { FaGlobe } from "react-icons/fa";

const Projects = () => {
  return (
    <div className='relative min-h-[90vh] md:h-[90vh] w-full flex justify-center items-center font-FredokaRegular mb-6'>
        <div className='absolute right-20 w-[10vw] h-[10vw] rounded-full bg-[var(--third-color)]'> </div>
        <div className='absolute left-0 top-10 md:left-20 md:top-5 w-[10vw] h-[10vw] rounded-full bg-[var(--third-color)]'> </div>
        <div className='absolute left-16 bottom-10 w-[20vw] h-[20vw] md:w-[10vw] md:h-[10vw] rounded-full bg-[var(--third-color)]'> </div>
      <div className=' w-4/5 min-h-[80vh] md:h-[80vh] rounded-g bg-gray-700 bg-clip-padding backdrop-filter backdrop-blur-2xl bg-opacity-0 flex flex-col justify-between '>
      <div className='flex flex-col md:flex-row justify-center min-h-[30vh] w-full flex-grow md:h-[40%] p-6'>
                <div className='w-full md:w-4/5 md:order-1 order-2'>
                    <div className='text-[5vw] sm:text-[3vw] md:text-[1.5vw] mt-5 md:mt-2 text-center'>My Projects</div>
                    <div className='hidden md:block font-bold text-[3vw] text-center'>Bringing Ideas to Life, One Project at  a time</div>
                    <div className='md:hidden font-bold text-[8vw] sm:text-[5vw] text-center'>Building with Purpose</div>
                </div>
        </div>
        <div className='min-h-[50vh] md:h-[60%] w-full flex flex-col md:flex-row justify-around items-center'>
                <div className='min-h-[30vh] md:h-[90%] w-4/5 md:w-1/4 min-w-[200px] bg-[#1a1b1b] bg-[url("./GupShup.png")] bg-cover bg-center my-5 px-2 flex flex-col justify-end rounded-md hover:bg-[var(--third-color)] hover:border-2 border-black text-white hover:shadow-solid-neon'>
                    <div className='bg-black bg-opacity-50 p-2 w-full h-2/5 flex flex-col justify-between mb-2 rounded-md hover:bg-[var(--third-color)] hover:text-black'>
                            <div>
                            <div className='font-bold'>Real Time Chat Application</div>
                            <div><span className='font-bold'>Using: </span>MERN Stack, Socket.io</div>
                            </div>
                            <div className='flex items-center gap-2 w-full justify-end'>
                                <a href="https://github.com/aaayush2604/GupShup" target="_blank"><BsGithub /></a>
                                <a href="https://gupshup-zsh9.onrender.com/" target="_blank"><FaGlobe /></a>
                            </div>
                    </div>
                </div>
                <div className='min-h-[30vh] md:h-[90%] w-4/5 md:w-1/4 min-w-[200px] bg-[#1a1b1b] bg-[url("./MealMap.png")] bg-cover bg-center my-5 px-2 flex flex-col justify-end rounded-md hover:bg-[var(--third-color)] hover:border-2 border-black text-white hover:shadow-solid-neon'>
                    <div className='bg-black bg-opacity-50 p-2 w-full h-2/5 flex flex-col justify-between mb-2 rounded-md hover:bg-[var(--third-color)] hover:text-black'>
                            <div>
                            <div className='font-bold'>Meal Map</div>
                            <div><span className='font-bold'>Using: </span>MERN Stack (allows CRUD Operations)</div>
                            </div>
                            <div className='flex items-center gap-2 w-full justify-end'>
                                <a href="https://github.com/aaayush2604/Meal-Map" target="_blank"><BsGithub /></a>
                                <a href="https://meal-map-frontend.vercel.app/" target="_blank"><FaGlobe /></a>
                            </div>
                    </div>
                </div>
                <div className='min-h-[30vh] md:h-[90%] w-4/5 md:w-1/4 min-w-[200px] bg-[#1a1b1b] bg-[url("./GupShup.png")] bg-cover bg-center my-5 px-2 flex flex-col justify-end rounded-md hover:bg-[var(--third-color)] hover:border-2 border-black text-white hover:shadow-solid-neon'>
                    <div className='bg-black bg-opacity-50 p-2 w-full h-2/5 flex flex-col justify-between mb-2 rounded-md hover:bg-[var(--third-color)] hover:text-black'>
                            <div>
                            <div className='font-bold'>Memory Management in LINUX</div>
                            <div><span className='font-bold'>Using: </span>C & System Calls</div>
                            </div>
                            <div className='flex items-center gap-2 w-full justify-end'>
                                <a href="https://github.com/aaayush2604/Custom-Memory-Allocation-and-Garbage-Collection-in-C" target="_blank"><BsGithub /></a>
                            </div>
                    </div>
                </div>

                
            </div>
    </div>
    </div>
  )
}

export default Projects
