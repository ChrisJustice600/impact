import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

function Layout() {
  return (
    <div>
      <Navbar />
      {/* <div className="sm:hidden">
        <HamburgerMenu />
      </div> */}
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
