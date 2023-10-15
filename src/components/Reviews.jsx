import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from 'services/api';

const Reviews = () => {
  const [reviews, setReviews] = useState();
  const [loading, setLoading] = useState();
  const { movieId } = useParams();

  useEffect(() => {
    (async () => {
      try {
        const { results } = await getReviews(movieId);
        setReviews(results);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    })();
  }, [movieId]);

  return (
    <>
      {loading && 'Loading'}

      {!loading && reviews && (
        <ul>
          {reviews.map(({ author, content, id }) => (
            <li key={id}>
              <strong>Author: {author}</strong>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      )}

      {!loading && reviews?.length === 0 && <p>No reviews for this movie.</p>}
    </>
  );
};

export default Reviews;
