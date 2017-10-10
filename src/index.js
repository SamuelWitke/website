import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware } from 'redux';
import {Router, hashHistory } from 'react-router';
import thunk from 'redux-thunk';


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
