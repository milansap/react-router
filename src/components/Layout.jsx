import "./layout.css";
import Navbar from "./navbar/Navbar";
import Footer from "./navbar/Footer";
import { Outlet } from "react-router-dom";
function Layout() {
  return (
    <div style={{ height: "100vh", display: "flex", flexDirection: "column" }}>
      <Navbar />
      <div className="main-outlet">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
