import React from "react";
import  ReactDOM  from "react-dom";

import App from "./App";
import './index.css';

import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Products from "./pages/products/Products";
import Workouts from "./pages/workouts/Workouts";
import Statistics from "./pages/statistics/Statistics";
import Sign from "./pages/sign/Sign";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
    },

    {
        path: "Products",
        element: <Products/>,
    },

    {
        path: "Workouts",
        element: <Workouts/>,
    },

    {
        path: "Statistics",
        element: <Statistics/>,
    },

    {
        path: "Sign",
        element: <Sign/>,
    },

  ]);

  
  
  ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );