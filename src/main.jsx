import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import MainRoot from './components/mainroot/MainRoot.jsx';
import Shop from './components/shop/Shop.jsx';
import Details from './components/Details/Details.jsx';
import Card from './components/Card.jsx';
import Register from './components/register/Register.jsx';
import Login from './components/login/Login.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    Component: MainRoot,
    children: [
      { index: true, Component: App },
      { path: 'shop', Component: Shop },
      { path: '/product/details', Component: Details },
      { path: '/card', Component: Card },
      { path: '/register', Component: Register },
      { path: '/login', Component: Login },
    ],
  },
]);



createRoot(document.getElementById('root')).render(
     <RouterProvider router={router} />,
)
