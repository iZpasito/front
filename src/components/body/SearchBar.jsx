import React, { useState, useEffect } from 'react';
import '../styles/main.css';

const SearchBar = ({ setProductos }) => {
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        if (searchTerm.length > 0) {
          const response = await axios.get(`/ubishop/buscar/?q=${searchTerm}`, {
            headers: {
              'Content-Type': 'application/json',
            },
          });
          setProductos(response.data.productos);
        } else {
          const response = await fetch('/ubishop/productos/');
          const data = await response.json();
          setProductos(data);
        }
      } catch (error) {
        console.error('Error fetching productos:', error);
      }
    };

    fetchProductos();
  }, [searchTerm, setProductos]);

  return (
    <input
      type="text"
      placeholder="Buscar productos..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      className="search-bar"
    />
  );
};

export default SearchBar;
