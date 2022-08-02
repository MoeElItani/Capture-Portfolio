import styled from 'styled-components'
import { motion } from 'framer-motion'

// Styled Components
export const About = styled(motion.div)`
   min-height: 90vh;
   display: flex;
   align-items: center;
   justify-content: space-between;
   padding: 5rem 10rem;
   color: #fff;
   @media (max-width: 1300px) {
      display: block;
      padding: 2rem;
      text-align: center;
   }
   @media (max-width: 1700px) {
      h1,
      h2,
      span {
         font-size: 2.5rem;
      }
      h3,
      h4,
      p,
      button {
         font-size: 1.5rem;
      }
   }
`
export const Description = styled(motion.div)`
   flex: 1;
   padding-right: 5rem;
   z-index: 2;
   h2 {
      font-weight: lighter;
   }
   @media (max-width: 1300px) {
      padding: 0;
      button {
         margin: 2rem 0 5rem 0;
      }
   }
`
export const Image = styled(motion.div)`
   z-index: 2;
   flex: 1;
   overflow: hidden;
   img {
      width: 100%;
      height: 80vh;
      object-fit: cover;
   }
`
export const Hide = styled(motion.div)`
   overflow: hidden;
`
