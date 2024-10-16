import React from 'react'
import { CiMail } from "react-icons/ci";
import { CONTACT } from '../constants'
import {motion} from "framer-motion"
const Contact = () => {
  return (
    <div className='border-t border-stone-900 pb-20'>
        <motion.h2 
        whileInView={{opacity:1,y:0}}
        initial={{opacity:0,y:-100}}
        transition={{duration:0.5}}

        className='my-10 text-center text-4xl'>Get in Touch</motion.h2>
        <div className='text-center tracking-tighter'>
            {/* <p className='my-4'>
                {CONTACT.address}
            </p>
            <p className='my-4'>
                {CONTACT.phoneNo}
            </p> */}
            <motion.a
            whileInView={{opacity:1,y:0}}
            initial={{opacity:0,y:-100}}
            transition={{duration:0.5}}
            className='my-4'
            href="mailto:sanatansharma350@gmail.com"
            target='_blank'>
          <CiMail className='text-4xl inline mx-2'  />{CONTACT.email}
            </motion.a>
        </div>
    </div>
  )
}

export default Contact