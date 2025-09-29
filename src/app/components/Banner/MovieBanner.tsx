"use client";

import { useEffect, useRef, useState } from "react";
import { Movie } from "@/api/moviesApi";
import styles from "./MovieBanner.module.css";

type Props = {
  movies: Movie[];
};

export default function MovieBanner({ movies }: Props) {
  const [randomMovies, setRandomMovies] = useState<Movie[]>([]);
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const intervalRef = useRef<number | null>(null);
  const timeoutRef = useRef<number | null>(null);

  // elegir 5 pelis aleatorias cuando cambian las movies
  useEffect(() => {
    if (!movies || movies.length === 0) return;
    const shuffled = [...movies].sort(() => 0.5 - Math.random());
    setRandomMovies(shuffled.slice(0, Math.min(5, shuffled.length)));
    setCurrent(0);
  }, [movies]);

  // autoplay: iniciar intervalo que hace fade-out => cambia slide => fade-in
  useEffect(() => {
    const startAutoplay = () => {
      if (intervalRef.current) window.clearInterval(intervalRef.current);
      intervalRef.current = window.setInterval(() => {
        // inicia transición (fade out)
        setIsTransitioning(true);
        // después de 550ms cambia la slide y desactiva transición (fade in)
        timeoutRef.current = window.setTimeout(() => {
          setCurrent((prev) =>
            randomMovies.length ? (prev + 1) % randomMovies.length : 0
          );
          setIsTransitioning(false);
        }, 550);
      }, 6000); // cada 6s
    };

    if (randomMovies.length > 0) startAutoplay();

    return () => {
      if (intervalRef.current) window.clearInterval(intervalRef.current);
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    };
  }, [randomMovies]);

  // manual click en dot
  const goTo = (index: number) => {
    if (index === current) return;
    // limpiar timers para evitar solapamientos
    if (intervalRef.current) window.clearInterval(intervalRef.current);
    if (timeoutRef.current) window.clearTimeout(timeoutRef.current);

    setIsTransitioning(true);
    timeoutRef.current = window.setTimeout(() => {
      setCurrent(index);
      setIsTransitioning(false);

      // reiniciar autoplay
      intervalRef.current = window.setInterval(() => {
        setIsTransitioning(true);
        timeoutRef.current = window.setTimeout(() => {
          setCurrent((prev) =>
            randomMovies.length ? (prev + 1) % randomMovies.length : 0
          );
          setIsTransitioning(false);
        }, 550);
      }, 6000);
    }, 420);
  };

  if (randomMovies.length === 0) return null;
  const movie = randomMovies[current];

  return (
    <div className={styles.banner}>
      {/* fondo (estático, mejora estética; poster + info hacen la transición) */}
      <div
        className={styles.bg}
        style={{ backgroundImage: `url(${movie.Link})` }}
        aria-hidden
      />

      <div className={styles.overlay} />

      {/* content hace fade usando la clase 'fade' */}
      <div className={`${styles.content} ${isTransitioning ? styles.fade : ""}`}>
        <img src={movie.Link} alt={movie.Name} className={styles.poster} />

        <div className={styles.info}>
          <h1 className={styles.title}>{movie.Name}</h1>
          <p className={styles.description}>{movie.Description}</p>
          <p className={styles.score}>⭐ {movie.Score}/10</p>
        </div>
      </div>

      <div className={styles.dots}>
        {randomMovies.map((_, i) => (
          <button
            key={i}
            aria-label={`Slide ${i + 1}`}
            className={`${styles.dot} ${i === current ? styles.active : ""}`}
            onClick={() => goTo(i)}
          />
        ))}
      </div>
    </div>
  );
}
