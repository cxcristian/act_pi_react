"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./NavBar.module.css";

export default function Navbar() {
  const [showForm, setShowForm] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleForm = () => setShowForm(!showForm);

  return (
    <nav className={styles.navbar}>
      {/* Logo */}
      <div className={styles.logoContainer}>
        <Image
          src="/img/logo.png"
          alt="logo"
          width={80}
          height={80}
          className={styles.logo}
        />
        <h1 className={styles.title}>Rate Movies</h1>
      </div>

      {/* Contenedor de búsqueda y botón agregar */}
      <div className={styles.actions}>
        <input
          type="text"
          placeholder="Ingresa una película"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className={styles.input}
        />
        <button className={styles.searchBtn}>Buscar</button>
        <button onClick={toggleForm} className={styles.addBtn}>
          Agregar Película
        </button>
      </div>

      {/* Modal del formulario */}
      {showForm && (
        <div className={styles.modalBackdrop}>
          <div className={styles.modal}>
            <h2 className={styles.modalTitle}>Nueva Película</h2>
            <form className={styles.form}>
              <input type="text" placeholder="Enlace portada" className={styles.formInput} />
              <input type="text" placeholder="Nombre" className={styles.formInput} />
              <input type="number" placeholder="Año" className={styles.formInput} />
              <input type="text" placeholder="Género" className={styles.formInput} />
              <textarea placeholder="Descripción" className={styles.formInput} />
              <input
                type="number"
                placeholder="Calificación (1-10)"
                min="1"
                max="10"
                className={styles.formInput}
              />
              <textarea placeholder="Comentarios" className={styles.formInput} />

              <div className={styles.modalActions}>
                <button type="button" onClick={toggleForm} className={styles.cancelBtn}>
                  Cancelar
                </button>
                <button type="submit" className={styles.saveBtn}>
                  Guardar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </nav>
  );
}
