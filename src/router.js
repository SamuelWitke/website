import React, { Component } from 'react';
import { browserHistory, IndexRoute } from 'react-router';
import { BrowserRouter as Router, Route,} from 'react-router-dom'


//Layouts
import Home from './components/Home/Home.js';
import MainLayout from './components/Home/main-layout.js';
//Pages
import TicTacToe from './components/TicTacToe';

class App extends Component {
render() {
return (
	<Router basename={process.env.PUBLIC_URL}>
    	<Route component={MainLayout}>
      		<Route path={"/"} component={Home} />
			<Route path={"TicTacToe"} component={TicTacToe} />
  		</Route>
	</Router>
	);
}
}
export default App;
//<Router history={browserHistory}></Router>

