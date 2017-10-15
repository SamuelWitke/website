import React, { Component } from 'react';
import logo from './logo.svg';
import { Link } from 'react-router';
import 'bootstrap/dist/css/bootstrap.css';
import './Home.css';
 
class MainLayout extends Component{
  render() {
    return (
      <div className="app">
        <header className="primary-header"></header>
        <aside className="primary-aside">
	    </aside>
		<nav className="navbar navbar-inverse bg-inverse">
				<div className="App">	
		 		<img src={logo} className="App-logo" alt="logo" />
         			<h4>Welcome to React</h4>
				</div>
	  		<nav className="nav navbar-nav">
				<li className="nav-item py-lg-3"><Link to="/" activeClassName="active"><h4>Home</h4></Link></li>
            	<li className="nav-item py-lg-3"><Link to="/TicTacToe" activeClassName="active"><h4>TicTacToe</h4></Link></li>
           	<li className="nav-item py-lg-3"><Link to="/AStar" activeClassName="active"><h4>A* Star Pathfinding</h4></Link></li>
          <li className="nav-item py-lg-3"><Link to="/MonteCarlo" activeClassName="active"><h4>Monte Carlo Method</h4></Link></li>
			</nav>
		</nav>
        <main>
          {this.props.children}
        </main>
      </div>
    );
  }
}
export default MainLayout;
