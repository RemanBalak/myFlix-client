<<<<<<< Updated upstream
export const MovieView = ({ movie, onBackClick }) => {
=======
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import './movie-view.scss';

export const MovieView = ({ movies }) => {
  const { movieId } = useParams();

  const movie = movies.find((b) => b.id === movieId);

>>>>>>> Stashed changes
  return (
    <div>
      <div>
        <img className="w-100" src={movie.image} />
      </div>
      <div>
        <span>Title: </span>
        <span>{movie.title}</span>
      </div>
      <div>
        <span>Author: </span>
        <span>{movie.author}</span>
      </div>
<<<<<<< Updated upstream
      <button onClick={onBackClick}>Back</button>
=======
      <Link to={`/`}>
        <button className="back-button">Back</button>
      </Link>
>>>>>>> Stashed changes
    </div>
  );
};
