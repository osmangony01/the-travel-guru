import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import route from './routes/Route';
import { RouterProvider } from 'react-router-dom';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={route}></RouterProvider>
  </React.StrictMode>,
)
