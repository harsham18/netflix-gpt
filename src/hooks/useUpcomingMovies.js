import { useDispatch } from "react-redux";
import { options, UpcomingMoviesURL } from "../utils/constants";
import { addUpcomingMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  const getUpcomingMovies = async () => {
    const data = await fetch(UpcomingMoviesURL, options);
    const json = await data.json();
    dispatch(addUpcomingMovies(json.results));
    //console.log(json.results);
  };
  useEffect(() => {
    getUpcomingMovies();
  }, []);
};

export default useUpcomingMovies;
