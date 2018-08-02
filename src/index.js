import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { ConnectedRouter } from "react-router-redux";

import App from './App';
import getStore, { history } from './common/store'

ReactDOM.render(
  <Provider store={getStore()}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>, document.getElementById('root'));
registerServiceWorker();
