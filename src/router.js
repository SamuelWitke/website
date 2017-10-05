import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

//Layouts
import Home from './components/Home/Home.js';
import MainLayout from './components/Home/main-layout.js';
//Pages
import TicTacToe from './components/TicTacToe';

export default (
  <Router history={browserHistory}>
    <Route component={MainLayout}>
      	<Route path="/" component={Home} />
		<Route path="TicTacToe"component={TicTacToe} />
  	</Route>
  </Router>
);

