import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import SecretView from './routes/secret';
import Login from './routes/login';
import Signup from './routes/signup';
// TODO: Uncomment the following line to use Google Login
// import { GoogleOAuthProvider } from '@react-oauth/google';

const router = createBrowserRouter([
  {
    path: "/",
    element: <SecretView />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
  {/* TODO: Uncomment the following line to use Google Login */}
  {/* <GoogleOAuthProvider clientId="<google_id>"> */}
  <RouterProvider router={router} />
  {/* </GoogleOAuthProvider> */}
  </React.StrictMode>,
)
