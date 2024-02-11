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
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active-bar" : ""
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/News"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active-bar" : ""
            }
          >
            News
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active-bar" : ""
            }
          >
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active-bar" : ""
            }
          >
            About
          </NavLink>
        </li>
      </ul>
      <div className="log-in">
        <NavLink to="/login" className="log">
          Log In
        </NavLink>
        <NavLink to="/free" className="free">
          Try For Free
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;
