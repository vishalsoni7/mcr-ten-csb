import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import { ProducProvider } from "./component/ProductContext";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <BrowserRouter>
      <ProducProvider>
        <App />
      </ProducProvider>
    </BrowserRouter>
  </StrictMode>
);
