import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../Utlis/Constant";
import { addNowPlayingMovies } from "../Utlis/moviesSlice";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
  // Fetch Data from TMDB API and update store

  const dispatch = useDispatch();

  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    console.log(json.results);
    dispatch(addNowPlayingMovies(json.results));
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, 
  //eslint-disable-next-line
  []);
};

export default useNowPlayingMovies;
