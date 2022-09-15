import React from 'react';
import { Navigate, useRoutes,Outlet,useNavigate } from 'react-router-dom';
import HomePage from './Layout/HomePage'
import FollowPage from './Layout/FollowPage'
import AnswerPage from './Layout/AnswerPage'
import SpacePage from './Layout/SpacePage'
import NotificationPage from './Layout/NotificationPage'
import LoginPage from './Layout/LoginPage'

export default function Routes() {
    return useRoutes([
      {
        path: '/',
        element: <HomePage/>,
        children:[
          {path:'Home', element:<HomePage/>},
          {path:'Following', element:<FollowPage/>},
          {path:'Answer', element:<AnswerPage/>},
          {path:'Space', element:<SpacePage/>},
          {path:'Notification', element:<NotificationPage/>}
        ]
      },
      { path: 'Login', element: <LoginPage/> },
      { path: '*', element: <Navigate to="/404" replace /> }
    ]);
  }