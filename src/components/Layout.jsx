import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Copyright from "./Copyright";
const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet></Outlet>
      <Footer />
      <Copyright />
    </>
  );
};

export default Layout;
