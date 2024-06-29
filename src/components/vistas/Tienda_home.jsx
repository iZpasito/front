import React, { useState, useEffect } from 'react';
import '../styles/Perfil_tienda.css';

function Tienda() {
  const [tiendas, setTiendas] = useState([]);

  useEffect(() => {
    fetch('/ubishop/tiendas')
      .then(response => response.json())
      .then(data => setTiendas(data))
      .catch(error => console.error('Error fetching tiendas:', error));
  }, []);

  const crearTabla = () => {
    return (
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Propietario</th>
          </tr>
        </thead>
        <tbody>
          {tiendas.map((tienda) => (
            <tr key={tienda.id}>
              <td>{tienda.nombre}</td>
              <td>{tienda.descripcion}</td>
              <td>{tienda.propietario}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  return (
    <div>
      <h1>Tienda</h1>
      {crearTabla()}
    </div>
  );
}

export default Tienda;
