import { useDispatch } from "react-redux";
import { options, TrendingMoviesURL } from "../utils/constants";
import { addTrendingMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useTrendingMovies = () => {
  const dispatch = useDispatch();
  const getTrendingMovies = async () => {
    const data = await fetch(TrendingMoviesURL, options);
    const json = await data.json();
    dispatch(addTrendingMovies(json.results));
    //console.log(json.results);
  };
  useEffect(() => {
    getTrendingMovies();
  }, []);
};

export default useTrendingMovies;
