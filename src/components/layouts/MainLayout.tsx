import React from 'react';
import Header from '../ui/Header/Header.tsx';
import Footer from '../ui/Footer/Footer.tsx';
import { Outlet } from 'react-router-dom';
function MainLayout(props) {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default MainLayout;
