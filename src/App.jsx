import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Portfolio from './pages/portfolio/Portfolio';
import Contact from './pages/contact/Contact';
import AppLayout from './components/AppLayout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/portfolio',
        element: <Portfolio />,
      },
      {
        path: '/contact', // 혹시 '/contact' 오타일 수도 있음
        element: <Contact />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
