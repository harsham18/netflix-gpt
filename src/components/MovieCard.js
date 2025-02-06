import { POSTER_CDN_URL } from "../utils/constants";

const MovieCard = ({ poster }) => {
  return (
    <div className="w-36 pr-4">
      <img alt="posterIMG" src={POSTER_CDN_URL + poster} />
    </div>
  );
};

export default MovieCard;
