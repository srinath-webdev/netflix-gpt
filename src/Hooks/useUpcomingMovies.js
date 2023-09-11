import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../Utlis/Constant";
import { addUpcomingMovies } from "../Utlis/moviesSlice";
import { useEffect } from "react";

const useUpcomingMovies = () => {
  // Fetch Data from TMDB API and update store

  const dispatch = useDispatch();
  const upcomingMovies = useSelector(
    (store) => store.movies.upcomingMovies
  );
  const getUpcomingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    // console.log("up"+ json.results)
    dispatch(addUpcomingMovies(json.results));
  };

  useEffect(() => {
   !upcomingMovies&& getUpcomingMovies();
  }, 
  //eslint-disable-next-line
  []);
};

export default useUpcomingMovies;
