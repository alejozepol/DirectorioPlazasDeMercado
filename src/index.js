import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, compose } from 'redux';
import reducer from './reducers';
import App from './routes';
import './assets/css/index.scss';

const composeEnhacers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const initialState = {
  establecimientos: [
    {
      id: 1,
      nombre: '20 de Julio',
      direccion: 'Cr. 6 # 24a - 30 Sur',
      venueLat: 4.570161,
      venueLon: -74.093604,
      ciudad: 'Bogotá',
    },
    {
      id: 2,
      nombre: '12 de Octubre',
      direccion: 'Cra. 51 # 72 - 13',
      venueLat: 4.669108,
      venueLon: -74.074466,
      ciudad: 'Bogotá',
    },
    {
      id: 3,
      nombre: 'Fontibón',
      direccion: 'Cl. 19 # 103 - 26',
      venueLat: 4.675960,
      venueLon: -74.144760,
      ciudad: 'Bogotá',
    },
    {
      id: 4,
      nombre: 'Kennedy',
      direccion: 'Cl. 42 # 78m - 50 Sur',
      venueLat: 4.619216,
      venueLon: -74.160521,
      ciudad: 'Bogotá',
    },
    {
      id: 5,
      nombre: 'La Concordia',
      direccion: 'Cl. 14 # 1 - 40',
      venueLat: 4.598068,
      venueLon: -74.068780,
      ciudad: 'Bogotá',
    },
    {
      id: 6,
      nombre: 'La Perseverancia',
      direccion: 'Cra. 5 # 30a - 30',
      venueLat: 4.616466,
      venueLon: -74.066278,
      ciudad: 'Bogotá',
    },
    {
      id: 7,
      nombre: 'Las Cruces',
      direccion: 'Cl. 1f # 4 - 60',
      venueLat: 4.587528,
      venueLon: -74.078259,
      ciudad: 'Bogotá',
    },
    {
      id: 8,
      nombre: 'Las Ferias',
      direccion: 'Cra. 70 # 74 - 52',
      venueLat: 4.686515,
      venueLon: -74.089415,
      ciudad: 'Bogotá',
    },
    {
      id: 9,
      nombre: 'Quirinal',
      direccion: 'Cl. 90 # 91 - 52',
      venueLat: 4.713791,
      venueLon: -74.098009,
      ciudad: 'Bogotá',
    },
    {
      id: 10,
      nombre: 'Restrepo',
      direccion: 'Cr. 19 # 19b - 16 sur',
      venueLat: 4.585137,
      venueLon: -74.102359,
      ciudad: 'Bogotá',
    },
    {
      id: 11,
      nombre: 'Samper Mendoza',
      direccion: 'Cra. 25 # 22a - 73',
      venueLat: 4.619008,
      venueLon: -74.083000,
      ciudad: 'Bogotá',
    },
    {
      id: 12,
      nombre: 'San Carlos',
      direccion: 'Cl. 51 sur # 19b - 26',
      venueLat: 4.570076,
      venueLon: -74.129536,
      ciudad: 'Bogotá',
    },
    {
      id: 13,
      nombre: 'Santander',
      direccion: 'Cl. 26 sur # 30 - 21',
      venueLat: 4.591544,
      venueLon: -74.111532,
      ciudad: 'Bogotá',
    },
    {
      id: 14,
      nombre: '7 de Agosto',
      direccion: 'Ak. 24 # 64 - 26',
      venueLat: 4.591544,
      venueLon: -74.111532,
      ciudad: 'Bogotá',
    },
    {
      id: 15,
      nombre: 'Trinidad Galán',
      direccion: 'Cr. 60 # 4b - 24',
      venueLat: 4.623156,
      venueLon: -74.119580,
      ciudad: 'Bogotá',
    },
  ],
  productos: [
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
  establecimientosOri: [
    {
      id: 1,
      nombre: '20 de Julio',
      direccion: 'Cr. 6 # 24a - 30 Sur',
      venueLat: 4.570161,
      venueLon: -74.093604,
      ciudad: 'Bogotá',
    },
    {
      id: 2,
      nombre: '12 de Octubre',
      direccion: 'Cra. 51 # 72 - 13',
      venueLat: 4.669108,
      venueLon: -74.074466,
      ciudad: 'Bogotá',
    },
    {
      id: 3,
      nombre: 'Fontibón',
      direccion: 'Cl. 19 # 103 - 26',
      venueLat: 4.675960,
      venueLon: -74.144760,
      ciudad: 'Bogotá',
    },
    {
      id: 4,
      nombre: 'Kennedy',
      direccion: 'Cl. 42 # 78m - 50 Sur',
      venueLat: 4.619216,
      venueLon: -74.160521,
      ciudad: 'Bogotá',
    },
    {
      id: 5,
      nombre: 'La Concordia',
      direccion: 'Cl. 14 # 1 - 40',
      venueLat: 4.598068,
      venueLon: -74.068780,
      ciudad: 'Bogotá',
    },
    {
      id: 6,
      nombre: 'La Perseverancia',
      direccion: 'Cra. 5 # 30a - 30',
      venueLat: 4.616466,
      venueLon: -74.066278,
      ciudad: 'Bogotá',
    },
    {
      id: 7,
      nombre: 'Las Cruces',
      direccion: 'Cl. 1f # 4 - 60',
      venueLat: 4.587528,
      venueLon: -74.078259,
      ciudad: 'Bogotá',
    },
    {
      id: 8,
      nombre: 'Las Ferias',
      direccion: 'Cra. 70 # 74 - 52',
      venueLat: 4.686515,
      venueLon: -74.089415,
      ciudad: 'Bogotá',
    },
    {
      id: 9,
      nombre: 'Quirinal',
      direccion: 'Cl. 90 # 91 - 52',
      venueLat: 4.713791,
      venueLon: -74.098009,
      ciudad: 'Bogotá',
    },
    {
      id: 10,
      nombre: 'Restrepo',
      direccion: 'Cr. 19 # 19b - 16 sur',
      venueLat: 4.585137,
      venueLon: -74.102359,
      ciudad: 'Bogotá',
    },
    {
      id: 11,
      nombre: 'Samper Mendoza',
      direccion: 'Cra. 25 # 22a - 73',
      venueLat: 4.619008,
      venueLon: -74.083000,
      ciudad: 'Bogotá',
    },
    {
      id: 12,
      nombre: 'San Carlos',
      direccion: 'Cl. 51 sur # 19b - 26',
      venueLat: 4.570076,
      venueLon: -74.129536,
      ciudad: 'Bogotá',
    },
    {
      id: 13,
      nombre: 'Santander',
      direccion: 'Cl. 26 sur # 30 - 21',
      venueLat: 4.591544,
      venueLon: -74.111532,
      ciudad: 'Bogotá',
    },
    {
      id: 14,
      nombre: '7 de Agosto',
      direccion: 'Ak. 24 # 64 - 26',
      venueLat: 4.591544,
      venueLon: -74.111532,
      ciudad: 'Bogotá',
    },
    {
      id: 15,
      nombre: 'Trinidad Galán',
      direccion: 'Cr. 60 # 4b - 24',
      venueLat: 4.623156,
      venueLon: -74.119580,
      ciudad: 'Bogotá',
    },
  ],
};
const store = createStore(reducer, initialState, composeEnhacers());

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
