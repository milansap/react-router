import "./footer.css";
import { NavLink } from "react-router-dom";
function Footer() {
  return (
    <div className="foot">
      Developed by <NavLink to="about">Milan Sapkota.</NavLink> <br />
      Copyright @ 2024 DeveloperHero|All Rights Reserved.
    </div>
  );
}

export default Footer;
