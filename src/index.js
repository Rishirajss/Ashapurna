import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/home/Home';
import Aboutmain from './pages/about/Aboutmain';
import Ourjourney from './pages/about/Ourjourney';
import Ourmanagement from './pages/about/Ourmanagement';
import Ourteam from './pages/about/Ourteam';
import Csr from './pages/about/Csr';
import Residence from './pages/home/Residence';
import Event from './pages/home/Event';
import Contact from './pages/home/Contact';

const root = ReactDOM.createRoot(document.getElementById('root'));
const routes = createBrowserRouter([
  {
    path:'/',
    element: <Home/>
  },
  {
    path:'/About-us',
    element: <Aboutmain/>
  },
  {
    path:'/Our-Journey',
    element: <Ourjourney/>
  },
  {
    path:'/Our-Management',
    element: <Ourmanagement/>
  },
  {
    path:'/Our-Team',
    element: <Ourteam/>
  },
  {
    path:'/CSR',
    element: <Csr/>
  },
  {
    path:'/Residence',
    element: <Residence/>
  },
  {
    path:'/Media and Event',
    element: <Event/>
  },
  {
    path:'/Contact-Us',
    element: <Contact/>
  }
])

root.render(
  <React.StrictMode>
    <RouterProvider router={routes}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
