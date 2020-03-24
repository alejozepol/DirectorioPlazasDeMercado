import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';

const Layout = ({ children, location }) => {
  return (
    <>
      <header>
        <Header dir={location.pathname} />
      </header>
      <main className='Layout__contenido'>
        {children}
      </main>
      <footer>
        <Footer dir={location.pathname} />
      </footer>
    </>
  );
};

export default Layout;

