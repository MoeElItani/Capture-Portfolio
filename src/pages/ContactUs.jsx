import React from 'react'
import ScrollTop from '../components/ScrollTop'
// Framer Motion
import { motion } from 'framer-motion'
import { pageAnimation, titleAnim } from '../Animation'
import styled from 'styled-components'

const ContactUs = () => {
   return (
      <ContactStyle
         variants={pageAnimation}
         initial='hidden'
         animate='show'
         exit='exit'
         style={{ background: '#fff' }}
      >
         <Title>
            <Hide>
               <motion.h2 variants={titleAnim}>
                  Get in touch.
               </motion.h2>
            </Hide>
         </Title>
         <div>
            <Hide>
               <Social variants={titleAnim}>
                  <Circle />
                  <a
                     href='https://whatsapp.com'
                     target='_blank'
                     rel='noreferrer'
                  >
                     Send Us A Message
                  </a>
               </Social>
            </Hide>
            <Hide>
               <Social variants={titleAnim}>
                  <Circle />
                  <a
                     href='https://gmail.com'
                     target='_blank'
                     rel='noreferrer'
                  >
                     Send an Email
                  </a>
               </Social>
            </Hide>
            <Hide>
               <Social variants={titleAnim}>
                  <Circle />
                  <a
                     href='https://www.linktree.com'
                     target='_blank'
                     rel='noreferrer'
                  >
                     Social Media
                  </a>
               </Social>
            </Hide>
            <ScrollTop />
         </div>
      </ContactStyle>
   )
}

const ContactStyle = styled(motion.div)`
   padding: 5rem 10rem;
   color: #353535;
   min-height: 90vh;
   @media (max-width: 1300px) {
      padding: 2rem;
   }
`
const Title = styled(motion.div)`
   margin-bottom: 2.5rem;
   color: #000;
   @media (max-width: 1300px) {
      margin-top: 3rem;
      h2 {
         font-size: 2.5rem;
      }
   }
`
const Hide = styled(motion.div)`
   overflow: hidden;
`
const Circle = styled(motion.div)`
   border-radius: 50%;
   width: 3rem;
   height: 3rem;
   background: #353535;
`
const Social = styled(motion.div)`
   display: flex;
   align-items: center;
   a {
      margin: 2rem;
      text-decoration: none;
      color: #000;
      font-size: 2rem;
      @media (max-width: 1300px) {
         font-size: 1.5rem;
      }
   }
`

export default ContactUs
