import React, { useState } from 'react'

const IMG_BASE_URL = "https://www.themoviedb.org/t/p/original/";

export function Movie({ title, poster_path, vote_average, overview }) {
  const [showDescription, setShowDescription] = useState(false); 

  return (
    <div 
      className="movie-container"
      onMouseEnter={() => setShowDescription(true)} // 마우스가 올라갔을 때 설명을 표시
      onMouseLeave={() => setShowDescription(false)} // 마우스가 벗어났을 때 설명을 숨김
    >
      <img src={IMG_BASE_URL + poster_path} alt='영화포스터'/>
      
      {showDescription && 
      <div className="overlay-description">
        <div className="hover-title">{title}</div>    
        <div className="hover-overview">{overview}</div>
      </div>
      }
      <div className="movie-info">
        <h4>{title}</h4>
        <span>{vote_average }</span>
      </div>
    </div>
  );
}
