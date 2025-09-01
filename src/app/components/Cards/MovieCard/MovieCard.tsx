// src/app/components/Cards/MovieCard/MovieCard.tsx

import styles from "./MovieCard.module.css";
import { Movie } from "@/api/moviesApi"; 

type Props = {
  movie: Movie;
  onSelect?: (movie: Movie) => void;
};

export default function MovieCard({ movie, onSelect }: Props) {
  return (
    <div className={styles.card} onClick={() => onSelect?.(movie)}>
      <img src={movie.Link} alt={movie.Name} className={styles.image} />
      <h2 className={styles.title}>{movie.Name}</h2>
      <p className={styles.meta}>
        {movie.Genre} • {movie.Year}
      </p>
      <p className={styles.description}>{movie.Description}</p>
      <p className={styles.score}> {movie.Score}/100</p>
      <p className={styles.comments}> {movie.Comments}</p>
    </div>
  );
}
