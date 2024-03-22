import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './components/Root';
import Home from './components/Home';
import Statistics from './components/Statistics';
import AppliedJob from './components/AppliedJob';
import Blog from './components/Blog';
import ErrorPage from './components/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/statistic",
        element: <Statistics></Statistics>
      },
      {
        path: "/applied",
        element: <AppliedJob></AppliedJob>
      },
      {
        path: "/blog",
        element: <Blog></Blog>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
