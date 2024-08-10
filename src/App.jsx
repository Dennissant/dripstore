import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import Rotas from './pages/Rotas';

// Detecta se o ambiente é de produção ou desenvolvimento
const isProduction = process.env.NODE_ENV === 'production';
const basename = isProduction ? '/dripstore' : '/';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename={basename}>
    <Rotas />
  </BrowserRouter>
);
