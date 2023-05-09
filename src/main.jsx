import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddCoffee from "./Components/AddCoffee/AddCoffee";
import Home from "./Components/Home/Home";
import UpdateCoffees from "./Components/UpdateCoffees/UpdateCoffees";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    loader: () =>
      fetch("https://coffee-store-server-dev-rahim.vercel.app/coffees"),
  },
  { path: "/add-coffees", element: <AddCoffee /> },
  {
    path: "/coffees/:id",
    element: <UpdateCoffees />,
    loader: ({ params }) =>
      fetch(
        `https://coffee-store-server-dev-rahim.vercel.app/coffees/${params.id}`
      ),
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
