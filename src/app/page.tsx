"use client";
import { useState, useEffect, use } from "react";
import { getMovies, Movie } from "@/api/moviesApi";
import MovieList from "@/app/components/Cards/Catalogo/Catalogo";


export default function Home() {
  const [moviess, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<boolean | string>(false);

  useEffect(() => {
    async function fetchMovies() {
      try{
        const data = await getMovies();
        setMovies(data);
      }catch(error){
        setError("Error al cargar las peliculas");
      }finally{
        setLoading(false);
      }
    }
    fetchMovies()
  },[])

  if (loading === true) {
    return <p>Cargando Peliculas</p>
  }
  if(error ===true){
    return <p>{error}</p>
  }

  return (
    <MovieList movies={moviess}> </MovieList> 
  )
}
