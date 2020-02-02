import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';
import logger from 'redux-logger';
import { Router, Route, Redirect, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import App from './components/app';

import '../assets/stylesheets/application.scss';
import costsReducer from './reducers/costs_reducer';
import monhtsCostsReducer from './reducers/months_costs_reducer';

const history = createBrowserHistory();

const reducers = combineReducers({
  costs: costsReducer,
  monthsCosts: monhtsCostsReducer
});

const middlewares = applyMiddleware(reduxPromise, logger);

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers, {}, middlewares)}>
    <Router history={history}>
      <div className="thin-container">
        <Switch>
          <Route path="/costs/:monthsCosts?" component={App} />
        </Switch>
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);
