import React from 'react'
import { PROJECTS } from '../constants'
import {animate, motion, stagger} from "framer-motion"
import { FaGithub} from 'react-icons/fa';
import { LuConstruction } from "react-icons/lu";
const Projects = () => {
  return (
    <div className='pb-4'>
        <motion.h2 
        whileInView={{opacity:1,y:0}}
        initial={{opacity:0,y:-100}}
        transition={{duration:0.5}}
        className='my-20 text-center text-4xl'>Projects</motion.h2>
        {/* <motion.h3 whileInView={{opacity:1,y:0}} initial={{opacity:0,y:-100}} transition={{duration:0.5}} className='text-center flex items-center justify-center flex-col gap-4 text-3xl'><LuConstruction className='text-5xl' />will update them soon</motion.h3> */}
        <div>
            
            {PROJECTS.map((project,index) => (
                <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
                    <motion.div 
                    whileInView={{opacity:1,x:0}}
                    initial={{opacity:0,x:-100}}
                    transition={{duration:1}}
                    className='w-full lg:w-1/4'>
                        <img src={project.image} width={500} height={500} alt={project.title} className='mb-6  lg:mx-[-100px] rounded-xl'/>
                    </motion.div> 
                    <motion.div
                    whileInView={{opacity:1,x:0}}
                    initial={{opacity:0,x:100}}
                    transition={{duration:1}}
                    className='w-full max-w-xl lg:w-3/4'>
                       <h3 className='mb-2 font-semibold text-2xl'>{project.title}</h3>
                        <p className='mb-4 text-stone-400'>{project.description}</p>
                        <a href="https://github.com/sanatan-dive/9otes">
                        <FaGithub className=' mb-5 mr-3 text-3xl text-stone-300'/>
                        </a>
                        {project.technologies.map((technology,index) => (
                            <span className='mr-3 rounded bg-stone-900 p-2 text-sm font-medium text-stone-300'> {technology}</span>
                        ))}
                    </motion.div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Projects