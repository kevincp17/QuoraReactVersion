import React from 'react';
import { Navigate, useRoutes,Outlet,useNavigate } from 'react-router-dom';
import HomePage from './Layout/HomePage'

export default function Routes() {
    return useRoutes([
      {
        path: '/',
        element: <HomePage/>,
      },
      { path: '*', element: <Navigate to="/404" replace /> }
    ]);
  }