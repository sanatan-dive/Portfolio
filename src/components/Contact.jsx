import React from 'react';
import { CiMail } from "react-icons/ci";
import { CONTACT } from '../constants';
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id='contact'>
    <div className='border-t border-stone-900 pb-20'>
        <motion.h2 
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.5 }}
            className='my-10 text-center text-4xl'>
            Get in Touch
        </motion.h2>
        <div className='text-center tracking-tighter'>
            {/* Uncomment and update these lines if needed
            <p className='my-4'>
                {CONTACT.address}
            </p>
            <p className='my-4'>
                {CONTACT.phoneNo}
            </p> */}
            <motion.a
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className='my-4 inline-flex items-center'
                href="mailto:sanatansharma350@gmail.com"
                target='_blank'>
                <CiMail className='text-4xl inline mx-2' />
                {CONTACT.email} {/* Ensure CONTACT.email is defined */}
            </motion.a>
        </div>
    </div>
    </section>
  );
}

export default Contact;
