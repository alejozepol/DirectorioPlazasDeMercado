import React, { useState } from 'react';
import { connect } from 'react-redux';
import { searchPlaza } from '../../action';
import bgsearch from '../../assets/bg-search.png';

const Search = ({ searchPlaza }) => {

  const [letter, setLetter] = useState('');
  const handleInput = (event) => {
    setLetter({
      ...letter,
      [event.target.name]: event.target.value,
    });
    searchPlaza(letter);
  };

  return (
    <section className='Search'>
      <img className='Search__bg' src={bgsearch} alt='Fondo buscador' />
      <input className='Search__input' placeholder='Buscar' onChange={handleInput} />
    </section>
  );
};

const mapDispatchToProps = {
  searchPlaza,
};

const mapStatecToProps = (state) => {
  return {
    establecimientos: state.establecimientos,
  };
};

export default connect(mapStatecToProps, mapDispatchToProps)(Search);
