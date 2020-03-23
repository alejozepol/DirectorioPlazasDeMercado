import React from 'react';
import { connect } from 'react-redux';

const Home = (props) => {
  const { establecimientos } = props;
  return (
    <>
      {
        establecimientos.map((item) => (
          <h1>{item.nombre}</h1>
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
