import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import ErrorPage from './ErrorPage';
import Acts from './components/Acts';

import App from './App';
import Act from './components/Act';
import ThreeActStruct from './pages/ThreeActStruct';
import FiveActStruct from './pages/FiveActStruct';
import OneLineOrder from './pages/OneLineOrder';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "threeact",
        element: <ThreeActStruct />,
      },
      {
        path: "fiveact",
        element: <FiveActStruct />,
      },

      {
        path: "onelines",
        element: <OneLineOrder />,
      },
    ]
  },
]);
