"use client";
import { useState, useEffect } from "react";
import { getMovies, Movie } from "@/api/moviesApi";
import MovieList from "../app/components/Cards/Catalogo/Catalogo"

export default function Page() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchMovies() {
      try {
        const data = await getMovies();
        setMovies(data);
      } catch (err) {
        setError("No se pudieron cargar las películas");
      } finally {
        setLoading(false);
      }
    }
    fetchMovies();
  }, []);

  if (loading) return <p>Cargando películas...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div>
      <h1 style={{ textAlign: "center", margin: "20px 0" }}>
        🎬 Catálogo de Películas
      </h1>
      <MovieList movies={movies} />
    </div>
  );
}
