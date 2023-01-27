import Back2Top from "pages/Back2Top";
import Footer from "pages/Footer";
import Navbar from "pages/Navbar";
import { Outlet } from "react-router-dom";

const MainTemplate = () => {
  return (
    <div className="flex h-screen flex-col">
      {/* Header */}
      <Navbar></Navbar>

      {/* Body */}
      <div className="flex-1">
        <Outlet />
      </div>

      <Footer></Footer>
      <Back2Top />
    </div>
  );
};

export default MainTemplate;
