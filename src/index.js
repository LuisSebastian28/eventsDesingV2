import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Test from './Test';
import Calendar from './calendar'

import { GoogleOAuthProvider } from '@react-oauth/google';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="214278282169-1kav589ffe2qmn9l3jo6ulshg5blfm6g.apps.googleusercontent.com">
      <Test />
      <App />
      <Calendar />
    </GoogleOAuthProvider>;
  </React.StrictMode>
);

