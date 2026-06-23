import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Route, Navigate } from 'react-router';

import './index.css';

import App from './App.jsx';
import ErrorPage from './routes/ErrorPage.jsx';
import Auth from './routes/Auth.jsx';
import Orders from './routes/Orders.jsx';
import Details from './routes/Details.jsx';


import { API_BASE_URL } from './config.js';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
      index: true,
      element: <Auth API_BASE_URL={API_BASE_URL} />,
      },
      {
      path: 'orders/:id',
      element: <Orders API_BASE_URL={API_BASE_URL} />,
      },
      {
        path: 'orders/:id/details/:idPedido',
        element: <Details API_BASE_URL={API_BASE_URL} />,
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)