import "./styles.css";

import { Route, Routes } from "react-router-dom";

import "react-toastify/dist/ReactToastify.css";

import { Department } from "./pages/Department";
import { Product } from "./pages/Product";
import { SingleProduct } from "./pages/SingleProduct";
import { DashBoard } from "./pages/DashBoard";
import { SideBar } from "./pages/Sidebar";
import { New } from "./pages/New";

export default function App() {
  return (
    <div className="App">
      <SideBar />
      <Routes>
        <Route path="/" element={<DashBoard />} />
        <Route path="/current/" element={<Department />} />
        <Route path="/products" element={<Product />} />
        <Route path="/new" element={<New />} />
        <Route path="/currentproduct/:productId" element={<SingleProduct />} />
      </Routes>
    </div>
  );
}

// {/* <ToastContainer
// position="bottom-right"
// autoClose={2000}
// hideProgressBar={false}
// newestOnTop={false}
// closeOnClick
// rtl={false}
// pauseOnFocusLoss
// draggable
// pauseOnHover
// theme="dark"
// /> */}

// <button onClick={notify}>Notify!</button> */}
