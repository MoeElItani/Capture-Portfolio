import React from 'react'
import home1 from '../img/home1.png'
// Styled
import styled from 'styled-components'

const AboutSection = () => {
   return (
      <About>
         <div className='description'>
            <Description>
               <Hide>
                  <h2>We work to make</h2>
               </Hide>
               <Hide>
                  <h2>
                     your <span>dreams</span> come
                  </h2>
               </Hide>
               <Hide>
                  <h2>true.</h2>
               </Hide>
            </Description>
            <p>
               Contact us for any photography or videography
               ideas that you have. we have professionals with
               amazing skills
            </p>
            <button>Contact us</button>
         </div>
         <Image>
            <img src={home1} alt='guy with a camera' />
         </Image>
      </About>
   )
}

// Styled Components
const About = styled.div`
   min-height: 9vh;
   display: flex;
   align-items: center;
   justify-content: space-between;
   padding: 5rem 10rem;
   color: #fff;
`
const Description = styled.div`
   flex: 1;
   padding-right: 5rem;
   h2 {
      font-weight: lighter;
   }
`
const Image = styled.div`
   flex: 1;
   overflow: hidden;
   img {
      width: 100%;
      height: 80vh;
      object-fit: cover;
   }
`
const Hide = styled.div`
   overflow: hidden;
`

export default AboutSection
