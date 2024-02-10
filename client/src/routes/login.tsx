import React, { useState } from 'react';
// TODO: Uncomment the following line to use Google Login
// import { CredentialResponse, GoogleLogin } from '@react-oauth/google';
import "./styles.css";
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
  };

   // TODO Uncomment the following function to use Google Login
   // const handleGoogleLogin = (credentialResponse: CredentialResponse) => {
   // };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
      </div>
      <button type="submit">Login</button>
   
      {/* TODO: Uncomment the following line to use Google Login */}
      {/* <GoogleLogin
        onSuccess={credentialResponse => {
          console.log(credentialResponse);
          handleGoogleLogin(credentialResponse);
        }}
        onError={() => {
          console.log('Login Failed');
        }}
      /> */}
      <button onClick={() => navigate('/signup')}>Create an account</button>
      </form>
  );
};

export default Login;


