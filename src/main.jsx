import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router';
// import Router from './components/Routes/Router.jsx';
import Routes from './components/Routes/Routes.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={Routes}/>
  </StrictMode>,
);
