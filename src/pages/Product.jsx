import React, { useContext } from "react";
import { ProductContext } from "../component/ProductContext";
import { Header } from "./Header";
import { NavLink } from "react-router-dom";

export const Product = () => {
  const { data } = useContext(ProductContext);

  return (
    <div className="products">
      <Header />
      <table className="product-table">
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Supplier</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>
                <img src={item.imageUrl} alt="" />
              </td>
              <td>
                <NavLink to={`/currentproduct/${item.id}`}>{item.name}</NavLink>
              </td>
              <td>{item.description}</td>
              <td>{item.price}</td>
              <td>{item.stock}</td>
              <td>{item.supplier}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
