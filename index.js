import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import App from './src/App';
import configureStore from './src/store';

const store = configureStore();
const rootEl = document.getElementById('root');

render(
  <Provider store={store}>
    <App/>
  </Provider>,
  rootEl
);
