import React from "react";
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';


const root = createRoot(document.getElementById('root'));

root.render(
<Auth0Provider
    domain="dev-w2u8bk5t4c7a6pdw.us.auth0.com"
    clientId="47WmktLtvuiufraou6ZPEnv0CgdOhnnE"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Auth0Provider>,
);