import React, { useState, useEffect } from 'react';
import '../styles/Perfil_cliente.css';

function Reservas(){
    //reservas modo lista del usuario
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

function Usuarios(){
    //info Usuario en la autentificacion se debe generar un token para poder utilizarlo aca
    const [Usuarios] = useState([
        { id: 1, nombre: 'Tienda 1', Email: 'Descripción de Tienda 1'},
        { id: 2, nombre: 'Tienda 2', Email: 'Descripción de Tienda 2'},
        { id: 3, nombre: 'Tienda 3', Email: 'Descripción de Tienda 3'},
    ]);

    const crearTabla = () => {
        return (
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Email</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {Usuarios.map((usuario) => (
                        <tr key={usuario.id}>
                            <td>{usuario.nombre}</td>
                            <td>{usuario.Email}</td>
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

export default {Reservas,Usuarios};