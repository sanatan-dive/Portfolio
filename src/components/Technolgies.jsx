import React from 'react';
import { RiReactjsLine, RiTailwindCssFill } from 'react-icons/ri';
import { FaCss3Alt, FaHtml5, FaNodeJs } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io5';
import { DiMongodb } from 'react-icons/di';
import { SiExpress, SiNextdotjs, SiTypescript, SiC, SiCplusplus } from 'react-icons/si';
import { color, motion } from 'framer-motion';
import { IconCloud } from './ui/Cloud';

const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            repeat: Infinity,
            ease: 'linear',
            repeatType: 'reverse'
        }
    }
});

const iconVariants1 = (duration) => ({
    initial: { y: 10 },
    animate: {
        y: [-10, 10],
        transition: {
            duration: duration,
            repeat: Infinity,
            ease: 'linear',
            repeatType: 'reverse'
        }
    }
});

const Technologies = () => {
  
    return (
        <section id='technologies z-50'>
        <div className='flex flex-col items-center justify-center pb-24 z-50'>
            <motion.h2 
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1.5 }}
                className='my-20 text-center text-4xl'>
                Tech-Stack
            </motion.h2>
            <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1.5 }} 
                className='flex flex-wrap items-center justify-center gap-2'>
                    
                     <IconCloud iconSlugs={['html5', 'css3', 'javascript', 'react', 'tailwindcss','bootstrap','mysql', 'node-dot-js', 'mongodb', 'express', 'next-dot-js', 'typescript', 'c', 'cplusplus','postgresql','prisma']} />

                {/* <motion.div initial="initial" animate="animate" variants={iconVariants(1.5)}>
                    <SiC className='text-7xl text-blue-600' />
                </motion.div>
                <motion.div initial="initial" animate="animate" variants={iconVariants1(1.5)}>
                    <SiCplusplus className='text-7xl text-purple-600' />
                </motion.div>
                
                <motion.div initial="initial" animate="animate" variants={iconVariants(1.5)}>
                    <FaHtml5 className='text-7xl text-orange-500' />
                </motion.div>
                <motion.div initial="initial" animate="animate" variants={iconVariants1(1.5)}>
                    <FaCss3Alt className='text-7xl text-blue-500' />
                </motion.div>
                <motion.div initial="initial" animate="animate" variants={iconVariants(1.5)}>
                    <IoLogoJavascript className='text-7xl text-yellow-500' />
                </motion.div>
                <motion.div initial="initial" animate="animate" variants={iconVariants1(1.5)}>
                    <SiTypescript className='text-6xl text-blue-500' />
                </motion.div>
                <motion.div initial="initial" animate="animate" variants={iconVariants(1.5)}>
                    <RiTailwindCssFill className='text-7xl text-cyan-600' />
                </motion.div>
                
                <motion.div initial="initial" animate="animate" variants={iconVariants1(1.5)}>
                    <DiMongodb className='text-7xl text-green-600' /> 
                </motion.div>
                <motion.div initial="initial" animate="animate" variants={iconVariants(1.5)}>
                    <SiExpress className='text-7xl text-gray-600' /> 
                </motion.div>
                <motion.div initial="initial" animate="animate" variants={iconVariants1(1.5)}>
                    <RiReactjsLine className='text-7xl text-cyan-400' />
                </motion.div>
                <motion.div initial="initial" animate="animate" variants={iconVariants(1.5)}>
                    <FaNodeJs className='text-7xl text-green-400' />
                </motion.div>
                <motion.div initial="initial" animate="animate" variants={iconVariants1(1.5)}>
                    <SiNextdotjs className='text-7xl' /> 
                </motion.div> */}
              
              
              
            </motion.div>
        </div>
        </section>
    );
}

export default Technologies;
