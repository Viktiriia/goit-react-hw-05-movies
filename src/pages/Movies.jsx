import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMovieSearch } from 'services/api';
import  MovieList  from 'components/MovieList';
import  SearchBox  from 'components/SearchBox/SearchBox';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('query') ?? '';
  const [movies, setMovies] = useState([]); // стан для зберігання фільмів

  // функція для отримання фільмів

  useEffect(() => {
    const fetchMovies = async query => {
      try {
        const { results } = await getMovieSearch(query);
        setMovies(results);
      } catch (error) {
        console.error('Error fetching movies', error);
      }
    };
    fetchMovies(movieName);
    // Отримувати фільми під час монтування компонента або зміни назви фільму
  }, [movieName]);

  const updateQueryString = query => {
    const nextParams = query !== '' ? { query } : {};
    setSearchParams(nextParams);
  };

  return (
    <main>
      <SearchBox value={movieName} onChange={updateQueryString} />
      <MovieList movies={movies} />
    </main>
  );
};
export default Movies;
