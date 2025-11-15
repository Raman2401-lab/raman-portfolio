import React from 'react'
import { motion } from 'framer-motion'
import profileImg from '../assets/Profile.jpg'
import  {aboutInfo } from '../assets/assets.js'


const About = () => {
  return (
    <motion.div
         initial={{ opacity:0, y:50}}
         whileInView={{ opacity:1, y:0}}
         transition={{ duration:0.6, ease:'easeOut'}}
         viewportClean={{once: true}}
         id='about'
         className='py-20 bg-dark-200'
        >
            <div className='container mx-0 px-6'>
                    {/* Heading */}
                    <h2 className='text-3xl font-bold text-center mb-4'>About
                        <span className='text-purple-700'>Me</span>
                    </h2>
                    <p className='text-gray-300 text-center max-w-2xl mx-auto mb-16'>
                        Get to Know more about my background and passion
                    </p>

                        {/* image + journey */}
                    <div className='flex flex-col md:flex-row items-center gap-12'>
                       
                        {/* image */}
                        <div className='md:w-1/2 rounded-2xl overflow-hidden'>
                            < motion.img
                              initial={{opacity:0, y:50}}
                              whileInView={{opacity:1, y:0}}
                              transition={{duration:0.9, ease:'easeOut'}}
                              viewport={{once: false, amount:0.2}}
                              className='w-90 h-full object-cover'
 
                             src={profileImg}  alt='Profile'/>
                        </div>

                            {/* content */}
                        < motion.div 
                              initial={{opacity:0, y:50}}
                              whileInView={{opacity:1, y:0}}
                              transition={{duration:0.9, ease:'easeOut'}}
                              viewport={{once: false, amount:0.2}}
                              className='md:w-1/1'
                            >

                            <div className='rounded-2xl p-4'>
                                <h3 className='text-2xl font-semibold mb-7'>My Journey</h3>
                                <p className=' text-gray-300 mb-6'>
                                    I’m a passionate full-stack developer with a strong foundation in modern web technologies.
                                        My journey began with a curiosity for how websites and applications work, which led me to 
                                        pursue the Post Graduate Diploma in Advanced Computing (PG-DAC).
                                        During the course, I gained hands-on experience with Java, Spring Boot, React.js, SQL, and RESTful APIs, and
                                        developed several real-world projects integrating backend and frontend technologies.
                                </p>

                                <p className='text-gray-300 mb-6'>
                                    I’m deeply motivated by learning new tools and frameworks, improving performance, and 
                                    building applications that solve real problems. My goal is to contribute to dynamic teams 
                                    where I can grow as a developer while creating meaningful digital solutions.
                                </p>

                                {/* Cards */}
                                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                                    {
                                        aboutInfo.map((data, index)=>(
                                            <div 
                                               key={index} className=' bg-gray-800 rounded-2xl p-6 
                                                transition-transform duration-300 
                                                hover:translate-y-2 cursor-pointer' >
                                                 <div className='text-purple-700 text-4xl mb-4'>
                                                 <data.icon  />
                                                 </div>
                                                 <h3 className='text-xl font-semibold mb-3'>{data.title}</h3>
                                                 <p className='text-gray-400'>{data.description}</p>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>

                        </motion.div>
                    </div>
            </div> 

    </motion.div>
  )
}

export default About