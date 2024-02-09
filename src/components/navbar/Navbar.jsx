import { NavLink } from "react-router-dom";
import "./nav.css";
function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="./unnamed.jpg" alt="" width={"50px"} />
      </div>
      <ul>
        <li>
          <NavLink to="/" className="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/News">News</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
