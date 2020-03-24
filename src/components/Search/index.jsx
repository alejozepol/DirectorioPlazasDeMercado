import React from 'react';
import bgsearch from '../../assets/bg-search.png';

const Search = () => {
  return (
    <section className='Search'>
      <img className='Search__bg' src={bgsearch} alt='Fondo buscador' />
      <input className='Search__input' placeholder='Buscar' />
    </section>
  );
};

export default Search;
