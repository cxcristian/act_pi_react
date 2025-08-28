import MovieCard from "../MovieCard/MovieCard";
import styles from "./Catalogo.module.css";

type Movie = {
  id: string;
  Link: string;
  Name: string;
  Year: number;
  Genre: string;
  Description: string;
  Score: number;
  Comments: string;
};

export default function MovieList({ movies }: { movies: Movie[] }) {
  return (
    <div className={styles.grid}>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}
