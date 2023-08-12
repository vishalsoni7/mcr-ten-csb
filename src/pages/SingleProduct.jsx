import { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../component/ProductContext";

export const SingleProduct = () => {
  const { data } = useContext(ProductContext);
  const { productId } = useParams();

  const findProduct = data.find((item) => item.id === productId);

  return (
    <div className="single-product">
      <h2> {findProduct?.name} </h2>
      <img src={findProduct?.imageUrl} alt={findProduct?.name} />
      <p> {findProduct?.price} </p>
      <p> Stock: {findProduct?.stock} </p>
      <p> Supplier: {findProduct?.supplier} </p>
      <p> Department: {findProduct?.department} </p>
      <p>SKU: {findProduct?.sku} </p>
      <p> Delivered: {findProduct?.delivered} </p>
      <p> Description: {findProduct?.description} </p>
    </div>
  );
};
