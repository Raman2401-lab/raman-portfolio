import React from 'react'

import { motion } from 'framer-motion'
import { skills } from '../assets/assets.js'


const Skills = () => {
  return (
    <motion.div
        initial={{opacity:0, y:50}}
        whileInView={{opacity:1, y:0}}
        transition={{duration:1, ease:'easeOut'}}
        viewport={{once: false, amount:0.2}}
        id='skills'
       className='py-20 bg-[#1d1d1d] text-white'
    >
     <div className='container mx-auto px-6'>
         <h2 className='text-3xl font-bold text-center mb-4'>
                   My <span className='text-purple-700'>Skills</span>
        </h2>
        <p className='text-gray-300 text-center max-w-2xl mx-auto mb-16'>
                   The technologies and tools I work with to build modern applications.
         </p>


        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8
               max-w-5xl mx-auto'>
                    {
                        skills.map((skill, index)=>(
                           <div 
                               
                                 key={index} 
                                 className='bg-[#2a2a2a]/70 rounded-2xl p-6 hover:-translate-y-2 
                                   transition duration-300 cursor-pointer'
                                 >

                               <div className='flex items-center mb-4'>
                                 <skill.icon className='w-12 h-12 text-purple-700 mr-6' />
                                       <h3 className='text-xl font-semibold'>{skill.title}</h3>
                              </div>
                              <p className='text-gray-400 mb-4'>{skill.description}</p>
                              <div className='flex flex-wrap gap-2'>
                                {
                                    skill.tags.map((tech)=>(
                                        <span
                                         key={tech} 
                                        className='px-3 py-1 bg-[#3a3a3a] text-gray-300 rounded-full text-sm'
                                        >{tech}
                                        </span>
                                    ))
                                }
                              </div>
                           </div> 
                        ))
                    }
            </div>
            
        </div>

    </motion.div>
  )
}

export default Skills