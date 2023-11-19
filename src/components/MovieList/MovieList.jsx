import { Link, useLocation } from 'react-router-dom';
import { MoviesList, Title } from '../../pages/MovieDetails/MovieDetails.styled';

const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w200';
const defaultImg =
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd-Z3topWIzyE3XNK9nlyB0hjDqnXazy2yqg&usqp=CAU';

const MovieList = ({ movies }) => {
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

export default MovieList;
