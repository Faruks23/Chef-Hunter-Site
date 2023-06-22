import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './Component/Home/Home';
import Blog from './Component/Pages/Blog/Blog';
import Login from './Component/Pages/Login/Login';
import Register from './Component/Pages/Register/Register';
import AuthProvider from './AuthProvider/AuthProvider';
import Recipe from './Component/Pages/ViewRecipe/Recipe';
import PrivetRout from './Component/PrivetRout/PrivetRout';
import ErrorPage from './Component/ErrorPage/ErrorPage';
import UserDetails from './Component/UserDetails/UserDetails';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Register></Register>,
      },
      {
        path: "/user",
        element: <UserDetails></UserDetails>,
      },
      {
        path: "recipe/:id",
        element: (
          <PrivetRout>
            <Recipe></Recipe>
          </PrivetRout>
        ),
        loader: ({ params }) =>
          fetch(
            `https://b7a10-chef-recipe-hunter-server-side-faruks23-faruks23.vercel.app/chefdeta/${params.id}`
          ),
      },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
