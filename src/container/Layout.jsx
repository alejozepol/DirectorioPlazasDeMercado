import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';

const Layout = ({ children, location }) => {
  return (
    <section className='Layout'>
      <header className='Layout__header'>
        <Header dir={location.pathname} />
      </header>
      <div className='Layout__contenido'>
        {children}
      </div>
      <div className='Layout__footer'>
        <Footer dir={location.pathname} />
      </div>
    </section>
  );
};

export default Layout;

