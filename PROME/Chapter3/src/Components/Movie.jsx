import "../index.css";
import { useState } from "react";
function Movie(props) {
  const [isHovering, setIsHovering] = useState(0);
  return (
    <span
      className="wrapper"
      onMouseOver={() => setIsHovering(1)}
      onMouseOut={() => setIsHovering(0)}
    >
      <div className="overview">
        {isHovering ? (
          <div>
            <div className="hovername">{props.name}</div>
            <div className="hoveroverview">
              {props.overview.length > 200 ? (
                <div>{props.overview.substr(0, 200) + " ..."}</div>
              ) : (
                <div>{props.overview}</div>
              )}
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
      <img
        alt={props.name + " poster"}
        className="poster"
        src={"https://www.themoviedb.org/t/p/original/" + props.poster}
      ></img>
      <div className="info">
        <span className="namebox">{props.name}</span>
        <span className="date">
          {Number(props.date.substr(5, 2))}.{Number(props.date.substr(8, 2))}
        </span>
      </div>
    </span>
  );
}

export default Movie;
