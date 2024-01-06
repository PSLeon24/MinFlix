import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

function Movie({ title, year, summary, poster, genres}) {
    return (
        <div className="movie__data">
            <h3 className="movie__title">{title}</h3>
            <h5 className="movie__year">{year}</h5>
            <ul className="movie__genres">
                {genres.map((genres, index) => {
                    return (
                        <li key={index} className="genres__genre">{genres}</li>
                    );
                })}
            </ul>
            <img className="movie__poster" src={poster} alt={title} title={title} />
            <p className="movie__summary">{summary.slice(0, 180)}...</p>
        </div>
    );
}

Movie.propTypes = {
    title: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
    year: PropTypes.number.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
};

export default Movie;