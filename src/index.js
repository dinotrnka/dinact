/* global document require */

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './views/containers/home';
import About from './views/containers/about';
import configureStore from './state/store';

ReactDOM.render(
  <Provider store={configureStore({})}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);
