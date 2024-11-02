import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Home from './components/Home/Home';
import BookDetails from './components/BookDetails/BookDetails';
import BookAbout from './components/BookAbout/BookAbout';
import BookHistory from './components/BookHistory/BookHistory';
import Dashbord from './components/DashBord/Dashbord';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path:'/',
        element: <Home></Home>
      },
      {
        path:'/books/:bookId',
        element: <BookDetails></BookDetails>,
        loader:()=> fetch(`BookData.json`)
      },
      {
        path: '/about',
        element:<BookAbout></BookAbout>
      },
      {
        path:'/history',
        element:<BookHistory></BookHistory>
      },
      {
        path:'/dashboard',
        element:<Dashbord></Dashbord>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
       <RouterProvider router={router} />
  </StrictMode>,
)
