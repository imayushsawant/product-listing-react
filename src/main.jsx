import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import ProductList from "./productlist.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProductView from "./productview.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <ProductList />,
      },
    ],
  },

  {
    path: "/product/:productid",
    element: <ProductView />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
