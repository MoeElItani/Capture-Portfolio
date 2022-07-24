import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useLocation } from 'react-router-dom'
import { MovieState } from '../movieState'
// Framer Motion
import { motion } from 'framer-motion'
import { pageAnimation } from '../Animation'

const MovieDetail = () => {
   const location = useLocation()
   const url = location.pathname

   // State
   const [movies, setMovies] = useState(MovieState)
   const [movie, setMovie] = useState(null)
   // UseEffect
   useEffect(() => {
      const currentMovie = movies.filter(
         (stateMovie) => stateMovie.url === url
      )
      setMovie(currentMovie[0])
   }, [movies, url])

   console.log(movie)
   return (
      <motion.div
         variants={pageAnimation}
         initial='hidden'
         animate='show'
         exit={pageAnimation.exit}
      >
         {movie && (
            <Details>
               <HeadLine>
                  <h2>{movie.title}</h2>
                  <img
                     src={movie.mainImg}
                     alt={`${movie.title} movie`}
                  />
               </HeadLine>
               <Awards>
                  {movie.awards.map((award) => (
                     <Award
                        title={award.title}
                        description={award.description}
                        key={award.title}
                     />
                  ))}
               </Awards>
               <ImageDisplay>
                  <img src={movie.secondaryImg} alt='movie' />
               </ImageDisplay>
            </Details>
         )}
      </motion.div>
   )
}

const Details = styled.div`
   color: #fff;
`
const HeadLine = styled.div`
   min-height: 90vh;
   padding-top: 20rem;
   position: relative;
   h2 {
      position: absolute;
      top: 10%;
      left: 50%;
      transform: translate(-50%, -10%);
   }
   img {
      width: 100%;
      height: 70vh;
      object-fit: cover;
   }
`
const Awards = styled.div`
   min-height: 80vh;
   display: flex;
   margin: 5rem 0;
   align-items: center;
   justify-content: space-around;
`
const AwardStyle = styled.div`
   padding: 5rem;
   h3 {
      font-size: 2rem;
   }
   .line {
      width: 75%;
      background: #23d997;
      height: 0.5rem;
      margin: 1rem 0;
   }
   p {
      padding: 2rem 0;
   }
`
const ImageDisplay = styled.div`
   min-height: 50vh;
   img {
      width: 100%;
      height: 100vh;
      object-fit: cover;
   }
`

const Award = ({ title, description }) => {
   return (
      <AwardStyle>
         <h3>{title}</h3>
         <div className='line' />
         <p>{description}</p>
      </AwardStyle>
   )
}

export default MovieDetail
