import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Provider} from "react-redux";
import Store from './redux/Store';
import { Toaster } from 'react-hot-toast';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Provider store={Store}>
  <Toaster position="bottom-center" reverseOrder={false} />
    <App/>
    </Provider>
  </React.StrictMode>
);

