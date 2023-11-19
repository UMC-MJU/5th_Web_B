import "../index.css";
import { useState } from "react";
export default function Movie({ name, poster, date, overview }) {
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
            <div className="hovername">{name}</div>
            <div className="hoveroverview">
              {overview.length > 200 ? (
                <div>{overview.substr(0, 200) + " ..."}</div>
              ) : (
                <div>{overview}</div>
              )}
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
      <img
        alt={name + " poster"}
        className="poster"
        src={"https://www.themoviedb.org/t/p/w600_and_h900_bestv2/" + poster}
      ></img>
      <div className="info">
        <span className="namebox">{name}</span>
        <span className="date">
          {Number(date.substr(5, 2))}.{Number(date.substr(8, 2))}
        </span>
      </div>
    </span>
  );
}
