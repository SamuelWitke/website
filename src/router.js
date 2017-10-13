import React from 'react';
import {Route,IndexRoute } from 'react-router';

//Layouts
import Home from './components/Home/Home.js';
import MainLayout from './components/Home/main-layout.js';
//Pages
import TicTacToe from './components/TicTacToe';
import MonteCarlo from './components/MonteCarlo';
import AStar from './components/AStar';
export default (
<Route component={MainLayout}>
       	<Route path="/" component={Home} />
 		<Route path="TicTacToe"component={TicTacToe} />
 		<Route path="MonteCarlo"component={MonteCarlo} />
 		<Route path="AStar"component={AStar} />
</Route>
);
