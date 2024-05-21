import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../movie-page.css';

function Movie() {
  const [netflixOriginals, setNetflixOriginals] = useState([]);
  const [trendingNow, setTrendingNow] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [actionMovies, setActionMovies] = useState([]);
  const [comedyMovies, setComedyMovies] = useState([]);
  const [romanceMovies, setRomanceMovies] = useState([]);
  const [headerMovie, setHeaderMovie] = useState({});

  useEffect(() => {
    const apiKey = '7478814186a1020d6e3600d6ac1724a2';

    // Fetch Netflix Originals
    axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=${apiKey}&with_networks=213`)
      .then(response => setNetflixOriginals(response.data.results))
      .catch(error => console.error('Error fetching Netflix Originals:', error));

    // Fetch Trending Now
    axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${apiKey}`)
      .then(response => setTrendingNow(response.data.results))
      .catch(error => console.error('Error fetching Trending Now:', error));

    // Fetch Top Rated
    axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`)
      .then(response => setTopRated(response.data.results))
      .catch(error => console.error('Error fetching Top Rated:', error));

    // Fetch Action Movies
    axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=28`)
      .then(response => setActionMovies(response.data.results))
      .catch(error => console.error('Error fetching Action Movies:', error));

    // Fetch Comedy Movies
    axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=35`)
      .then(response => setComedyMovies(response.data.results))
      .catch(error => console.error('Error fetching Comedy Movies:', error));

    // Fetch Romance Movies
    axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=10749`)
      .then(response => setRomanceMovies(response.data.results))
      .catch(error => console.error('Error fetching Romance Movies:', error));

    // Fetch details for the header movie (select one from Netflix Originals)
    if (netflixOriginals.length > 0) {
      axios.get(`https://api.themoviedb.org/3/movie/${netflixOriginals[0].id}?api_key=${apiKey}`)
        .then(response => setHeaderMovie(response.data))
        .catch(error => console.error('Error fetching header movie details:', error));
    }

  }, [netflixOriginals]); // Added netflixOriginals as a dependency so that we fetch headerMovie details when Netflix Originals are loaded

  return (
    <>
      {/* nav */}
      <div id="nav" className="nav">
        <img className="nav__logo" src="/logo.svg" alt="" />
        <img className="nav__avatar" src="/netflix-avatar.png" alt="" />
      </div>

     {/* header */}
  <header className="banner-1">
    <div className="banner__contents">
      <h1 className="banner__title">Oppenheimer</h1>
      <div className="banner__buttons">
        <button className="banner__button">Play</button>
        <button className="banner__button">My List</button>
      </div>
      <h1 className="banner__description">
      J. Robert Oppenheimer (born Julius Robert Oppenheimer; /ˈɒpənhaɪmər/ OP-ən-hy-mər; April 22, 1904 – February 18, 1967) was an American theoretical physicist. He was director of the Manhattan Project's Los Alamos Laboratory during World War II and is often called the "father of the atomic bomb".
      </h1>
    </div>
    <div className="banner--fadeBottom" />
  </header>
      {/* Netflix Originals */}
      <div className="row row__large">
        <h2>NETFLIX ORIGINALS</h2>
        <div className="row__posters">
          {netflixOriginals.map(movie => (
            <img
              key={movie.id}
              className="row__poster row__posterLarge"
              src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} 
              alt={movie.title}
            />
          ))}
        </div>
      </div>

      {/* Trending Now */}
      <div className="row row__large">
        <h2>Trending Now</h2>
        <div className="row__posters">
          {trendingNow.map(movie => (
            <img
              key={movie.id}
              className="row__poster row__posterLarge"
              src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} 
              alt={movie.title}
            />
          ))}
        </div>
      </div>

      {/* Top Rated */}
      <div className="row row__large">
        <h2>Top Rated</h2>
        <div className="row__posters">
          {topRated.map(movie => (
            <img
              key={movie.id}
              className="row__poster row__posterLarge"
              src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} 
              alt={movie.title}
            />
          ))}
        </div>
      </div>

      {/* Action Movies */}
      <div className="row row__large">
        <h2>Action Movies</h2>
        <div className="row__posters">
          {actionMovies.map(movie => (
            <img
              key={movie.id}
              className="row__poster row__posterLarge"
              src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} 
              alt={movie.title}
            />
          ))}
        </div>
      </div>

      {/* Comedy Movies */}
      <div className="row row__large">
        <h2>Comedy Movies</h2>
        <div className="row__posters">
          {comedyMovies.map(movie => (
            <img
              key={movie.id}
              className="row__poster row__posterLarge"
              src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} 
              alt={movie.title}
            />
          ))}
        </div>
      </div>

      {/* Romance Movies */}
      <div className="row row__large">
        <h2>Romance Movies</h2>
        <div className="row__posters">
          {romanceMovies.map(movie => (
            <img
              key={movie.id}
              className="row__poster row__posterLarge"
              src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} 
              alt={movie.title}
            />
          ))}
        </div>
      </div>
        {/* Display Movie Thumbnails */}
        
      {/* Add more sections for other categories */}
    </>
  );
}

export default Movie;
