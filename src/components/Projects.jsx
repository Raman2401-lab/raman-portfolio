import React from 'react'
import { motion } from 'framer-motion'
import  {projects } from '../assets/assets.js'
import ProjectCard from './ProjectCard.jsx'
import { FaArrowRight } from 'react-icons/fa'

const Projects = () => {
  return (
    <motion.div
        initial={{opacity:0, y:50}}
        whileInView={{opacity:1, y:0}}
        transition={{duration:1, ease:'easeOut'}}
        viewport={{once: false, amount:0.2}}
        id='projects'
        className='py-20 bg-[#1d1d1d] text-white'
        >
            <div className='container mx-auto px-6'>
                <h2 className='text-3xl font-bold text-center mb-4'>
                    My <span className='text-purple-700'>Projects</span>
                </h2>
                <p className='text-gray-300 text-center max-w-2xl mx-auto mb-16'>
                    Some of the applications and projects I’ve recently built
                </p>

                <div className='grid grid-cols-[repeat(auto-fit,minmax(360px,1fr))]
                    gap-14 max-w-6xl mx-auto'
                >{/* Project card */}
                    {
                        projects.map((project, index)=>(
                            <ProjectCard key={index} {...project} />
                        ))

                    }
                </div>
                <div className='text-center mt-12'>
                    <a href="#" className='inline-flex items-center px-6 py-3 border border-purple-700 rounded-lg font-medium hover:bg-purple-700/20 transition duration-300'>
                        <span>View More Projects</span>
                        <FaArrowRight className='ml-2'/>

                    </a>
                </div>

            </div>
    </motion.div>
  )
}

export default Projects