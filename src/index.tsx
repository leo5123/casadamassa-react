import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'normalize.css';
import Cardapio from './pages/Cardapio';
import Inicio from 'pages/Inicio';
import AppRouter from 'routes';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <AppRouter/>
  </React.StrictMode>
);


