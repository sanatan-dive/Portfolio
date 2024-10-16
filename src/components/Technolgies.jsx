import React from 'react'
import {RiReactjsLine, RiTailwindCssFill} from 'react-icons/ri'
import { FaCss3Alt, FaHtml5, FaNodeJs } from "react-icons/fa";
import { IoLogoJavascript, IoNutrition } from "react-icons/io5";
import {animate, motion, stagger} from "framer-motion"

const iconVariants = (duration) => ({
    inital: {y: -10},
    animate:{
        y:[10,-10],
        transition:{
            duration:duration,
            repeat:Infinity,
            ease:'linear',
            repeatType:'reverse'
        }
    }
})
const Technolgies = () => {
  return (
    <div className='pb-24'>
        <motion.h2 whileInView={{opacity:1,y:0}}
        initial={{opacity:0,y:-100}}
        transition={{duration:1.5}}
        className='my-20 text-center text-4xl'>Tech-Stack</motion.h2>
        <motion.div
        whileInView={{opacity:1,x:0}}
        initial={{opacity:0,x:-100}}
        transition={{duration:1.5}} 
        className='flex flex-wrap items-center justify-center gap-4'>
            <motion.div
             initial = "inital"
             animate = "animate"
             variants = {iconVariants(2.5)}>
               
                <FaHtml5 className='text-7xl text-orange-500'/>
            </motion.div>
            <motion.div
             initial = "inital"
             animate = "animate"
             variants = {iconVariants(1.5)}>
                <FaCss3Alt className='text-7xl text-blue-500'/>
                </motion.div>
            <motion.div
             initial = "inital"
             animate = "animate"
             variants = {iconVariants(2.5)}>
                <IoLogoJavascript className='text-7xl text-yellow-500'/>
                </motion.div>
            <motion.div
             initial = "inital"
             animate = "animate"
             variants = {iconVariants(1.5)}>
                <RiTailwindCssFill className='text-7xl text-cyan-600'/>
                </motion.div>
            <motion.div
             initial = "inital"
             animate = "animate"
             variants = {iconVariants(2.5)}>
                <FaNodeJs className='text-7xl text-green-400'/>
                </motion.div>
            
            <motion.div
             initial = "inital"
             animate = "animate"
             variants = {iconVariants(1.5)}>
                <RiReactjsLine className='text-7xl text-cyan-400'/>
            </motion.div>
        </motion.div>
    </div>
  )
}

export default Technolgies