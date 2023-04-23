import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import App from './components/App/App';
import './styles/index.css';


hydrateRoot(
  document.getElementById('root'),
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
