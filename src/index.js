import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./style.scss"
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import { AuthProvider } from './context/AuthContext';
import { ChatContextProvider } from './context/ChatContext';

const router = createBrowserRouter([
  {
    path: "/",
    element:  <Home />,
  },
  {
    path: "/login",
    element:  <Login />,
  },
  {
    path: "/register",
    element:  <Register />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthProvider>
    <ChatContextProvider>
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    </ChatContextProvider>
  </AuthProvider>
);
