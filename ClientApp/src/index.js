import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { authProvider } from "./auth/authProvider";
import { store } from "./state/index";
import AzureAD from 'react-aad-msal';
import { Provider } from 'react-redux';


const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
const rootElement = document.getElementById('root');


ReactDOM.render(
  <Provider store={store}>
    <AzureAD
      provider={authProvider}
      reduxStore={store}
      forceLogin={true}>
      <BrowserRouter basename={baseUrl}>
        <App />
      </BrowserRouter>
    </AzureAD>
  </Provider>,
  rootElement);


// ReactDOM.render(
//   <BrowserRouter basename={baseUrl}>
//     <App />
//   </BrowserRouter>,
//   rootElement);

registerServiceWorker();

