import React from 'react';
import { animate, motion } from "framer-motion";
import { FaGithub } from 'react-icons/fa';
import { LuConstruction } from "react-icons/lu";
import project1 from "../assets/projects/project-1.webp";
import project2 from "../assets/projects/project-2.webp";
import project3 from "../assets/projects/project-3.webp";

const Projects = () => {
  return (
    <section id='projects'>
    <div className='pb-4'>
      <motion.h2 
        whileInView={{opacity:1,y:0}}
        initial={{opacity:0,y:-100}}
        transition={{duration:0.5}}
        className='my-20 text-center text-4xl'>
        Projects
      </motion.h2>

      <div className='mb-8 flex flex-wrap lg:justify-center'>
        <motion.div 
          whileInView={{opacity:1,x:0}}
          initial={{opacity:0,x:-100}}
          transition={{duration:1}}
          className='w-full lg:w-1/4'>
            <a href='#'>
            <img src={project3} width={500} height={500} alt="LiveDox" className='mb-6 lg:mx-[-100px] rounded-xl'/>
            </a>
         
        </motion.div>
        <motion.div
          whileInView={{opacity:1,x:0}}
          initial={{opacity:0,x:100}}
          transition={{duration:1}}
          className='w-full max-w-xl lg:w-3/4'>
          <a href='#'>
          <h3 className='mb-2 font-semibold text-2xl'>Hackathon Club Website</h3>
          </a>
          <p className='mb-4 text-stone-400'>
         Offical Hackathon Club Website for my college is a comprehensive platform where users can discover hackathons, register for them, build personalized profiles to highlight their skills, and connect with others through email. This fosters collaboration and networking among participants.
          </p>
          <a className='text-2xl  '  href='https://github.com/sanatan-dive/Hackathon-Club-Website' target='_blank'>
            <FaGithub />
          </a>
          <div className='mt-4 flex flex-wrap'>
          <span className='mr-3 rounded bg-stone-900 p-2 text-sm font-medium text-stone-300'>ReactJs</span>
          <span className='mr-3 rounded bg-stone-900 p-2 text-sm font-medium text-stone-300'>Tailwind</span>
          <span className='mr-3 rounded bg-stone-900 p-2 text-sm font-medium text-stone-300'>Framer-Motion</span>
          {/* <span className='mr-3 rounded bg-stone-900 p-2 text-sm font-medium text-stone-300'>NextJS</span> */}
          </div>
        </motion.div>
      </div>

      {/* Project 1 */}
      <div className='mb-8 flex flex-wrap lg:justify-center'>
        <motion.div 
          whileInView={{opacity:1,x:0}}
          initial={{opacity:0,x:-100}}
          transition={{duration:1}}
          className='w-full lg:w-1/4'>
            <a href='https://9otes.vercel.app/'>
          <img src={project1} width={500} height={500} alt="9otes" className='mb-6 lg:mx-[-100px] rounded-xl'/>
          </a>
        </motion.div>
        <motion.div
          whileInView={{opacity:1,x:0}}
          initial={{opacity:0,x:100}}
          transition={{duration:1}}
          className='w-full max-w-xl lg:w-3/4'>
          <a href='https://9otes.vercel.app/'>
          <h3 className='mb-2 font-semibold text-2xl'>9otes</h3>
          </a>
          <p className='mb-4 text-stone-400'>
            An advanced note take application that goes beyond basic functionality. It incorporates features like categories, markdown support, and filtering options, making it suitable for intermediate to advanced developers. This project is aimed at enhancing note-taking capabilities, allowing users to organize and manage their tasks more effectively.
          </p>
          <a className='text-2xl  '  href='https://github.com/sanatan-dive/9otes' target='_blank'>
            <FaGithub />
          </a>

          <div className='mt-4 flex flex-wrap'>
          <span className='mr-3 rounded bg-stone-900 p-2 text-sm font-medium text-stone-300'>HTML</span>
          <span className='mr-3 rounded bg-stone-900 p-2 text-sm font-medium text-stone-300'>BootStrap</span>
          <span className='mr-3 rounded bg-stone-900 p-2 text-sm font-medium text-stone-300'>TypeScript</span>
          <span className='mr-3 rounded bg-stone-900 p-2 text-sm font-medium text-stone-300'>React</span>
          </div>
        </motion.div>
      </div>

      {/* Project 2 */}
      <div className='mb-8 flex flex-wrap lg:justify-center'>
        <motion.div 
          whileInView={{opacity:1,x:0}}
          initial={{opacity:0,x:-100}}
          transition={{duration:1}}
          className='w-full lg:w-1/4'>
            <a href='https://live-dox.vercel.app/'>
            <img src={project2} width={500} height={500} alt="LiveDox" className='mb-6 lg:mx-[-100px] rounded-xl'/>
            </a>
         
        </motion.div>
        <motion.div
          whileInView={{opacity:1,x:0}}
          initial={{opacity:0,x:100}}
          transition={{duration:1}}
          className='w-full max-w-xl lg:w-3/4'>
          <a href='https://live-dox.vercel.app/'>
          <h3 className='mb-2 font-semibold text-2xl'>LiveDox</h3>
          </a>
          <p className='mb-4 text-stone-400'>
            A collaborative docs editor which lets you edit your docs and invite other people to edit and maintain documents together.
          </p>
          <a className='text-2xl  '  href='https://github.com/sanatan-dive/LiveDox' target='_blank'>
            <FaGithub />
          </a>
          <div className='mt-4 flex flex-wrap'>
          <span className='mr-3 rounded bg-stone-900 p-2 text-sm font-medium text-stone-300'>LiveBlocks</span>
          <span className='mr-3 rounded bg-stone-900 p-2 text-sm font-medium text-stone-300'>Tailwind</span>
          <span className='mr-3 rounded bg-stone-900 p-2 text-sm font-medium text-stone-300'>TypeScript</span>
          <span className='mr-3 rounded bg-stone-900 p-2 text-sm font-medium text-stone-300'>NextJS</span>
          </div>
        </motion.div>
      </div>

      {/* project 3 */}
   
    </div>
    </section>  
  );
}

export default Projects;
