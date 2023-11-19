import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCast } from 'services/api';
import  CastItem  from 'components/CastItem/CastItem';
import { CastContainer } from './Cast.styled';
import { Loader } from 'components/Loader/Loader';

const Cast = () => {
  const [credits, setCredits] = useState([]);
  const [rejected, setRejected] = useState();
  const [loading, setLoading] = useState();
  const { movieId } = useParams();

  useEffect(() => {
    (async () => {
      try {
        const { cast } = await getCast(movieId);
        setCredits(cast);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setRejected(error.message);
      }
    })();
  }, [movieId]);

  return (
    <div>
      {loading && Loader}

      {rejected && !loading && <div>{rejected}</div>}

      {!loading && (
        <CastContainer>
          {credits.map(({ name, character, profile_path, id }) => (
            <CastItem
              key={id}
              name={name}
              character={character}
              profile_path={profile_path}
              id={id}
            />
          ))}
        </CastContainer>
      )}
    </div>
  );
};

export default Cast;
