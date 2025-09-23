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
      {/* Imagen de la película */}
      <img src={movie.Link} alt={movie.Name} className={styles.image} />

      {/* Overlay que aparece al hacer hover */}
      <div className={styles.overlay}>
        <h2 className={styles.title}>{movie.Name}</h2>

        <p className={styles.score}>
          {movie.Score}/10 • {movie.Year}
        </p>

        <p className={styles.description}>{movie.Description}</p>

        <p className={styles.meta}>
          <strong>Género:</strong> {movie.Genre}
        </p>

        <p className={styles.meta}>
          <strong>Comentarios:</strong> {movie.Comments}
        </p>
      </div>
    </div>
  );
}
