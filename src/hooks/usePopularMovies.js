import { useDispatch } from "react-redux";
import { options, PopularMoviesURL } from "../utils/constants";
import { addPopularMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const getPopularMovies = async () => {
    const data = await fetch(PopularMoviesURL, options);
    const json = await data.json();
    dispatch(addPopularMovies(json.results));
    //console.log(json.results);
  };
  useEffect(() => {
    getPopularMovies();
  }, []);
};

export default usePopularMovies;
