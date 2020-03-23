import React from 'react';

const Header = ({ dir, title }) => {
  return (
    <>
      {
        dir === '/' ? (
          <h1>La Placita</h1>
        ) : (
          <div>{dir}</div>
        )
      }
    </>
  );
};

export default Header;
