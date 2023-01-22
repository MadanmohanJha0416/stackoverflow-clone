import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Kommunicate from "@kommunicate/kommunicate-chatbot-plugin";
import {Provider} from 'react-redux';
import {legacy_createStore as createStore, applyMiddleware,compose } from 'redux'
import thunk from 'redux-thunk' 
import Reducers from './reducers/index';




const root = ReactDOM.createRoot(document.getElementById('root'));

Kommunicate.init("c99d44cf3f8c05bed65154c5e47431");

const store = createStore( Reducers, compose(applyMiddleware(thunk))) 

root.render(
  <Provider store ={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
   </Provider>,  
  
); 
