import { useContext } from "react";
import { ProductContext } from "../component/ProductContext";

export const New = () => {
  const { input, setInput, addToData, departmentNames } = useContext(
    ProductContext
  );

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInput((prevInput) => ({
      id: `${Date.now()}`,
      ...prevInput,
      [name]: value
    }));
  };

  return (
    <div className="new-div">
      <h1> Add New Product </h1>
      <div className="new-child-div">
        <select className="select" name="department" onChange={handleInput}>
          {" "}
          {departmentNames.map((d, index) => (
            <option key={index}> {d} </option>
          ))}{" "}
        </select>{" "}
        <div className="input-div">
          {" "}
          <span>Name </span>
          <input
            onChange={handleInput}
            name="name"
            type="text"
            value={input.name}
          />{" "}
        </div>
        <div className="input-div">
          <span> Description </span>
          <textarea
            onChange={handleInput}
            name="description"
            value={input.description}
          >
            {" "}
          </textarea>{" "}
        </div>
        <div className="input-div">
          {" "}
          <span>Price </span>{" "}
          <input
            onChange={handleInput}
            name="price"
            type="number"
            value={input.price}
          />
        </div>
        <div className="input-div">
          <span> Quantity </span>{" "}
          <input
            onChange={handleInput}
            name="stock"
            type="number"
            value={input.stock}
          />
        </div>
        <div className="input-div">
          <span> SKU </span>{" "}
          <input
            onChange={handleInput}
            name="sku"
            type="text"
            value={input.sku}
          />
        </div>
        <div className="input-div">
          {" "}
          <span> Supplier </span>
          <input
            onChange={handleInput}
            name="supplier"
            type="text"
            value={input.supplier}
          />{" "}
        </div>
        <div className="input-div">
          <span> Delivered </span>
          <input
            onChange={handleInput}
            name="delivered"
            type="number"
            value={input.delivered}
          />{" "}
        </div>
        <div className="input-div">
          {" "}
          <span>Image Url </span>{" "}
          <input
            onChange={handleInput}
            name="imageUrl"
            type="url"
            value={input.imageUrl}
          />
        </div>
        <button className="button-add" onClick={() => addToData(input)}>
          {" "}
          Add Product{" "}
        </button>
      </div>
    </div>
  );
};
