import React from "react";
import { Link } from 'react-router-dom';

const Card = ({ name, username, id }) => {

  const addFav = () => {
    // Obtén los favoritos actuales del localStorage o inicializa un array vacío si no hay ninguno
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    // Agrega la nueva Card a los favoritos
    favorites.push({ name, username, id });
    // Guarda el array actualizado de vuelta en localStorage
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }

  return (
    <div className="card">
        <h2>{name}</h2> {/* Muestra el nombre */}
        <p>@{username}</p> {/* Muestra el username */}
        <small>ID: {id}</small> {/* Muestra el ID */}

        {/* Envuelve la información deseada dentro del Link, ajusta la ruta según tu aplicación */}
        <Link to={`/detalle/${id}`}>
            {/* Aquí iría cualquier contenido adicional que quieras que sea clickeable */}
            <div className="card-content">
              <h2>{name}</h2>
              <p>@{username}</p>
            </div>
        </Link>

        <button onClick={addFav} className="favButton">Add to Favorites</button>
    </div>
  );
};

export default Card;
