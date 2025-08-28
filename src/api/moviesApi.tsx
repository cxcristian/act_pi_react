// src/api/moviesApi.ts

const API_URL = "https://68acd091b996fea1c08af3e7.mockapi.io/peliculas";

// Interfaz de película basada en el schema real de tu API
export interface Movie {
  id?: string;         // Generado automáticamente por la API
  Link: string;        // URL de la portada
  Name: string;        // Nombre de la película
  Year: number;        // Año
  Genre: string;       // Género
  Description: string; // Descripción
  Score: number;       // Calificación
  Comments: string;    // Comentarios
}

// Obtener todas las películas
export async function getMovies(): Promise<Movie[]> {
  const response = await fetch(API_URL);
  if (!response.ok) throw new Error("Error al obtener las películas");
  return response.json();
}

// Obtener una película por ID
export async function getMovieById(id: string): Promise<Movie> {
  const response = await fetch(`${API_URL}/${id}`);
  if (!response.ok) throw new Error("Error al obtener la película");
  return response.json();
}

// Crear una nueva película
export async function createMovie(movieData: Movie): Promise<Movie> {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(movieData),
  });
  if (!response.ok) throw new Error("Error al crear la película");
  return response.json();
}

// Actualizar una película por ID
export async function updateMovie(id: string, movieData: Partial<Movie>): Promise<Movie> {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(movieData),
  });
  if (!response.ok) throw new Error("Error al actualizar la película");
  return response.json();
}

// Eliminar una película por ID
export async function deleteMovie(id: string): Promise<Movie> {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) throw new Error("Error al eliminar la película");
  return response.json();
}
