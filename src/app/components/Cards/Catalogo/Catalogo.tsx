import MovieCard from "../MovieCard/MovieCard";
import styles from "./Catalogo.module.css";
import { updateMovie, Movie } from "@/api/moviesApi";
import { useState } from "react";
import MovieDetailModal from "../MovieDetailModal/MovieDetailModal"; 

export default function MovieList({ movies }: { movies: Movie[] }) {
  const [localMovies, setLocalMovies] = useState<Movie[]>(movies);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

  // Agrupar películas por género
  const moviesByGenre = localMovies.reduce((acc: Record<string, Movie[]>, movie) => {
    const genre = movie.Genre || "Sin género";
    if (!acc[genre]) acc[genre] = [];
    acc[genre].push(movie);
    return acc;
  }, {});

  const handleSave = async (updatedMovie: Movie) => {
    try {
      if (!updatedMovie.id) {
        alert("La película no tiene ID válido");
        return;
      }
      const result = await updateMovie(updatedMovie.id, updatedMovie);
      setLocalMovies((prevMovies) =>
        prevMovies.map((m) => (m.id === result.id ? result : m))
      );
      setSelectedMovie(result);
    } catch (error) {
      alert("Error al actualizar la película");
      console.error(error);
    }
  };

  return (
    <div>
      {/* Mostrar agrupadas por género */}
      {Object.entries(moviesByGenre).map(([genre, movies]) => (
        <div key={genre}>
          <h2 className={styles.genreTitle}>{genre}</h2>
          <div className={styles.grid}>
            {movies.map((movie) => (
              <MovieCard 
                key={movie.id ?? movie.Name} 
                movie={movie} 
                onSelect={() => setSelectedMovie(movie)} 
              />
            ))}
          </div>
        </div>
      ))}

      {/* Mostrar todas las películas abajo */}
      <h2 className={styles.allTitle}>Todas las películas</h2>
      <div className={styles.grid}>
        {localMovies.map((movie) => (
          <MovieCard 
            key={movie.id ?? movie.Name} 
            movie={movie} 
            onSelect={() => setSelectedMovie(movie)} 
          />
        ))}
      </div>

      {selectedMovie && (
        <MovieDetailModal 
          movie={selectedMovie} 
          onClose={() => setSelectedMovie(null)} 
          onSave={handleSave} 
        />
      )}
    </div>
  );
}