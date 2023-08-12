import { useContext } from "react";
import { ProductContext } from "../component/ProductContext";

import { NavLink } from "react-router-dom";

export const Header = () => {
  const { handleCategory, handleSort, handleCheck } = useContext(
    ProductContext
  );
  return (
    <div className="header-div">
      <h2> Products </h2>{" "}
      <div>
        <select
          className="header-select"
          onChange={(e) => handleCategory(e.target.value)}
        >
          {" "}
          <option value="all"> All Products </option>
          <option value="Kitchen"> Kitchen </option>
          <option value="Toys"> Toy </option>
          <option value="Clothing"> Clothing </option>{" "}
        </select>{" "}
      </div>
      <div>
        <div className="header-child-div-a">
          <div>
            {" "}
            <input type="checkbox" onClick={handleCheck} />{" "}
          </div>
          <p> Low Stock Items </p>{" "}
        </div>
      </div>
      <div>
        <select onChange={(e) => handleSort(e.target.value)}>
          <option value="price"> Price </option>
          <option value="name"> Name </option>
          <option value="stock"> Stock </option>
        </select>{" "}
      </div>
      <div>
        <button className="button-new">
          <NavLink className="navLink" to="/new">
            {" "}
            New{" "}
          </NavLink>{" "}
        </button>{" "}
      </div>
    </div>
  );
};
