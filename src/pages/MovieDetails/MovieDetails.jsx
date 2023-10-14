import { useEffect, useState, useRef,  Suspense } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { getFullInformationMovies } from 'services/api';

import { Container, BackButton, LinkEl } from './MovieDetails.styled';

const MovieDetails = () => {
  const [movieInfo, setMovieInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { state } = useLocation();
  const backLink = useRef(state?.from || '/');
  const { movieId } = useParams();
  const {
    title,
    poster_path,
    overview,
    genres,
    vote_average: score,
  } = movieInfo;
  
  const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w300';
  const defaultImg = 'https://image.similarpng.com/very-thumbnail/2020/08/Movie-film-disk-with-clapper-board-vector-PNG.png';

  useEffect(() => {
    try {
      (async () => {
        setIsLoading(true);
        const data = await getFullInformationMovies(movieId);
        console.log(data);
        setMovieInfo(data);
        setIsLoading(false);
      })();
    } catch (error) {
      setIsLoading(false);
    }
  }, [movieId]);
  return (
    <main>
      <BackButton to={backLink.current}>= Go back =</BackButton>
    
        {isLoading && 'Loading'}
        {title && (
          <Container>
            <div>
                <img
                  src={
                    poster_path ? `${BASE_IMG_URL}${poster_path}` : defaultImg
                  }

                  alt={title}
                />
                </div>
              <div>
                <h2>{title}</h2>
                <p>{score}</p>
                <h3>Overview</h3>
                <p>{overview}</p>
                <h3>Genres</h3>
                <p>{genres.map(({ name }) => name).join(' ')}</p>
              
            <ul>
              <LinkEl>
                <Link to="cast">Cast</Link>
              </LinkEl>

              <LinkEl>
                <Link to="reviews">Reviews</Link>
              </LinkEl>
            </ul>
                </div>
            
          </Container>
        )}
            <Suspense fallback={'Loading'}>
            <Outlet />
          </Suspense>
       
    
    </main>
  );
};
export default MovieDetails;
