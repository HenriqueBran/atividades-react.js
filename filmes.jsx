import React, { useState } from 'react';

const MovieSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState('');

  const fetchMovies = async () => {
    try {
      const response = await fetch(`http://www.omdbapi.com/?apikey=YOUR_API_KEY&s=${searchTerm}`);
      const data = await response.json();

      if (data.Search) {
        setMovies(data.Search);
        setError('');
      } else {
        setMovies([]);
        setError(data.Error);
      }
    } catch (error) {
      console.error('Error fetching movies:', error);
      setError('Erro ao buscar filmes. Por favor, tente novamente.');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchMovies();
  };

  return (
    <div>
      <h2>Busca de Filmes</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Digite o título do filme"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit">Buscar</button>
      </form>
      {error && <p>{error}</p>}
      <ul>
        {movies.map((movie) => (
          <li key={movie.imdbID}>
            <img src={movie.Poster} alt={movie.Title} />
            <div>
              <h3>{movie.Title}</h3>
              <p>Ano: {movie.Year}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieSearch;
