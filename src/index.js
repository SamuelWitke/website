import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {Router, hashHistory } from 'react-router';
import thunk from 'redux-thunk';
import promise from 'redux-promise';


import routes from './router';
global.jQuery = require('jquery');
require('bootstrap');

const createStoreWithMiddleware = applyMiddleware(
  thunk
)(createStore);

ReactDOM.render(
    <Router history={hashHistory} routes={routes} />
, document.getElementById("root")
);
registerServiceWorker();
