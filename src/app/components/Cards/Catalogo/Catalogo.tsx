import MovieCard from "../MovieCard/MovieCard";
import styles from "./Catalogo.module.css";
import { updateMovie, Movie } from "@/api/moviesApi";
import { useState } from "react";
import MovieDetailModal from "../MovieDetailModal/MovieDetailModal"; 

export default function MovieList({ movies }: { movies: Movie[] }) {
  // Copiamos las películas iniciales en un estado local
  const [localMovies, setLocalMovies] = useState<Movie[]>(movies);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

  const handleSave = async (updatedMovie: Movie) => {
    try {
      if (!updatedMovie.id) {
        alert("La película no tiene ID válido");
        return;
      }

      // Actualizar en la API
      const result = await updateMovie(updatedMovie.id, updatedMovie);
      console.log("Película actualizada:", result);

      // Refrescar el estado local para que el catálogo se actualice
      setLocalMovies((prevMovies) =>
        prevMovies.map((m) => (m.id === result.id ? result : m))
      );

      // Actualizamos también el modal
      setSelectedMovie(result);
    } catch (error) {
      alert("Error al actualizar la película");
      console.error(error);
    }
  };

  return (
    <div className={styles.grid}>
      {localMovies.map((movie) => (
        <MovieCard 
          key={movie.id ?? movie.Name} 
          movie={movie} 
          onSelect={() => setSelectedMovie(movie)} 
        />
      ))}

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
