import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "./news.css";
function News() {
  return (
    <div className="news">
      <div className="sideNav">
        <ul>
          <li>
            <NavLink to="">page 1</NavLink>
          </li>
          <li>
            <NavLink to="page2">page 2</NavLink>
          </li>
          <li>
            <NavLink to="page3">Page 3</NavLink>
          </li>
          <li>
            <NavLink to="page3">Page 4</NavLink>
          </li>
          <li>
            <NavLink to="page3">Page 5</NavLink>
          </li>
          <li>
            <NavLink to="page3">Page 6</NavLink>
          </li>
          <li>
            <NavLink to="page3">Page 7</NavLink>
          </li>
          <li>
            <NavLink to="page3">Page 8</NavLink>
          </li>
          <li>
            <NavLink to="page3">Page 9</NavLink>
          </li>
          <li>
            <NavLink to="page3">Page 10</NavLink>
          </li>
          <li>
            <NavLink to="page3">Page 11</NavLink>
          </li>
          <li>
            <NavLink to="page3">Page 12</NavLink>
          </li>
          <li>
            <NavLink to="page3">Page 13</NavLink>
          </li>
          <li>
            <NavLink to="page3">Page 14</NavLink>
          </li>
          <li>
            <NavLink to="page3">Page 15</NavLink>
          </li>
          <li>
            <NavLink to="page3">Page 16</NavLink>
          </li>
          <li>
            <NavLink to="page3">Page 17</NavLink>
          </li>
        </ul>
      </div>
      <div className="outlet">
        <Outlet />
      </div>
    </div>
  );
}

export default News;
