import React, { useEffect, useState } from 'react';
import '../styles/header.css';
import UBISHOPLogo from '../../UBISHOP.svg';
import NavPage from '../body/Nav';
import axios from 'axios';


const Header = ({ toggleProductos, setProductos }) => {
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [registerModalOpen, setRegisterModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);

  // Manejador para cambios en el input de búsqueda
  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true); 
        const response = await axios.get(`/ubishop/buscar/?q=${searchTerm}`); 
        setProductos(response.data); 
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };
    const fetchProducts2 = async () => {
      try {
        setLoading(true); 
        const response = await axios.get(`/ubishop/buscar/`); 
        setProductos(response.data); 
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };
    

    
    if (searchTerm.length > 2) {
      fetchProducts();
    } else {
      fetchProducts2() // Limpiar productos si el término de búsqueda no es válido
    }
  }, [searchTerm, setProductos]); 

  return (
    <header className="header">
      <div className="container">
      <NavPage/> 
        <div className="logo">
          <a href="/">
          <img src={UBISHOPLogo} alt="UbiShop" />
          <h1>UbiShop</h1>
          </a>
        </div>
        <div className="search">
          <input
            type="text"
            placeholder="Buscar productos..."
            value={searchTerm}
            onChange={handleInputChange}
            className="search-bar"
          />
        </div>
        <div className="buttons">
          <button
            onClick={toggleProductos}
            type="button"
            className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
            >
            Productos
          </button>
          <button
            onClick={() => setLoginModalOpen(true)}
            type="button"
            className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
          >
            Iniciar Sesion
          </button>
          <button
            onClick={() => setRegisterModalOpen(true)}
            type="button"
            className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
          >
            Registrarse
          </button>
        </div>
        <Modal isOpen={loginModalOpen} onClose={() => setLoginModalOpen(false)} />
        <RegisterModal isOpen={registerModalOpen} onClose={() => setRegisterModalOpen(false)} />
      </div>
    </header>
  );
};

const RegisterModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="relative w-full max-w-md px-4 h-full md:h-auto">
        <form className="bg-white p-10 rounded-lg shadow-lg min-w-full" onSubmit={(e) => e.preventDefault()}>
          <div className="flex justify-end">
            <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-2 inline-flex items-end dark:hover:bg-gray-800 dark:hover:text-white" onClick={onClose}>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 111.414 1.414L11.414 10l4.293 4.293a1 1 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
              </svg>
            </button>
          </div >
          <div id="register-form" className="flex justify-center p-2" >
            <h1 className="text-center text-2xl mb-6 text-gray-600 font-bold font-sans">Registro</h1>
          </div>

          <div>
            <label className="text-gray-800 font-semibold block my-3 text-md" htmlFor="username">Nombre</label>
            <input className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none" type="text" name="username" id="username" placeholder="username" required />
          </div>
          <div>
            <label className="text-gray-800 font-semibold block my-3 text-md" htmlFor="email">Email</label>
            <input className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none" type="text" name="email" id="email" placeholder="@email" required />
          </div>
          <div>
            <label className="text-gray-800 font-semibold block my-3 text-md" htmlFor="password">Contraseña</label>
            <input className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none" type="password" name="password" id="password" placeholder="password" required />
          </div>
          <div>
            <label className="text-gray-800 font-semibold block my-3 text-md" htmlFor="confirm">Confirmar contraseña</label>
            <input className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none" type="password" name="confirm" id="confirm" placeholder="confirm password" required />
          </div>
          <button type="submit" className="w-full mt-6 bg-indigo-600 rounded-lg px-4 py-2 text-lg text-white tracking-wide font-semibold font-sans" >Registrar</button>
        </form>
      </div>
    </div>
  );
};

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div id="authentication-modal" aria-hidden="true" className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="relative w-full max-w-md px-4 h-full md:h-auto">
        <div className="bg-white rounded-lg shadow relative white:bg-gray-700">
          <div className="flex justify-end p-2">
            <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" onClick={onClose}>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 111.414 1.414L11.414 10l4.293 4.293a1 1 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
              </svg>
            </button>
          </div>
          <form className="space-y-6 px-6 lg:px-8 pb-4 sm:pb-6 xl:pb-8" action="#">
            <h3 className="text-3xl font-medium text-gray-900 dark:text-dark">Iniciar sesion</h3>
            <div>
              <label htmlFor="email" className="text-xl font-medium text-gray-900 block mb-2 dark:text-dark-300">Correo</label>
              <input type="email" name="email" id="email" className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none" placeholder="ejemplo@gmail.com" required />
            </div>
            <div>
              <label htmlFor="password" className="text-xl font-medium text-gray-900 block mb-2 dark:text-dark-300">Contraseña</label>
              <input type="password" name="password" id="password" placeholder="********" className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none" required />
            </div>
            <div className="flex justify-between">
              <div className="flex items-start">
              </div>
              <a href="#" className="text-sm text-center text-blue-700  hover:underline dark:text-blue-500">Se te olvido la contraseña?</a>
            </div>
            <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Iniciar</button>
            <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
              <a href="#" className="text-blue-700 hover:underline dark:text-blue-500">Registrarse</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export { Header, RegisterModal, Modal };
