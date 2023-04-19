import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import './index.css';
import App from './components/App/App';

hydrateRoot(document.getElementById('root'), <App />);
