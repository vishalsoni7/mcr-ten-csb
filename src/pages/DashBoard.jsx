import { useContext } from "react";
import { ProductContext } from "../component/ProductContext";

export const DashBoard = () => {
  const { getLowStock, getTotalStock, getTotalDelivered } = useContext(
    ProductContext
  );
  return (
    <div className="dashbord-div">
      <div className="dashbord-child">
        {" "}
        <h1 className="d-a">{getTotalStock} </h1> <h3> Total Stock </h3>
      </div>
      <div className="dashbord-child">
        {" "}
        <h1 className="d-c"> {getTotalDelivered} </h1> <h3> Delivered </h3>
      </div>
      <div className="dashbord-child">
        {" "}
        <h1 className="d-b">{getLowStock} </h1> <h3> Low Stock </h3>
      </div>
    </div>
  );
};
