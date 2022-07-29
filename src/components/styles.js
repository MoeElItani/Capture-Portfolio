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
`
export const Description = styled(motion.div)`
   flex: 1;
   padding-right: 5rem;
   z-index: 2;
   h2 {
      font-weight: lighter;
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
