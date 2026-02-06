import React from "react";
import Nav from '../component/Nav';
import { Outlet } from "react-router-dom";
import Footer from '../component/Footer';

function Mainlayout() {
  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  )
}

export default Mainlayout
