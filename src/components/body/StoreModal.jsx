// StoreModal.jsx
import React from 'react';

const StoreModal = ({ isOpen, onClose, store }) => {
  if (!isOpen || !store) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000, // Asegúrate de que el z-index sea alto
      }}
    >
      <div
        style={{
          backgroundColor: 'white',
          borderRadius: '8px',
          padding: '20px',
          maxWidth: '500px',
          width: '100%',
          position: 'relative',
        }}
      >
        <button
          type="button"
          style={{
            position: 'absolute',
            top: '10px',
            right: '10px',
            backgroundColor: 'transparent',
            border: 'none',
            cursor: 'pointer',
          }}
          onClick={onClose}
        >
          <svg
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <h2 className="text-xl font-bold">{store.tienda}</h2>
        <p className="mt-2">{store.descripcion}</p>
        <h3 className="mt-4 mb-2 text-lg font-semibold">Productos:</h3>
        <ul>
          {store.productos.map((producto, index) => (
            <li key={index} className="mb-1">
              {producto.nombre_producto} - ${producto.precio}
            </li>
          ))}
        </ul>
        <button
          type="button"
          style={{
            display: 'block',
            width: '100%',
            marginTop: '10px',
            backgroundColor: '#4A90E2',
            color: 'white',
            padding: '10px',
            borderRadius: '5px',
            border: 'none',
            cursor: 'pointer',
          }}
          onClick={onClose}
        >
          Cerrar
        </button>
      </div>
    </div>
  );
};

export default StoreModal;
