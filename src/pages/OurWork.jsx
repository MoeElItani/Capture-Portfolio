import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
// Images
import athlete from '../img/athlete-small.png'
import theracer from '../img/theracer-small.png'
import goodtimes from '../img/goodtimes-small.png'

const OurWork = () => {
   return (
      <Work>
         <Movie>
            <h2>The Athlete</h2>
            <div className='line' />
            <Link to='/work/the-athlete'>
               <img src={athlete} alt='athlete movie' />
            </Link>
         </Movie>
         <Movie>
            <h2>The Racer</h2>
            <div className='line' />
            <Link to='/work/the-racer'>
               <img src={theracer} alt='The Racer movie' />
            </Link>
         </Movie>
         <Movie>
            <h2>Good Times</h2>
            <div className='line' />
            <Link to='/work/good-times'>
               <img src={goodtimes} alt='Good Times movie' />
            </Link>
         </Movie>
      </Work>
   )
}

const Work = styled.div`
   min-height: 100vh;
   overflow: hidden;
   padding: 5rem 10rem;
   h2 {
      padding: 1rem 0;
   }
`
const Movie = styled.div`
   padding-bottom: 10rem;
   color: #eee;
   .line {
      height: 0.5rem;
      background: #ccc;
      margin-bottom: 3rem;
   }
   img {
      width: 100%;
      height: 70vh;
      object-fit: cover;
   }
`

export default OurWork