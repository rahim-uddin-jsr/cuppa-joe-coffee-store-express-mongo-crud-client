import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddCoffee from "./Components/AddCoffee/AddCoffee";
import Home from "./Components/Home/Home";
import "./index.css";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/add-coffees", element: <AddCoffee /> },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
