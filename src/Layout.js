import { Outlet, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"; // import Bootstrap CSS

const Layout = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

export default Layout;
