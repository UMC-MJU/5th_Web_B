import { useLocation } from "react-router-dom";
import "../index.css";

export default function MovieDetail() {
  const { state } = useLocation();
  return (
    <div className="detail">
      <img
        src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${state.poster}`}
        alt={state.name}
        className="detailposter"
      />
      <span className="detailname">{state.name}</span>
    </div>
  );
}
