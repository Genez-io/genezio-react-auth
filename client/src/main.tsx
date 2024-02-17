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
import { GoogleOAuthProvider } from '@react-oauth/google';

// TODO Replace this with your own Genezio Token and Project Region
AuthService.getInstance().setTokenAndRegion("<YOUR_GENEZIO_TOKEN>", "<YOUR_PROJECT_REGION>");

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
  {/* TODO: Replace this with your own Google ID */}
  <GoogleOAuthProvider clientId="<YOUR_GOOGLE_ID>"> 
  <RouterProvider router={router} />
  </GoogleOAuthProvider>
  </React.StrictMode>,
)
