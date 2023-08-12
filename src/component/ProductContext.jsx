import { createContext, useEffect, useState } from "react";
import { inventoryData } from "../data";

export const ProductContext = createContext();

export const ProducProvider = ({ children }) => {
  const initialInventory =
    JSON.parse(localStorage.getItem("inventory")) || inventoryData;

  const [data, setData] = useState(initialInventory);
  const [input, setInput] = useState({
    id: "",
    department: "",
    name: "",
    descripthion: "",
    price: 0,
    stock: 0,
    sku: "",
    supplier: "",
    delivered: "",
    imageUrl: ""
  });
  const [check, setCheck] = useState(false);

  const getTotalStock = data.reduce((acc, curr) => curr.stock + acc, 0);

  const getTotalDelivered = data.reduce((acc, curr) => curr.delivered + acc, 0);

  const getLowStock = data.reduce(
    (acc, curr) => (curr.stock <= 10 ? acc + 1 : acc),
    0
  );

  const departmentNames = inventoryData.reduce((acc, curr) => {
    if (!acc.includes(curr.department)) {
      acc.push(curr.department);
    }
    return acc;
  }, []);

  const addToData = (newItem) => {
    setData((prevData) => [...prevData, newItem]);
    setInput({
      id: "",
      department: "",
      name: "",
      descripthion: "",
      price: "",
      stock: "",
      sku: "",
      supplier: "",
      delivered: "",
      imageUrl: ""
    });
  };

  const handleCategory = (category) => {
    if (category === "all") {
      setData(inventoryData);
    } else {
      const updatedData = inventoryData.filter(
        (item) => item.department === category
      );
      setData(updatedData);
    }
  };

  const handleSort = (clickedSort) => {
    if (clickedSort === "name") {
      const updatedData = [...data].sort((a, b) =>
        a.name.localeCompare(b.name)
      );
      setData(updatedData);
    } else {
      const updatedData = [...data].sort(
        (a, b) => a[clickedSort] - b[clickedSort]
      );
      setData(updatedData);
    }
  };

  const handleCheck = () => {
    setCheck((pre) => !pre);
  };

  const filterOnCheck = check ? data.filter((item) => item.stock <= 10) : data;

  useEffect(() => {
    localStorage.setItem("inventory", JSON.stringify(data));
  }, [data]);

  const values = {
    data: filterOnCheck,
    setData,
    getLowStock,
    getTotalStock,
    getTotalDelivered,
    departmentNames,
    addToData,
    input,
    setInput,
    handleCategory,
    handleSort,
    handleCheck
  };
  return (
    <>
      {" "}
      <ProductContext.Provider value={values}>
        {" "}
        {children}{" "}
      </ProductContext.Provider>{" "}
    </>
  );
};
