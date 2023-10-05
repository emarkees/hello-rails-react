// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails

import React from 'react';
import ReactDOM from 'react-dom';
import store from './redux/store.js';
import App from './component/app.js'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);