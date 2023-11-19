import { useState, useEffect } from 'react';
import { getTrendingMovies } from '../../services/api';
import { Element, Title, LinkDetails } from './Home.styled';
import { Loader } from 'components/Loader/Loader';

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
                <LinkDetails to={`/movies/${id}`}>{title || name}</LinkDetails>
              </Element>
            ))
          : <Loader />}
      </ul>
    </main>
  );
};

export default Home;
