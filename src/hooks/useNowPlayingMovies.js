import { useDispatch } from "react-redux";
import { NowPlayingURL, options } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const nowPlayingMovies = async () => {
    const data = await fetch(NowPlayingURL, options);
    const json = await data.json();
    dispatch(addNowPlayingMovies(json.results));
    //console.log(json.results);
  };
  useEffect(() => {
    nowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
