import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import App from './components/App/App';

hydrateRoot(
  document.getElementById('root'),
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
