import { NavLink } from "react-router-dom";

export const SideBar = () => {
  return (
    <div className="sideBar">
      <NavLink to="/" className="navLink">
        <h3>Dashboard</h3>{" "}
      </NavLink>
      <NavLink to="/current/" className="navLink">
        {" "}
        <h3>Department</h3>
      </NavLink>
      <NavLink to="/products" className="navLink">
        <h3> Products</h3>{" "}
      </NavLink>
    </div>
  );
};
