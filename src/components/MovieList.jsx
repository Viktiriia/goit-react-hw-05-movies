import { Link, useLocation } from 'react-router-dom';
import { MoviesList, Title } from '../pages/MovieDetails/MovieDetails.styled';

const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w200';
const defaultImg =
  'https://image.similarpng.com/very-thumbnail/2020/08/Movie-film-disk-with-clapper-board-vector-PNG.png';

export const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <MoviesList>
      {movies.map(({ id, poster_path, title, name }) => (
        <div key={id}>
          <Link to={`${id}`} state={{ from: location }}>
            <img
              src={poster_path ? `${BASE_IMG_URL}${poster_path}` : defaultImg}
              width={200}
              height={300}
              alt={title}
            />
            <Title>{name || title}</Title>
          </Link>
        </div>
      ))}
    </MoviesList>
  );
};
