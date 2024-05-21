import React from "react";
import '../detail.css';

function Detail({ movie }) {
  // Check if the movie object is defined
  if (!movie) {
    return null; // You can render a loading state or return nothing if movie is not defined
  }

  // Additional checks for nested properties
  const genres = movie.genres ? movie.genres.map(genre => genre.name).join(', ') : '';
  const releaseYear = movie.release_date ? ` (${movie.release_date.slice(0, 4)})` : '';

  return (
    <div className="moviecard">
      <div className="movie-poster play-trailer" />
      <div id="movie-content">
        <div className="movie-ratings">
          <span className="star">★</span>
          <span className="score">7.7</span>
          <span className="score-out-of">/ 10 (IMDB)</span>
        </div>
        <div className="movie-title">
          <a href={`http://www.imdb.com/title/${movie.id}`} target="_blank" rel="noopener noreferrer">
            {movie.title}
          </a>
          <span className="movie-year">{releaseYear}</span>
        </div>
        <div className="movie-details">
          <span className="movie-rating">{movie.adult ? 'R' : 'PG'}</span>
          <span className="movie-duration">{`${Math.floor(movie.runtime / 60)}h ${movie.runtime % 60}min`}</span>
          <span className="movie-genre">{genres}</span>
        </div>
        {/* Additional details like Director, Writer, Cast can be added here */}
        <div className="movie-synopsis">
          {movie.overview}
        </div>
        <button className="movie-trailer-btn play-trailer" type="button">
          Play trailer
        </button>
      </div>
      {/* You may include the trailer iframe here */}
    </div>
  );
}

export default Detail;
