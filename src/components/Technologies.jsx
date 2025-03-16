//eslint-disable-next-line
import React from 'react';

import {  motion } from 'framer-motion';
import { IconCloud } from './ui/Cloud';





const Technologies = () => {

    const slugs = ['html5', 'css3','huggingface', 'javascript', 'react', 'tailwindcss','bootstrap','mysql', 'node-dot-js', 'mongodb', 'express', 'next-dot-js', 'typescript', 'c', 'cplusplus','postgresql','prisma','docker','linux','redis']
  
    return (
        <section id='technologies'>
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
                className='flex flex-wrap text-white items-center bg-background overflow-hidden justify-center gap-2'>
                    
                     <IconCloud iconSlugs={slugs} />

             
              
              
              
            </motion.div>
        </div>
        </section>
    );
}

export default Technologies;
