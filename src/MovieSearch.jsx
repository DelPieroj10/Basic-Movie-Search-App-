//import React from 'react';
import { useState } from 'react';

export const MoviesSearch = () => {

  const urlBase = 'https://api.themoviedb.org/3/search/movie'
  const API_KEY = '7ae09a23db31c952f2d7c888cba3657e'
  const URL_IMAGE = 'https://image.tmdb.org/t/p/w500'

  const [searching, setSearching] = useState('')
  const [movies, setMovies] = useState([])

  const handleInputChange = (e) => {
    setSearching(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    fetchMovies()
  }

  const fetchMovies = async () => {
    try {
      const response = await fetch(`${urlBase}?query=${searching}&api_key=${API_KEY}`)
      const data = await response.json()
      console.log(data.results)
      setMovies(data.results)
    } catch (error) {
      console.error("There's an error: ", error)
    }
  }


  return (
    <div className="container">

      <h1 className="title">MovieSearch</h1>
      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          placeholder="Write here a movie"
          value={searching}
          onChange={handleInputChange} 
        />
        <button type="submit" className="search-button">
          Search 
        </button>
      </form>

      <div className="movie-list">
        {movies.map((movie) => (
            <div key={movie.id} className="movie-card">
              <img src={`${URL_IMAGE + movie.poster_path}`} alt="{movie.title}" />
              <h2>{movie.title}</h2>
              <p>{movie.overview}</p>
            </div>
        ))}

      </div>

    </div>
  )
}
