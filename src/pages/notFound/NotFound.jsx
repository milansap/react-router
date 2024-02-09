import { NavLink } from "react-router-dom";
import "./notFound.css";
function NotFound() {
  return (
    <div className="error">
      <div className="oops">
        <h2>Oops!</h2>
      </div>
      <h6>404-PAGE NOT FOUND</h6>
      <p>
        The page you are looking for might have been removed <br />
        had its name changed or is temporarily unavailable.
      </p>
      <NavLink to="/" className="go-to-home">
        GO TO HOMPAGE
      </NavLink>
    </div>
  );
}

export default NotFound;
