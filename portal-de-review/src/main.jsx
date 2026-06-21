import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Route, Navigate } from 'react-router';

import './index.css';

import App from './App.jsx';
import ErrorPage from './routes/ErrorPage.jsx';
import Auth from './routes/Auth.jsx';

import { API_BASE_URL } from './config.js';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/', 
        element: <Navigate to="/auth" replace /> 
      },
      {
      path: 'auth',
      element: <Auth API_BASE_URL={API_BASE_URL} />,
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)