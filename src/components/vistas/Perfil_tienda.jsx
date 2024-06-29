import React, { useState, useEffect } from 'react';
import '../styles/Perfil_tienda.css';

function Productos_Tienda(){
    //quiero que le aparezcan sus productos de acuatro y que esten como el carrusel pero idk como hacerlo
    const imagen = [
        // require('../../assets/fu yu/chaumin.webp'),

    ];
    const cards = [
      { title: 'Card 1', description: 'Descripción de la card 1' },
      { title: 'Card 2', description: 'Descripción de la card 2' },
      { title: 'Card 3', description: 'Descripción de la card 3' },
      { title: 'Card 4', description: 'Descripción de la card 4' },
    ];
  
    const Card = ({ imagen, title, description }) => {
      return (
        <div className="card">
            <img src={imagen} class='img'/>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      );
    };
  
    return (
      <div className="cards">
        <div className="row">
          {cards.slice(0, 4).map((card, index) => (
            <Card key={index} title={card.title} description={card.description} imagen={imagen} />
          ))}
        </div>
      </div>
    );
}

function Reservas(){
  //reservas modo lista de la tienda
  const data=[
      { id: 'order_id', Producto: 'Nombre producto', Cantidad: 'cantidad', Total: 'total'},
  ];

  const Card = ({id,Producto,Cantidad,Total}) =>{
      return(
          <div className='card'>
              <h1>{id}</h1>
              <p>Producto</p>
              <p>Cantidad</p>
              <p>Total</p>
          </div>
      );
  };

  return(
      <div className='cards'>
          <div className="row">
        {cards.slice(0, 3).map((card, index) => (
          <Card key={index} id={card.id} Producto={card.Producto} Cantidad={card.Cantidad} Total={card.Total}/>
        ))}
      </div>
      </div>
  );
}

function Tienda(){
    //info tienda
    const [tiendas] = useState([
        { id: 1, nombre: 'Tienda 1', descripcion: 'Descripción de Tienda 1', propietario: 'Juan Pérez' },
        { id: 2, nombre: 'Tienda 2', descripcion: 'Descripción de Tienda 2', propietario: 'María García' },
        { id: 3, nombre: 'Tienda 3', descripcion: 'Descripción de Tienda 3', propietario: 'Pedro Rodríguez' },
    ]);

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
};

export default {Productos_Tienda,Reservas,Tienda};