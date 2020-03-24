import React from 'react';
import { connect } from 'react-redux';
import CardMap from '../components/cardMap';
import Search from '../components/Search';

const Home = (props) => {
  const { establecimientos } = props;
  return (
    <>
      <Search />
      <div className='content-Card'>
        {
          establecimientos.map((item) => (
            <CardMap key={item.id} name={item.nombre} address={item.address} lat={item.venueLat} lng={item.venueLon} />
          ))
        }
      </div>
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
