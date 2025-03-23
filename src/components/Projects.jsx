//eslint-disable-next-line
import React from 'react';

import { motion } from "framer-motion";
import { FaGithub } from 'react-icons/fa';
//eslint-disable-next-line
import { FaEye } from 'react-icons/fa';
import project1 from "../assets/projects/project-1.webp";
import project2 from "../assets/projects/project-2.webp";
import project3 from "../assets/projects/project-3.webp";
import {  FaUpRightFromSquare } from 'react-icons/fa6';

const Projects = () => {
  return (
    <section id='projects'>
    <div className='pb-4 container mx-auto px-4'>
      <motion.h2 
        whileInView={{opacity:1,y:0}}
        initial={{opacity:0,y:-100}}
        transition={{duration:0.5}}
        className='my-20 text-center text-4xl'>
        Projects
      </motion.h2>
        {/* Project 1 */}
      <div className='mb-16 flex flex-wrap items-center'>
        <motion.div 
          whileInView={{opacity:1,x:0}}
          initial={{opacity:0,x:-100}}
          transition={{duration:1}}
          className='w-full md:w-2/5 lg:w-1/3 mb-8 md:mb-0'>
            <a href='https://kosu-xi.vercel.app/' target='_blank' className="block relative group">
              <div className="overflow-hidden rounded-xl">
                <img 
                  src={project2} 
                  alt="KOSU" 
                  className='w-full rounded-xl transition-transform duration-300 group-hover:blur-sm group-hover:scale-105'
                />
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100 rounded-xl">
                <span className="text-white font-bold px-4 py-2 bg-black bg-opacity-50 rounded">View Project</span>
              </div>
            </a>
        </motion.div>
        <motion.div
          whileInView={{opacity:1,x:0}}
          initial={{opacity:0,x:100}}
          transition={{duration:1}}
          className='w-full md:w-3/5 lg:w-2/3 md:pl-8'>
          <a href='https://kosu-xi.vercel.app/' target='_blank' className="group inline-flex items-center">
            <h3 className='mb-2 font-semibold text-2xl group-hover:text-stone-300 transition-colors duration-300'>KOSU</h3>
            <FaUpRightFromSquare  className="ml-2 text-sm opacity-0 group-hover:opacity-100 transition-all duration-300" />
          </a>
          <p>
          Revolutionizing Hackathon with AI and Blockchain
          </p>
          <p className='mb-4 text-stone-400'>
           
          An event hosting platform for seamless hackathon organization, engagement hiring, utilizing AI automation and blockchain-based tokens and rewards.
          </p>
          <div className="flex space-x-4 items-center">
            <a 
              className='text-2xl transition-transform duration-300 hover:scale-110 hover:text-stone-300'  
              href='https://github.com/sanatan-dive/kosu' 
              target='_blank'
              title="View Code"
            >
              <FaGithub />
            </a>
            <a 
              className='text-2xl transition-transform duration-300 hover:scale-110 hover:text-stone-300'  
              href='https://kosu-xi.vercel.app/' 
              target='_blank'
              title="View Live Site"
            >
              <FaUpRightFromSquare />
            </a>
          </div>
          <div className='mt-4 flex flex-wrap'>
          <span className='mr-3 mb-2 rounded bg-stone-900 p-2 text-sm font-medium text-stone-300 hover:bg-stone-800 transition-colors duration-300'>NextJS</span>
            <span className='mr-3 mb-2 rounded bg-stone-900 p-2 text-sm font-medium text-stone-300 hover:bg-stone-800 transition-colors duration-300'>MongoDb</span>
            <span className='mr-3 mb-2 rounded bg-stone-900 p-2 text-sm font-medium text-stone-300 hover:bg-stone-800 transition-colors duration-300'>GenAI</span>
            <span className='mr-3 mb-2 rounded bg-stone-900 p-2 text-sm font-medium text-stone-300 hover:bg-stone-800 transition-colors duration-300'>Aptos Blockchain</span>
          </div>
        </motion.div>
      </div>

     
      

      {/* Project 2 */}
      <div className='mb-16 flex flex-wrap items-center'>
        <motion.div 
          whileInView={{opacity:1,x:0}}
          initial={{opacity:0,x:-100}}
          transition={{duration:1}}
          className='w-full md:w-2/5 lg:w-1/3 mb-8 md:mb-0'>
            <a href='https://drive.google.com/file/d/1BcwIWMqF_JLxzu_MP2X9FZN4zvnJHMX7/view?usp=sharing'target='_blank' className="block relative group">
              <div className="overflow-hidden rounded-xl">
                <img 
                  src={project1} 
                  alt="Learnify" 
                  className='w-full rounded-xl transition-transform duration-300 group-hover:blur-sm group-hover:scale-105'
                />
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100 rounded-xl">
                <span className="text-white font-bold px-4 py-2 bg-black bg-opacity-50 rounded">View Project</span>
              </div>
            </a>
        </motion.div>
        <motion.div
          whileInView={{opacity:1,x:0}}
          initial={{opacity:0,x:100}}
          transition={{duration:1}}
          className='w-full md:w-3/5 lg:w-2/3 md:pl-8'>
          <a href='https://drive.google.com/file/d/1BcwIWMqF_JLxzu_MP2X9FZN4zvnJHMX7/view?usp=sharing'  target='_blank' className="group inline-flex items-center">
            <h3 className='mb-2 font-semibold text-2xl group-hover:text-stone-300 transition-colors duration-300'>Learnify</h3>
            <FaUpRightFromSquare  className="ml-2 text-sm opacity-0 group-hover:opacity-100 transition-all duration-300" />
          </a>
          <p className='mb-4 text-stone-400'>
          {/* eslint-disable-next-line */}
          Learnify is an all-in-one platform designed to make learning easy, accessible, and personalized. Whether you're exploring a new topic or deepening your expertise, Learnify curates the best resources — including YouTube playlists, free courses, and insightful blogs — all in one place. It helps you save time, stay organized, and build your knowledge step by step. 
          </p>
          <div className="flex space-x-4 items-center">
            <a 
              className='text-2xl transition-transform duration-300 hover:scale-110 hover:text-stone-300'  
              href='https://github.com/sanatan-dive/learnify' 
              target='_blank'
              title="View Code"
            >
              <FaGithub />
            </a>
            <a 
              className='text-2xl transition-transform duration-300 hover:scale-110 hover:text-stone-300'  
              href='https://github.com/sanatan-dive/learnify' 
              target='_blank'
              title="View Live Site"
            >
             <FaUpRightFromSquare />
            </a>
          </div>
          <div className='mt-4 flex flex-wrap'>
            <span className='mr-3 mb-2 rounded bg-stone-900 p-2 text-sm font-medium text-stone-300 hover:bg-stone-800 transition-colors duration-300'>NextJs</span>
            <span className='mr-3 mb-2 rounded bg-stone-900 p-2 text-sm font-medium text-stone-300 hover:bg-stone-800 transition-colors duration-300'>Puppeeter</span>
            <span className='mr-3 mb-2 rounded bg-stone-900 p-2 text-sm font-medium text-stone-300 hover:bg-stone-800 transition-colors duration-300'>NeonDB</span>
            <span className='mr-3 mb-2 rounded bg-stone-900 p-2 text-sm font-medium text-stone-300 hover:bg-stone-800 transition-colors duration-300'>Prisma</span>
          </div>
        </motion.div>
      </div>

      {/* Project 3 */}
      <div className='mb-16 flex flex-wrap items-center'>
      <motion.div 
    whileInView={{ opacity: 1, x: 0 }}
    initial={{ opacity: 0, x: -100 }}
    transition={{ duration: 1 }}
    className='w-full md:w-2/5 lg:w-1/3 mb-8 md:mb-0'
>
    <a href='https://hackathon-club-frontend.vercel.app/home' target='_blank' className="block relative group">
        <div className="overflow-hidden rounded-xl">
            <img 
                src={project3} 
                alt="Hackathon Club Website" 
                className='w-full rounded-xl transition-transform duration-300 group-hover:scale-105 group-hover:blur-sm'
            />
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100 rounded-xl">
            <span className="text-white font-bold px-4 py-2 bg-black bg-opacity-50 rounded">
                View Project
            </span>
        </div>
    </a>
</motion.div>

        <motion.div
          whileInView={{opacity:1,x:0}}
          initial={{opacity:0,x:100}}
          transition={{duration:1}}
          className='w-full md:w-3/5 lg:w-2/3 md:pl-8'>
          <a href='https://hackathon-club-frontend.vercel.app/home' className="group inline-flex items-center" target='_blank'>
            <h3 className='mb-2 font-semibold text-2xl group-hover:text-stone-300  transition-colors duration-300'>Hackathon Club Website</h3>
            <FaUpRightFromSquare  className="ml-2 text-sm opacity-0 group-hover:opacity-100 transition-all duration-300" />
          </a>
          <p className='mb-4 text-stone-400'>
            Offical Hackathon Club Website for my college is a comprehensive platform where users can discover hackathons, register for them, build personalized profiles to highlight their skills, and connect with others through email. This fosters collaboration and networking among participants.
          </p>
          <div className="flex space-x-4 items-center">
            <a 
              className='text-2xl transition-transform duration-300 hover:scale-110 hover:text-stone-300'  
              href='https://github.com/sanatan-dive/Hackathon-Club-Website' 
              target='_blank'
              title="View Code"
            >
              <FaGithub />
            </a>
            <a 
              className='text-2xl transition-transform duration-300 hover:scale-110 hover:text-stone-300'  
              href='https://hackathon-club-frontend.vercel.app/home' 
              target='_blank'
              title="View Live Site"
            >
              <FaUpRightFromSquare />
            </a>
          </div>
          <div className='mt-4 flex flex-wrap'>
            <span className='mr-3 mb-2 rounded bg-stone-900 p-2 text-sm font-medium text-stone-300 hover:bg-stone-800 transition-colors duration-300'>MERN</span>          
            <span className='mr-3 mb-2 rounded bg-stone-900 p-2 text-sm font-medium text-stone-300 hover:bg-stone-800 transition-colors duration-300'>Tailwind</span>
            <span className='mr-3 mb-2 rounded bg-stone-900 p-2 text-sm font-medium text-stone-300 hover:bg-stone-800 transition-colors duration-300'>Framer-Motion</span>
          </div>
        </motion.div>
      </div>
      
    </div>
    </section>  
  );
}

export default Projects;