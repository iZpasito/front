import React, { useState, useEffect } from 'react';
import "./App.css";
import Footer from "./components/comun/Footer.jsx";
import { Carousel, CardList, Home_maps, CardListStore } from "./components/body/main.jsx";
import { Header } from "./components/comun/header.jsx";
import Productos from "./components/body/Productos.jsx";

function App() {
  const [showProductos, setShowProductos] = useState(false);
  const [stores, setStores] = useState([]);
  const [sproductos, setProductos] = useState([]);


  const toggleProductos = () => {
    setShowProductos(true);
  };
  const imagenes = [
    require('../../front/src/img/memegato.png'),
    // Agregar más imágenes según sea necesario
  ];
  return (
    <div className="App"> 
      <Header 
        toggleProductos={toggleProductos}
        setProductos={setProductos}
        setStores={setStores}
      />
      <div className="main">
        {showProductos ? (
              <div id="Productos-id">
              <div  className="cards my-4 mb-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {sproductos.map((producto, index) => (
                      <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md ml-2">
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
        ) : (
          <React.Fragment>
            <Home_maps />
            <Carousel />
            <div className="porotos">
              <CardListStore store={stores} />
            </div>
          </React.Fragment>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default App;
