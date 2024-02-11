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
import { AuthService } from "@genezio/auth";

AuthService.getInstance().setTokenAndRegion("0-b4idckdfka34olxmzpt3udfxxq0hotvp", "us-east-1");
// TODO: Uncomment the following line to use Google Login
import { GoogleOAuthProvider } from '@react-oauth/google';

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
  <GoogleOAuthProvider clientId="876221639278-bolsnkebpdaptcsop1p507eb096bdhes.apps.googleusercontent.com"> 
  <RouterProvider router={router} />
  </GoogleOAuthProvider>
  </React.StrictMode>,
)
