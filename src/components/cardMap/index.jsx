import React from 'react';
import Maps from '../maps';
import iconStore from '../../assets/store.svg';

const CardMap = ({ lat, lng, name, address }) => {
  return (
    <section className='Card Card-Map'>
      <div className='Card__header'>
        <img className='Card__header-icon' src={iconStore} alt='Icono Tienda' />
        <h4 className='Card__header-title'>{name}</h4>
        <h5 className='Card__header-address'>{address}</h5>
      </div>
      <div className='Card__Map'>
        <Maps _lat={lat} _lng={lng} name={name} />
      </div>
    </section>
  );
};

export default CardMap;
