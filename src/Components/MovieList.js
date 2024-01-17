import MovieCards from './MovieCards'

const MovieList = ({title , movies}) => {
  return (
    <div className='px-6'>
        <h1 className='text-lg py-4 text-white'>{title}</h1>
        <div className='flex overflow-x-scroll cursor-grabbing'>
        <div className='flex  pb-2 '>
            {
                movies?.map((movie) => (
                    <MovieCards key={movie.id} posterPath={movie.poster_path} id={movie?.id} />
                ) )
            }
       
        </div>
        </div>
       
    </div>
  )
}

export default MovieList