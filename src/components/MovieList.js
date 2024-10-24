import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title,movies}) => {
    console.log(movies);
      // Check if movies is not null, undefined, and has at least one element
  if (!movies || movies.length === 0) {
    return ; // Render this if movies is null or empty
  }
    
    
  return (
    <div className='px-6'>
       <h1 className='text-lg md:text-3xl py-4 text-white'>
        {title}</h1>
        <div className='flex overflow-x-scroll '>
           
            <div className='flex'>
              {movies.map(movie =><MovieCard key ={movie.id} posterPath={movie.poster_path}/>)}
            
            </div>
        </div>
        </div>
  )
}

export default MovieList