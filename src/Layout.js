import { Outlet, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"; // import Bootstrap CSS
import React from 'react'


const Layout = () => {
  return (
    <>
      <Outlet />
    </>
  );
};


export default Layout;
