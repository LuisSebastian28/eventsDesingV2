import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import './App.css';

function App() {
  const handleLoginSuccess = (credentialResponse) => {
    const credentialResponseDecoded = jwtDecode(credentialResponse.credential);

    localStorage.setItem('credentials', JSON.stringify(credentialResponseDecoded));
    
  };

  const handleLoginError = () => {
    console.log('Login Failed');
  };

  return (
    <div>
      <GoogleLogin onSuccess={handleLoginSuccess} onError={handleLoginError} />
    </div>
  );
}

export default App;
