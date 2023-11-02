import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./components/Main/Main";
import Home from "./components/Home/Home/Home";
import Signup from "./components/Signup/Signup";
import Login from "./components/Login/Login";
import AuthProvider from "./components/providers/AuthProvider";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import AddToys from "./components/AddToys/AddToys";
import AllToys from "./components/AllToys/AllToys";
import MyToys from "./components/MyToys/MyToys";
import UpdateMyToys from "./components/MyToys/UpdateMyToys/UpdateMyToys";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: `/toy-details/:id`,
        element: (
          <PrivateRoute>
            <ProductDetails></ProductDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/add-toys",
        element: (
          <PrivateRoute>
            <AddToys></AddToys>
          </PrivateRoute>
        ),
      },
      {
        path: "/all-toys",
        element: <AllToys></AllToys>,
      },
      {
        path: "/my-toys",
        element: (
          <PrivateRoute>
            <MyToys></MyToys>
          </PrivateRoute>
        ),
      },
      {
        path: `/update-toy/:id`,
        element: (
          <PrivateRoute>
            <UpdateMyToys></UpdateMyToys>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <div className=" -z-50 bg-[#212121] ">
        <div className="max-w-screen-xl mx-auto bg-[#212121]">
          <RouterProvider router={router} />
        </div>
      </div>
    </AuthProvider>
  </React.StrictMode>
);
