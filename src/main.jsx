import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/root/Root';
import Login from './components/login/Login';
import Registration from './components/registration/Registration';
import Home from './components/home/Home';
import AuthProvider from './providers/AuthProvider';
import Order from './components/order/Order';
import PrivateRoute from './routes/PrivateRoute';
const router = createBrowserRouter([
  {
    path: "/",
    element:<Root />,
    children: [
      {
        path: "/",
        element:<Home></Home>,
      },
      {
        path: "/login",
        element:<Login></Login>,
      },
      {
        path: "/register",
        element:<Registration></Registration>,
      },
      {
        path: "/order",
        element:<PrivateRoute><Order></Order></PrivateRoute>,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthProvider>
    <RouterProvider router={router} />
   </AuthProvider>
  </React.StrictMode>,
)
