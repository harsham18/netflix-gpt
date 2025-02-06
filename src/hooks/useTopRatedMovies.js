import { useDispatch } from "react-redux";
import { options, TopRatedMoviesURL } from "../utils/constants";
import { addTopRatedMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  const getTopRatedMovies = async () => {
    const data = await fetch(TopRatedMoviesURL, options);
    const json = await data.json();
    dispatch(addTopRatedMovies(json.results));
    //console.log(json.results);
  };
  useEffect(() => {
    getTopRatedMovies();
  }, []);
};

export default useTopRatedMovies;
