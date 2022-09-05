import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './containers/App/App.js';
import { Provider } from 'react-redux';
import { store } from './containers/store';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
