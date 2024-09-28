import React from 'react'

const MySkills = () => {
  return (
    <div className='relative min-h-[90vh] md:h-screen w-full flex justify-center items-center font-FredokaRegular mb-6'>
      <div className='absolute right-5 w-[10vw] h-[10vw] rounded-full bg-[var(--third-color)]'> </div>
      <div className='absolute left-5 top-0 w-[10vw] h-[10vw] rounded-full bg-[var(--third-color)]'> </div>
      <div className=' w-4/5 min-h-[90vh] md:h-[90vh] rounded-g bg-gray-700 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-0 flex flex-col justify-between'>
            <div className='flex flex-col md:flex-row justify-between min-h-[30vh] w-full flex-grow md:h-[40%] p-6'>
                <div className='w-full md:w-3/5 md:order-1 order-2'>
                    <div className='text-[5vw] sm:text-[3vw] md:text-[1.5vw] mt-5 md:mt-2'>My Skills</div>
                    <div className='hidden md:block font-bold text-[3vw]'>Crafting Smart, Scalable, and User-Centric Digital Solutions <span className='font-thin text-[2vw]'>with</span></div>
                    <div className='md:hidden font-bold text-[8vw] sm:text-[5vw]'>Crafting Adaptive Digital Solutions <span className='text-[5vw] sm:text-[3vw] font-thin'>with</span></div>
                </div>
                <div className='h-2/5 md:h-full flex flex-col justify-center items-center md:items-end w-full md:w-2/5 md:order-2 order-1'>
                    <a href='./AayushKumarFabwani_CV.pdf' download className=' px-6 py-3 rounded-full bg-[var(--third-color)] font-bold shadow-solid-black'>Download CV</a>
                </div>
            </div>
            <div className='min-h-[50vh] md:h-[60%] w-full flex flex-col md:flex-row justify-around items-center'>
                <div className='min-h-[30vh] md:h-[90%] w-4/5 md:w-1/4 min-w-[200px] bg-white  my-5 px-2 flex flex-col justify-around rounded-md hover:bg-[var(--third-color)] hover:shadow-solid-black'>
                    <img src="./SVGs/WebDev.svg" className='text-[var(--third-color)] w-[90px] my-2' alt="" />
                    <div className='my-2 font-bold'>Full Stack Web Development</div>
                    <div className='my-2'>Building dynamic web applications using MERN Stack, ensuring seamless user experiences.</div>
                </div>
                <div className='min-h-[30vh] md:h-[90%] w-4/5 md:w-1/4 min-w-[200px] bg-white  my-5 px-2 flex flex-col justify-around rounded-md hover:bg-[var(--third-color)] hover:shadow-solid-black'>
                    <img src="./SVGs/ML.svg" className='text-[var(--third-color)] w-[170px] my-2' alt="" />
                    <div className='my-2 font-bold'>Machine Learning</div>
                    <div className='my-2'>Creating intelligent solutions with data using Python, TensorFlow, and scikit-learn to develop predictive models.</div>
                </div>
                <div className='min-h-[30vh] md:h-[90%] w-4/5 md:w-1/4 min-w-[200px] bg-white  my-5 px-2 flex flex-col justify-around rounded-md hover:bg-[var(--third-color)] hover:shadow-solid-black'>
                    <img src="./SVGs/SE.svg" className='text-[var(--third-color)] w-[120px] my-2' alt="" />
                    <div className='my-2 font-bold'>Software Engineering</div>
                    <div className='my-2'>Applying software engineering principles to write clean code and design efficient systems </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default MySkills
