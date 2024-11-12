import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { store } from './app/store';
import { Provider } from 'react-redux'

const redirectBasedOnScreenSize = () => {
  if (window.matchMedia("(max-width: 768px)").matches) {
    window.location.href = "https://fims-mobile.vercel.app";
    return true;
  } else {
    return false;
  }
};

const root = ReactDOM.createRoot(document.getElementById('root'));
if (!redirectBasedOnScreenSize()){
  root.render(
    <Provider store={store}>
      <App />
    </Provider>
    
  );
}

