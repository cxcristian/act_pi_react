import { useState } from "react";
import styles from "./MovieDetailModal.module.css";
import { Movie, updateMovie, deleteMovie } from "@/api/moviesApi";

type Props = {
  movie: Movie;
  onClose: () => void;
  onSave: (updatedMovie: Movie) => void;
  onDelete: (id: string) => void; // 👉 nueva prop
};

export default function MovieDetailModal({ movie, onClose, onSave, onDelete }: Props) {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState<Movie>(movie);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = async () => {
    try {
      if (!movie.id) throw new Error("La película no tiene ID válido");
      const updated = await updateMovie(movie.id, formData);
      onSave(updated);
      setIsEditing(false);
    } catch (error) {
      console.error("Error al guardar en MockAPI:", error);
      alert("No se pudo guardar en el servidor 🚨");
    }
  };

  const handleCancel = () => {
    setFormData(movie);
    setIsEditing(false);
  };

  const handleDelete = async () => {
    if (!movie.id) return;
    if (!confirm(`¿Seguro que quieres eliminar "${movie.Name}"?`)) return;

    try {
      await deleteMovie(movie.id);
      onDelete(movie.id); // 👉 actualiza la lista en el padre
      onClose(); // 👉 cierra modal
    } catch (error) {
      console.error("Error eliminando en MockAPI:", error);
      alert("No se pudo eliminar 🚨");
    }
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        {isEditing ? (
          <div className={styles.form}>
            <input name="Link" value={formData.Link} onChange={handleChange} placeholder="Enlace portada" />
            <input name="Name" value={formData.Name} onChange={handleChange} placeholder="Nombre" />
            <input name="Year" type="number" value={formData.Year} onChange={handleChange} placeholder="Año" />
            <input name="Genre" value={formData.Genre} onChange={handleChange} placeholder="Género" />
            <textarea name="Description" value={formData.Description} onChange={handleChange} placeholder="Descripción" />
            <input name="Score" type="number" value={formData.Score} onChange={handleChange} placeholder="Calificación (1-100)" />
            <textarea name="Comments" value={formData.Comments} onChange={handleChange} placeholder="Comentarios" />

            <div className={styles.actions}>
              <button onClick={handleSave}>Guardar</button>
              <button onClick={handleCancel}>Cancelar</button>
            </div>
          </div>
        ) : (
          <div>
            <img src={movie.Link} alt={movie.Name} className={styles.image} />
            <h2>{movie.Name}</h2>
            <p><strong>Género:</strong> {movie.Genre}</p>
            <p><strong>Año:</strong> {movie.Year}</p>
            <p><strong>Descripción:</strong> {movie.Description}</p>
            <p><strong>Calificación:</strong> {movie.Score}/100</p>
            <p><strong>Comentarios:</strong> {movie.Comments}</p>

            <button className={styles.editBtn} onClick={() => setIsEditing(true)}>Editar</button>
            <button className={styles.deleteBtn} onClick={handleDelete}>Eliminar</button>
            <button className={styles.closeInsideBtn} onClick={onClose}>Cerrar</button>
          </div>
        )}
      </div>
    </div>
  );
}
