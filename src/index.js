import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Router from './router';
global.jQuery = require('jquery');
require('bootstrap');

ReactDOM.render(Router, document.getElementById('root'));

registerServiceWorker();
