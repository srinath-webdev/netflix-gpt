import React from 'react'
import MovieList from "./MovieList"
import { useSelector } from 'react-redux'
import Footer from "./Footer";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies)
  return (
    movies.nowPlayingMovies && (
      <div className='bg-black'>
       <div className='mt-0 md:-mt-36 md:pl-4 relative z-20 '>
       <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
       <MovieList title={"Top Rated"} movies={movies.topRatedMovies}/>
       <MovieList title={"Popular"} movies={movies.popularMovies}/>
       <MovieList title={"Upcoming Movies"} movies={movies.upcomingMovies}/>
       <Footer/>
       </div>
    </div>
    )
  )
}

export default SecondaryContainer ; 