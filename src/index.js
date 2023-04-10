import React from 'react';
import ReactDOM from 'react-dom/client';  //бібліотека, яка надає методи для рендерингу
import { App } from 'components/App';
import './index.css'; // стилізація

// отримуємо корінь додатку + рендер
ReactDOM.createRoot(document.getElementById('root')).render(

  // використовуємо строгий режим
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
