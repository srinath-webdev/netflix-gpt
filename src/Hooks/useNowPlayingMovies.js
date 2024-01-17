import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../Utlis/Constant";
import { addNowPlayingMovies } from "../Utlis/moviesSlice";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
  // Fetch Data from TMDB API and update store

  const dispatch = useDispatch();
  const nowPlayingMovies = useSelector(
    (store) => store.movies.nowPlayingMovies
  );

  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_OPTIONS
    );
    const json = await data.json();

    dispatch(addNowPlayingMovies(json.results));
  };

  useEffect(
    () => {
      //if the redux store already have data then useeffect is not need for every render , if it is null then it will render
      !nowPlayingMovies && getNowPlayingMovies();
    },
    
    //eslint-disable-next-line
    []
  );
};

export default useNowPlayingMovies;
