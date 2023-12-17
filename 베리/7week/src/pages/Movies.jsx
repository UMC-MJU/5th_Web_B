import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../index.css";

const IMG_BASE_URL = "https://image.tmdb.org/t/p/w500/";

const Movie = ({ title, poster_path, vote_average, overview }) => {
  const navigate = useNavigate();
    
  const handleClickImage = () => {
    navigate(`/Movies/${title}`, { state: { title, poster_path, overview } });
  };

  return (
    <div className="movie-container" onClick={handleClickImage}>
      <img className="movie-poster" src={IMG_BASE_URL + poster_path} alt='영화포스터' />
      
      <div className="movie-info">
        <h4>{title}</h4>
        <span>{vote_average}</span>
      </div>
    </div>
  );
};

export default Movie;
