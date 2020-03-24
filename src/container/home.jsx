import React from 'react';
import { connect } from 'react-redux';
import Maps from './maps';
import iconStore from '../assets/store.svg';

const Home = (props) => {
  const { establecimientos } = props;
  return (
    <>
      {
        establecimientos.map((item) => (
          <div className='Card Card-Map' key={item.id}>
            <div className='Card__header'>
              <img className='Card__header-icon' src={iconStore} alt='Icono Tienda' />
              <h3 className='Card__header-title'>{item.nombre}</h3>
              <h5 className='Card__header-address'>{item.direccion}</h5>
            </div>
            <div className='Card__Map'>
              <Maps _lat={item.venueLat} _lng={item.venueLon} name={item.nombre} />
            </div>
          </div>
        ))
      }
    </>
  );
};

const mapDispatchToProps = {

};

const mapStatecToProps = (state) => {
  return {
    establecimientos: state.establecimientos,
  };
};

export default connect(mapStatecToProps, mapDispatchToProps)(Home);
