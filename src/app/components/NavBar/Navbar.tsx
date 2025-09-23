"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./NavBar.module.css";
import { createMovie, Movie } from "@/api/moviesApi";

export default function Navbar() {
  const [showForm, setShowForm] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // Estado para los datos del formulario
  const [formData, setFormData] = useState<Movie>({
    Link: "",
    Name: "",
    Year: new Date().getFullYear(),
    Genre: "",
    Description: "",
    Score: 1,
    Comments: "",
  });

  const toggleForm = () => setShowForm(!showForm);

  // Manejar cambios en los inputs
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "Year" || name === "Score" ? Number(value) : value,
    }));
  };

  // Manejar envío del formulario
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createMovie(formData);
      alert("Película creada con éxito 🎉");
      setFormData({
        Link: "",
        Name: "",
        Year: new Date().getFullYear(),
        Genre: "",
        Description: "",
        Score: 1,
        Comments: "",
      });
      setShowForm(false);
    } catch (error) {
      console.error(error);
      alert("Hubo un error al guardar la película ❌");
    }
  };

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
            <form className={styles.form} onSubmit={handleSubmit}>
              <input
                type="text"
                name="Link"
                placeholder="Enlace portada"
                value={formData.Link}
                onChange={handleChange}
                className={styles.formInput}
                required
              />
              <input
                type="text"
                name="Name"
                placeholder="Nombre"
                value={formData.Name}
                onChange={handleChange}
                className={styles.formInput}
                required
              />
              <input
                type="number"
                name="Year"
                placeholder="Año"
                value={formData.Year}
                onChange={handleChange}
                className={styles.formInput}
                required
              />
              <input
                type="text"
                name="Genre"
                placeholder="Género"
                value={formData.Genre}
                onChange={handleChange}
                className={styles.formInput}
                required
              />
              <textarea
                name="Description"
                placeholder="Descripción"
                value={formData.Description}
                onChange={handleChange}
                className={styles.formInput}
                required
              />
              <input
                type="number"
                name="Score"
                placeholder="Calificación (1-10)"
                min="1"
                max="10"
                value={formData.Score}
                onChange={handleChange}
                className={styles.formInput}
                required
              />
              <textarea
                name="Comments"
                placeholder="Comentarios"
                value={formData.Comments}
                onChange={handleChange}
                className={styles.formInput}
              />

              <div className={styles.modalActions}>
                <button
                  type="button"
                  onClick={toggleForm}
                  className={styles.cancelBtn}
                >
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
