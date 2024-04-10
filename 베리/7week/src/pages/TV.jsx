import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../index.css";

const IMG_BASE_URL = "https://image.tmdb.org/t/p/w500/";

const TV = ({ name, poster_path, vote_average, overview }) => {
  const navigate = useNavigate();
    
  const handleClickImage = () => {
    navigate(`/TV/${name}`, { state: { name, poster_path, overview } });
  };

  return (
    <div className="tv-container" onClick={handleClickImage}>
      <img className="tv-poster" src={IMG_BASE_URL + poster_path} alt='TV 포스터' />
      
      <div className="tv-info">
        <h4>{name}</h4>
        <span>{vote_average}</span>
      </div>
    </div>
  );
};

export default TV;