import React from 'react'
// Framer Motion
import { motion } from 'framer-motion'
import { pageAnimation } from '../Animation'

const ContactUs = () => {
   return (
      <motion.div
         variants={pageAnimation}
         initial='hidden'
         animate='show'
         exit='exit'
         style={{background:'#fff'}}
      >
         <h1>Contact Us</h1>
      </motion.div>
   )
}

export default ContactUs
