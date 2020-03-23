import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, compose } from 'redux';
import reducer from './reducers';
import App from './routes';
import './assets/css/index.scss';

const composeEnhacers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const initialState = {
  Establecimiento: [
    {
      id: 1,
      nombre: '20 de Julio',
      direccion: 'Cr. 6 # 24a - 30 Sur',
      ciudad: 'Bogotá',
    },
    {
      id: 2,
      nombre: '12 de Octubre',
      direccion: 'Cra. 51 # 72 - 13',
      ciudad: 'Bogotá',
    },
    {
      id: 3,
      nombre: 'Fontibón',
      direccion: 'Cl. 19 # 103 - 26',
      ciudad: 'Bogotá',
    },
    {
      id: 4,
      nombre: 'Kennedy',
      direccion: 'Cl. 42 # 78m - 50 Sur',
      ciudad: 'Bogotá',
    },
    {
      id: 5,
      nombre: 'La Concordia',
      direccion: 'Cl. 14 # 1 - 40',
      ciudad: 'Bogotá',
    },
    {
      id: 6,
      nombre: 'La Perseverancia',
      direccion: 'Cra. 5 # 30a - 30',
      ciudad: 'Bogotá',
    },
    {
      id: 7,
      nombre: 'Las Cruces',
      direccion: 'Cl. 1f # 4 - 60',
      ciudad: 'Bogotá',
    },
    {
      id: 8,
      nombre: 'Las Ferias',
      direccion: 'Cra. 70 # 74 - 52',
      ciudad: 'Bogotá',
    },
    {
      id: 9,
      nombre: 'Quirinal',
      direccion: 'Cl. 90 # 91 - 52',
      ciudad: 'Bogotá',
    },
    {
      id: 10,
      nombre: 'Restrepo',
      direccion: 'Cr. 19 # 19b - 16 sur',
      ciudad: 'Bogotá',
    },
    {
      id: 11,
      nombre: 'Samper Mendoza',
      direccion: 'Cra. 25 # 22a - 73',
      ciudad: 'Bogotá',
    },
    {
      id: 12,
      nombre: 'San Carlos',
      direccion: 'Cl. 51 sur # 19b - 26',
      ciudad: 'Bogotá',
    },
    {
      id: 13,
      nombre: 'Santander',
      direccion: 'Cl. 26 sur # 30 - 21',
      ciudad: 'Bogotá',
    },
    {
      id: 14,
      nombre: 'Siete de Agosto',
      direccion: 'Ak. 24 # 64 - 26',
      ciudad: 'Bogotá',
    },
    {
      id: 15,
      nombre: 'Trinidad Galán',
      direccion: 'Cr. 60 # 4b - 24',
      ciudad: 'Bogotá',
    },
  ],
  Producto: [
    {
      id: 1,
      Nombre: 'Salsamentaría',
    },
    {
      id: 2,
      Nombre: 'Mercado',
    },
    {
      id: 3,
      Nombre: 'Lácteos',
    },
    {
      id: 4,
      Nombre: 'Frutas',
    },
    {
      id: 5,
      Nombre: 'Verduras',
    },
    {
      id: 6,
      Nombre: 'Aromáticas / Especias',
    },
    {
      id: 7,
      Nombre: 'Res',
    },
    {
      id: 8,
      Nombre: 'Cerdo',
    },
    {
      id: 9,
      Nombre: 'Pollo',
    },
    {
      id: 10,
      Nombre: 'Pescado',
    },
    {
      id: 11,
      Nombre: 'Huevos',
    },
    {
      id: 12,
      Nombre: 'Visceras',
    },
    {
      id: 13,
      Nombre: 'Granero',
    },
    {
      id: 14,
      Nombre: 'Café Molido',
    },
    {
      id: 15,
      Nombre: 'Plantas',
    },
    {
      id: 16,
      Nombre: 'Esotérico',
    },
    {
      id: 17,
      Nombre: 'Pásticos',
    },
    {
      id: 18,
      Nombre: 'Mascotas',
    },
    {
      id: 19,
      Nombre: 'Productos Agícolas',
    },
    {
      id: 20,
      Nombre: 'Restaurante',
    },
    {
      id: 21,
      Nombre: 'Caféteria /Frutería',
    },

  ],
  personas: [],
};
const store = createStore(reducer, initialState, composeEnhacers());

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'),
);
