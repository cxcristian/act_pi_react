import MovieCard from "../MovieCard/MovieCard";
import styles from "./Catalogo.module.css";
import { updateMovie, deleteMovie, Movie } from "@/api/moviesApi"; 
import { useState } from "react";
import MovieDetailModal from "../MovieDetailModal/MovieDetailModal"; 

export default function MovieList({ movies }: { movies: Movie[] }) {
  const [localMovies, setLocalMovies] = useState<Movie[]>(movies);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [activeGenre, setActiveGenre] = useState<string>("Todos");

  // Agrupar películas por género
  const moviesByGenre = localMovies.reduce((acc: Record<string, Movie[]>, movie) => {
    const genre = movie.Genre || "Sin género";
    if (!acc[genre]) acc[genre] = [];
    acc[genre].push(movie);
    return acc;
  }, {});

  const allGenres = ["Todos", ...Object.keys(moviesByGenre)];

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

  const handleDelete = async (id: string) => {
    try {
      await deleteMovie(id);
      setLocalMovies((prevMovies) => prevMovies.filter((m) => m.id !== id));
      setSelectedMovie(null);
    } catch (error) {
      alert("Error al eliminar la película");
      console.error(error);
    }
  };

  // Filtrar películas según el género activo
  const moviesToShow =
    activeGenre === "Todos" ? localMovies : moviesByGenre[activeGenre] || [];

  return (
    <div>
      {/* Navbar de géneros */}
      <div className={styles.navbar}>
        {allGenres.map((genre) => (
          <button
            key={genre}
            className={`${styles.navButton} ${
              activeGenre === genre ? styles.active : ""
            }`}
            onClick={() => setActiveGenre(genre)}
          >
            {genre}
          </button>
        ))}
      </div>

      {/* Mostrar películas del género activo */}
      <h2 className={styles.genreTitle}>{activeGenre}</h2>
      <div className={styles.grid}>
        {moviesToShow.map((movie) => (
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
          onDelete={handleDelete} 
        />
      )}
    </div>
  );
}
