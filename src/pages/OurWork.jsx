import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
// Images
import athlete from '../img/athlete-small.png'
import theracer from '../img/theracer-small.png'
import goodtimes from '../img/goodtimes-small.png'
// Framer Motion
import { motion } from 'framer-motion'
import {
   pageAnimation,
   fade,
   photoAnim,
   lineAnim,
   slider,
   sliderContainer,
   swoopAdoop,
} from '../Animation'
import { useScroll } from '../components/useScroll'

const OurWork = () => {
   const [element, controls] = useScroll()
   const [element2, controls2] = useScroll()
   return (
      <Work
         style={{ background: '#fff' }}
         variants={pageAnimation}
         initial='hidden'
         animate='show'
      >
         <motion.div variants={sliderContainer}>
            <Frame1 variants={slider}></Frame1>
            <Frame2 variants={slider}></Frame2>
            <Frame3 variants={slider}></Frame3>
            <Frame4 variants={slider}></Frame4>
         </motion.div>
         <Movie>
            <motion.h2 variants={fade}>The Athlete</motion.h2>
            <motion.div variants={lineAnim} className='line' />
            <Link to='/work/the-athlete'>
               <Hide>
                  <motion.img
                     src={athlete}
                     variants={photoAnim}
                     alt='athlete movie'
                  />
               </Hide>
            </Link>
         </Movie>
         <Movie
            variants={swoopAdoop}
            ref={element}
            animate={controls}
            initial='hidden'
         >
            <motion.h2>The Racer</motion.h2>
            <motion.div variants={lineAnim} className='line' />
            <Link to='/work/the-racer'>
               <Hide>
                  <motion.img
                     variants={photoAnim}
                     src={theracer}
                     alt='The Racer movie'
                  />
               </Hide>
            </Link>
         </Movie>
         <Movie
            variants={swoopAdoop}
            ref={element2}
            animate={controls2}
            initial='hidden'
         >
            <motion.h2 variants={fade}>Good Times</motion.h2>
            <motion.div variants={lineAnim} className='line' />
            <Link to='/work/good-times'>
               <Hide>
                  <motion.img
                     variants={photoAnim}
                     src={goodtimes}
                     alt='Good Times movie'
                  />
               </Hide>
            </Link>
         </Movie>
      </Work>
   )
}

const Work = styled(motion.div)`
   min-height: 100vh;
   overflow: hidden;
   padding: 5rem 10rem;
   h2 {
      padding: 1rem 0;
   }
`
const Movie = styled(motion.div)`
   padding-bottom: 10rem;
   color: #2a2a2a;
   .line {
      height: 0.5rem;
      background: #23d997;
      margin-bottom: 3rem;
   }
   img {
      width: 100%;
      height: 70vh;
      object-fit: cover;
   }
`
const Hide = styled(motion.div)`
   overflow: hidden;
`

// Frame Animation
const Frame1 = styled(motion.div)`
   position: fixed;
   left: 0;
   top: 10%;
   width: 100%;
   height: 100vh;
   z-index: 2;
   background: #fffebf;
`
const Frame2 = styled(Frame1)`
   background: #ff8efb;
`
const Frame3 = styled(Frame1)`
   background: #8ed2ff;
`
const Frame4 = styled(Frame1)`
   background: #8effa0;
`

export default OurWork
