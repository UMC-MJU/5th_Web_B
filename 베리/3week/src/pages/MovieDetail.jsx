import { useLocation, useParams } from "react-router-dom";
import "../index.css";

const IMG_BASE_URL = "https://image.tmdb.org/t/p/w500/";

export default function MovieDetail() {
  const { title } = useParams();
  const { state } = useLocation();
  
  return (
    <div className="movie-detail">
      <img
        src={IMG_BASE_URL + state.poster_path}
        alt={state.title}
        className="poster-detail"
      />
      <span className="title-detail">{state.title}</span>
    </div>
  );
}