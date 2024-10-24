import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    <div className='bg-black' >
      <div className=' mt-0 md:-mt-52 pl-0 md:pl-12 relative z-20'>
      <MovieList title ={"Now Plaing"} movies ={movies.nowPlayingMovies}/>
      <MovieList title ={"Top rated"} movies ={movies.TopRatedMovie}/>
      <MovieList title ={"Popular"} movies ={movies.Popularmovie}/>
      <MovieList title ={"Upcoming Movies"} movies ={movies.UpcomingMovie}/>
      <MovieList title ={"Horror"} movies ={movies.nowPlayingMovies}/>
     
      </div>
    </div>
  )
}

export default SecondaryContainer