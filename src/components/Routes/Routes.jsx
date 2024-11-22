import { createBrowserRouter, Outlet } from 'react-router';
import MainLayout from '../layout/MainLayout';
import Error from '../pages/Error';
import Home from '../pages/Home';
import Products from '../pages/Products';
import Services from '../pages/Services';
import About from '../pages/About';
import Register from '../pages/Register';
import Login from '../pages/Login';

const Routes = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      { path: '/', element: <Home /> },
      { path: 'products', element: <Products /> },
      { path: 'services', element: <Services /> },
      { path: 'about', element: <About /> },
      {
        path: 'auth',
        element: <Outlet />,
        children: [
          { path: 'register', element: <Register /> },
          { path: 'login', element: <Login /> },
        ],
      },
    ],
  },
]);

export default Routes;
