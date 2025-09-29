
"use client";

import React from "react";
import styles from "./SearchModal.module.css";
import { Movie } from "@/api/moviesApi";

interface SearchModalProps {
  movie: Movie | null;
  onClose: () => void;
}

export default function SearchModal({ movie, onClose }: SearchModalProps) {
  if (!movie) return null; // no renderizar si no hay película

  return (
    <div className={styles.modalBackdrop}>
      <div className={styles.modal}>
        <h2 className={styles.modalTitle}>{movie.Name}</h2>
        <img src={movie.Link} alt={movie.Name} className={styles.poster} />

        <p>
          <strong>Año:</strong> {movie.Year}
        </p>
        <p>
          <strong>Género:</strong> {movie.Genre}
        </p>
        <p>
          <strong>Descripción:</strong> {movie.Description}
        </p>
        <p>
          <strong>Calificación:</strong> {movie.Score}/10
        </p>
        {movie.Comments && (
          <p>
            <strong>Comentarios:</strong> {movie.Comments}
          </p>
        )}

        <button onClick={onClose} className={styles.closeBtn}>
          Cerrar
        </button>
      </div>
    </div>
  );
}
