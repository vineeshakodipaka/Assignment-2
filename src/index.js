import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store';
const root = createRoot(document.getElementById('app'));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
