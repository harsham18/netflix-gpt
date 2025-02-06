import { useDispatch } from "react-redux";
import { options } from "../utils/constants";
import { addTrailerVideo } from "../utils/movieSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  const getMovieTrailer = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      options
    );
    const json = await data.json();

    const filteredVideos = json.results.filter(
      (video) => video.name === "Official Trailer"
    );
    const trailerVideo = filteredVideos.length
      ? filteredVideos[0]
      : json.results[0];
    dispatch(addTrailerVideo(trailerVideo));
  };
  useEffect(() => {
    getMovieTrailer();
  }, []);
};

export default useMovieTrailer;
