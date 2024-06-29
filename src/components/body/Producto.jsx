import React from 'react';

function ProductPage ()  {
  const imagen= [
    require('../../assets/Unimarc/pulpa.webp')
  ];
  const ProductCard =[
    {Nombre_Producto:'Producto1',NombreTienda:'jumbo',Precio:'$5000',Descripcion_producto:'es el mejor producto del mundo'}
  ];

  const card = ({Nombre_Producto,NombreTienda,Precio,Descripcion_producto}) => {
    return (
      <div className='card'>
        <img src={imagen} class='img'/>
        <h2>{Nombre_Producto}</h2>
        <h3>{NombreTienda}</h3>
        <p>{Precio}</p>
        <p>{Descripcion_producto}</p>
      </div>
    )
  };



};

export  {ProductPage};