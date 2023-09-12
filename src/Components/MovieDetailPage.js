import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { API_OPTIONS, IMG_CDN_URL } from "../Utlis/Constant";
import Footer from "./Footer";
const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movies, setMovies] = useState(null);
  const [video, setVideo] = useState(null);
  useEffect(() => {
    fetchMovies();
    fetchMovieVideo();
  },
   //eslint-disable-next-line
  []);

  const fetchMovies = async () => {
    try {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/" + movieId + "?language=en-US",
        API_OPTIONS
      );
      const json = await data.json();
      console.log(json);
      setMovies(json);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchMovieVideo = async () => {
    try {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/" +
          movieId +
          "/videos?language=en-US",
        API_OPTIONS
      );
      const json = await data.json();
      console.log(json);

      const filterData = json.results.filter(
        (video) =>
          video.type === "Trailer" ||
          video.type === "Official Trailer" ||
          video.type === "Teaser" ||
          video.type === "Featurette" ||
          video.type.toLowerCase().includes("trailer")
      );

      console.log(filterData);

      setVideo(json.results[0]);
      // setVideo(filterData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {/* DESKTOP VIEW */}
      <div className='bg-black hidden md:block'>
        <div className='w-full  aspect-video hidden md:block'>
          <iframe
            className=''
            width='100%'
            height='100%'
            src={"https://www.youtube.com/embed/" + video?.key + "?autoplay=1&mute=1"} //
            title='YouTube video player'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            allowFullscreen></iframe>
        </div>
      </div>
      <div className='absolute hidden md:block top-[75px] h-screen w-screen bg-gradient-to-r from-black'>
        <div className='text-white absolute ml-14 top-[250px] '>
          <h1 className='font-semiboldbold text-6xl'>{movies?.title}</h1>
          <p className='mt-2 w-[60%]'>{movies?.overview}</p>
          <div className='flex ml-[-15px] mt-6'>
            {movies?.genres?.map((genre) => {
              return (
                <p
                  key={genre?.id}
                  className='rounded-full ml-2 px-4 py-2 bg-brand-charcoal text-white'>
                  {genre?.name}
                </p>
              );
            })}
          </div>
        </div>
      </div>

      {/* MOBILE VIEW */}
      <div className='md:hidden bg-black pt-4'>
        <img
          className=' w-[90%] border-[1px] border-brand-beige  mx-auto rounded-xl'
          src={IMG_CDN_URL + movies?.poster_path}
          alt='movie poster'
        />
        
        <p className='text-sm text-left px-4 py-2 w-[90%] ml-5 mt-8  border-[1px] border-teal-200 rounded-lg text-white'>
          {movies?.overview}
        </p>
        <div className='flex flex-wrap left-4 absolute top-6  mt-6 '>
          {movies?.genres?.map((genre) => {
            return (
              <p
                key={genre?.id}
                className='rounded-full m-2 px-4 py-2 bg-black text-white'>
                {genre?.name}
              </p>
            );
          })}
        </div>
      </div>

      <Footer/>
    </>
  );
};

export default MovieDetailsPage;