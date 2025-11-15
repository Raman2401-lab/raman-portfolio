import React from 'react'
import { motion } from 'framer-motion' 

import profileImg from '../assets/Profile.jpg';



const Hero = () => {
  return (

    <motion.div   
        initial={{ opacity:0, y:50}}
        whileInView={{ opacity:1, y:0}}
        transition={{ duration:0.6, ease:'easeOut'}}
        viewport={{once: true}}
        id='home'
        className='min-h-screen flex items-center pt-20 pb-16 bg-linear-to-r 
            from-[#1a1a1a] via-[#2d2d2d] to-[#1a1a1a]'
        >
            <div className='container mx-auto px-6 flex flex-col md:flex-row
                    items-center justify-between'>
                     {/* left side content */}
                   <div className='md:w-1/2 mb-10 md:mb-0'>
                      <h1 className='text-4xl md:text-6xl font-bold mb-4'>
                        Hi, I'm <span className='text-amber-500'>Raman Ghule </span>
                     </h1>
                     <h2 className='text-2xl md:text-4xl font-semibold mb-6 typewrite'>Full Stack Developer</h2>
                     <p className='text-lg text-gray-300 mb-8'>I create stunning web experience with modern technologies and
                     innovative design.
                     </p>
                     <div className='flex space-x-4'>
                         <a href='#projects' className='px-6 py-3 bg-purple-600 rounded-lg font-medium hover:bg-purple-800 transition duration-300'> View Work</a>
                         <a href='#contact' className='px-6 py-3 border border-purple-700 rounded-lg font-medium 
                         hover:bg-purple-700/20 transition decoration-purple-300'> Contact Me</a>
                     </div>  

                  </div>
                  
                  {/* right side image */}
               <div className='md:w-1/2 flex justify-center'>
                <div className='relative w-64 h-68 md:w-68 md:h-72'>
                  <div className='bg-absolute inset-0 rounded-full bg-linear-to-r from-purple-700 to-pink-400  opacity-70'>
                     <motion.img 
                       animate={{y:[0, -10, 0]}}
                       transition={{
                           duration: 4,
                           repeat: Infinity,
                           repeatType: 'loop',
                           ease: 'easeInOut'
                       }}
                       src={profileImg} alt='Profile'
                       className=' relative rounded-full w-68 h-78 object-cover z-10 animate-float' 
                     />
                  </div>
               </div>
             </div>
            </div>
    </motion.div>
  )
}

export default Hero