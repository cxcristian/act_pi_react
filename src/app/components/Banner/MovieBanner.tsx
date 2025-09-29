"use client";

import { useEffect, useState } from "react";
import { Movie } from "@/api/moviesApi";
import styles from "./MovieBanner.module.css";

type Props = {
  movies: Movie[];
};

export default function MovieBanner({ movies }: Props) {
  const [movie, setMovie] = useState<Movie | null>(null);

  useEffect(() => {
    if (movies.length > 0) {
      const randomIndex = Math.floor(Math.random() * movies.length);
      setMovie(movies[randomIndex]);
    }
  }, [movies]);

  if (!movie) return null;

  return (
    <section
      className={styles.banner}
      style={{ backgroundImage: `url(${movie.Link})` }}
    >
      <div className={styles.overlay}>
        <h2 className={styles.title}>{movie.Name}</h2>
        <p className={styles.description}>{movie.Description}</p>
        <span className={styles.score}>⭐ {movie.Score}/10</span>
      </div>
    </section>
  );
}
