import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';
import logger from 'redux-logger';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createHistory as history } from 'history';

import CostsIndex from './containers/costs_index';

import '../assets/stylesheets/application.scss';
import costsReducer from './reducers/costs_reducer';

import CostsIndex from './containers/costs_index';

const reducers = combineReducers({
  costs: (state = [], action) => //implement postsReducer
});

const middlewares = applyMiddleware(reduxPromise, logger);

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers, {}, middlewares)}>
    <Router history={history}>
      <div className="thin-container">
        <Switch>
          <Route path="/" exact component={ CostsIndex } />
        </Switch>
      </div>
    </Router>
  </Provider>,
  document.getElementById('root');
);
