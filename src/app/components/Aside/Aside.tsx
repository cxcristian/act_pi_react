import { Movie } from "@/api/moviesApi";
import styles from "./Aside.module.css";
import MovieCard from "../Cards/MovieCard/MovieCard";
type AsideProps = {
    movies: Movie[];
};

export default function Aside({ movies }: AsideProps) {
    const topMovies = [...movies]
        .sort((a, b) => b.Score - a.Score)
        .slice(0, 10);

    return (
        <aside className={styles.asideContainer}>
            <h1>Top Mejores Peliculas</h1>
            <ul>
                {topMovies.map(movie => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </ul>
        </aside>
    );
}