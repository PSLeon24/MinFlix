import React from "react";
import { useLocation } from "react-router-dom";
import "./Detail.css";

function Detail() {
  const location = useLocation();

  const { title, year, summary, poster, genres } = location.state;

  return (
    <div className="detail__container">
      <img src={poster} alt={title} className="detail__poster" />
      <div className="detail__info">
        <h1 className="detail__title">{title}</h1>
        <h3 className="detail__year">{year}</h3>
        <div className="detail__genres">
          <strong>Genres:</strong>
          <ul>
            {genres.map((genre, index) => (
              <li key={index} className="detail__genre">
                {genre}
              </li>
            ))}
          </ul>
        </div>
        <p className="detail__summary">{summary}</p>
      </div>
    </div>
  );
}

export default Detail;
