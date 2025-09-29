import { useState } from "react";
import { Movie } from "@/api/moviesApi";
import styles from "./Aside.module.css";
import MovieCard from "../Cards/MovieCard/MovieCard";
import MovieDetailModal from "../Cards/MovieDetailModal/MovieDetailModal";

type AsideProps = {
    movies: Movie[];
};

export default function Aside({ movies }: AsideProps) {
    const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

    const topMovies = [...movies]
        .sort((a, b) => b.Score - a.Score)
        .slice(0, 10);

    return (
        <aside className={styles.asideContainer}>
            <h1>Top Mejores Peliculas</h1>
            <ul>
                {topMovies.map(movie => (
                    <MovieCard
                        key={movie.id}
                        movie={movie}
                        onSelect={() => setSelectedMovie(movie)}
                    />
                ))}
            </ul>
            {selectedMovie && (
                <MovieDetailModal
                    movie={selectedMovie}
                    onClose={() => setSelectedMovie(null)}
                    onSave={() => setSelectedMovie(null)}
                />
            )}
        </aside>
    );
}