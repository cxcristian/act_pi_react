"use client";

import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [showForm, setShowForm] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleForm = () => setShowForm(!showForm);

  return (
    <nav className="flex items-center justify-between p-4 bg-gray-500 text-white shadow-md">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <Image
          src="/img/logo.png"
          alt="logo"
          width={100}
          height={100}
          className="object-contain"
        />
        <h1 className="text-xl font-bold font-[Arial]">Rate Movies</h1>
      </div>

      {/* Contenedor de búsqueda y botón agregar */}
      <div className="flex items-center gap-3">
        {/* Barra de búsqueda */}
        <input
          type="text"
          placeholder="Ingresa una película"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="p-2 border rounded-md text-black w-64 bg-white placeholder-gray-500"
        />
        <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-white">
          Buscar
        </button>

        {/* Botón para abrir formulario */}
        <button
          onClick={toggleForm}
          className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded"
        >
          Agregar Película
        </button>
      </div>

      {/* Modal del formulario */}
      {showForm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-md w-96">
            <h2 className="text-xl font-bold mb-4 text-black">Nueva Película</h2>
            <form className="flex flex-col gap-3">
              <input
                type="text"
                placeholder="Enlace portada"
                className="border p-2 rounded text-black"
              />
              <input
                type="text"
                placeholder="Nombre"
                className="border p-2 rounded text-black"
              />
               <input
                type="number"
                placeholder="Año"
                className="border p-2 rounded text-black"
              />
              <input
                type="text"
                placeholder="Género"
                className="border p-2 rounded text-black"
              />
              <textarea
                placeholder="Descripción"
                className="border p-2 rounded text-black"
              />
              <input
                type="number"
                placeholder="Calificación (1-10)"
                min="1"
                max="10"
                className="border p-2 rounded text-black"
              />
              <textarea
                placeholder="Comentarios"
                className="border p-2 rounded text-black"
              />

              <div className="flex justify-end gap-2 mt-2">
                <button
                  type="button"
                  onClick={toggleForm}
                  className="bg-blue-500 px-4 py-2 rounded text-white hover:bg-blue-600"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded text-white"
                >
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
