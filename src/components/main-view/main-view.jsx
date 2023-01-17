import { useState } from 'react';
import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';

export const MainView = () => {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: 'Inception',
      image: 'Inception.png',
      genre: 'Thriller',
      author: 'Christopher Nolan',
      Description:
        "It starred Leonardo DiCaprio as a corporate spy who steals secrets via a technology that allows him to enter people's dreams.",
    },
    {
      id: 2,
      title: 'Gladiator',
      image: 'Gladiator.jpg',
      genre: 'Sci-fi',
      author: 'Philip Wylie',
      Description:
        'A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.',
    },
    {
      id: 3,
      title: 'Avatar',
      image: 'Avatar.png',
      Genre: 'Action',
      author: 'James Cameron',
      description:
        'A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.',
    },
  ]);

  const [selectedMovie, setSelectedMovie] = useState(null);

  if (selectedMovie) {
    return (
      <MovieView
        movie={selectedMovie}
        onBackClick={() => setSelectedMovie(null)}
      />
    );
  }

  if (movies.length === 0) {
    return <div>The list is empty!</div>;
  }

  return (
    <div>
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          onMovieClick={(newSelectedMovie) => {
            setSelectedMovie(newSelectedMovie);
          }}
        />
      ))}
    </div>
  );
};
