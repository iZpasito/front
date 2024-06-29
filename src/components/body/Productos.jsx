import React from 'react';
import '../styles/main.css';


const Productos = (e) => {
  const imagenes = [
    require('../../img/memegato.png'),
    // Agregar más imágenes según sea necesario
  ];
  if (!e || !Array.isArray(e)) {
    return <p>Cargando productos...</p>; // Mensaje de carga o error
  }
  return (
    <div id="Productos-id">
      <div  className="cards my-4 mb-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {e.map((producto, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
                <img src={imagenes[index % imagenes.length]} alt={producto.nombre_producto} className="w-full h-48 object-cover object-center" />
                <div className="p-4">
                  <h2 className="text-gray-800 text-lg font-semibold mb-2">{producto.nombre_producto}</h2>
                  <p className="text-gray-600 mb-2">{producto.descripcion}</p>
                  <p className="text-gray-700 font-semibold mb-2">Stock: {producto.stock}</p>
                  <p className="text-gray-700 font-semibold">Precio: ${producto.precio}</p>
                </div>
              </div>
            ))}
          </div>
      </div>
    </div>
  );
};

export default Productos;
