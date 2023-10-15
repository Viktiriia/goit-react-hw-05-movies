import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getTrendingMovies } from '../../services/api';
import { Element, Title } from './Home.styled';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const { results } = await getTrendingMovies();
        setTrendingMovies(results);
        setLoading(true);
      } catch (error) {
        console.log(error.message);
        setError(true);
        setLoading(true);
      }
    })();
  }, []);

  return (
    <main>
      <Title>Trending today</Title>
      {error && 'Error'}
      <ul>
        {loading
          ? trendingMovies.map(({ title, id, name }) => (
              <Element key={id}>
                <Link to={`/movies/${id}`}>{title || name}</Link>
              </Element>
            ))
          : 'Loading'}
      </ul>
    </main>
  );
};

export default Home;
