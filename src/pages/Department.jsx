import { useContext } from "react";
import { ProductContext } from "../component/ProductContext";
import { NavLink } from "react-router-dom";

export const Department = () => {
  const { handleCategory, departmentNames } = useContext(ProductContext);

  return (
    <div className="dashbord-div">
      {departmentNames.map((d, index) => (
        <div className="dashbord-child" key={index}>
          <NavLink to="/products" className="navLink1">
            <h3 onClick={() => handleCategory(d)}>{d}</h3>
          </NavLink>
        </div>
      ))}
    </div>
  );
};
