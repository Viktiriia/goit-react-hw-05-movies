import { useEffect, useState, useRef,  Suspense } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';

import { getFullInformationMovies } from 'services/api';
import { Loader } from 'components/Loader/Loader';
import { Container, BackButton, List , LinkEl, Links} from './MovieDetails.styled';

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
  const defaultImg = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhaDnzMN7FM09igiYzDa2-6tJUO8akDyCZ4A&usqp=CAU';

  useEffect(() => {
    try {
      (async () => {
        setIsLoading(true);
        const data = await getFullInformationMovies(movieId);
        setMovieInfo(data);
        setIsLoading(false);
      })();
    } catch (error) {
      setIsLoading(false);
    }
  }, [movieId]);
  return (
    <main>
      <BackButton to={backLink.current}> ← Go back </BackButton>
    
        {isLoading && <Loader />}
        {title && (
          <Container >
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
              
                
                <List>
              <LinkEl>
                <Links to="cast">Cast</Links>
              </LinkEl>

              <LinkEl>
                <Links to="reviews">Reviews</Links>
              </LinkEl>
            </List>
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
