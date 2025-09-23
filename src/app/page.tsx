"use client";
import { useState, useEffect } from "react";
import { getMovies, Movie } from "@/api/moviesApi";
import MovieList from "../app/components/Cards/Catalogo/Catalogo";
import MovieBanner from "../app/components/Banner/MovieBanner";
import "./inicio.css";

export default function Page() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [entered, setEntered] = useState(false);
  const [apagando, setApagando] = useState(false);

  const handleEntrar = () => {
    setApagando(true);
    setTimeout(() => {
      setEntered(true);
      localStorage.setItem("entered", "true");
    }, 800);
  };

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

  // Pantalla de inicio
  if (!entered) {
    return (
      <div className={`inicio-container ${apagando ? "tv-off" : ""}`}>
        <button onClick={handleEntrar} className="btn-entrar">
          Entrar
        </button>
      </div>
    );
  }

  // Catálogo
  if (loading) return <p>Cargando películas...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div>
      {/* Banner random */}
      {movies.length > 0 && <MovieBanner movies={movies} />}

      <h1 style={{ textAlign: "center", margin: "20px 0" }}>
        🎬 Catálogo de Películas
      </h1>
      <MovieList movies={movies} />
    </div>
  );
}
