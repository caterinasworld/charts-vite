import React from 'react';
import ReactDOM from 'react-dom/client';
import Root from './routes/root';
import ErrorPage from './routes/error-page';
import Main from './routes/main';
import Info from './routes/info';
import Charts from './routes/charts';
import Contact from './routes/contact';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: 'main/',
    element: <Main />,
  },
  {
    path: 'info/',
    element: <Info />,
  },
  {
    path: 'charts/',
    element: <Charts />,
  },
  {
    path: 'contact/',
    element: <Contact />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
