import React from 'react'
import { projects } from '../assets/assets.js';


const ProjectCard = ({title, description, image, tech}) => {
    console.log(projects);
  return (
    <div className='bg-[#2a2a2a] rounded-2xl overflow-hidden hover:-translate-y-2 
                    transition duration-300 cursor-pointer'>
        {/* Project Image */}
        <img src={image} alt={title} className='w-full object-cover'/>

        {/* Project discription */}
        <div className='p-6'>

            <h3 className='text-xl font-semibold mb-2'>{title}</h3>
            
            <p className='text-gray-300 mb-4'>{description}</p>
           
             <div className='flex flex-wrap gap-2 mb-6'>
                 {tech.map((item, index)=>(
                    <span 
                     key={index} 
                     className='px-3 py-1  bg-[#3e3e3e] rounded-full text-sm text-gray-200'>
                     {item}

                    </span>
                ))}
            </div>
            <div className='flex gap-2'>
                <a href="#" className='flex-1 text-center px-4 py-1.5 bg-purple-600 rounded-lg font-medium hover:bg-purple-700 transition duration-300'>
                    View Demo
                </a>
                 <a href="#" className='flex-1 text-center px-4 py-2 border border-purple-600 text-purple-400 rounded-lg font-medium hover:bg-purple-700/20 transition duration-300'>
                 Code
                </a>

            </div>
        </div>
    </div>
  )
}

export default ProjectCard