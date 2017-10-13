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
         			<h2>Welcome to React</h2>
				</div>
	  		<ul className="nav navbar-nav">
				<li className="nav-item py-lg-3"><Link to="/" activeClassName="active">Home</Link></li>
            	<li className="nav-item py-lg-3"><Link to="/TicTacToe" activeClassName="active">TicTacToe</Link></li>
            	<li className="nav-item py-lg-3"><Link to="/AStar" activeClassName="active">A* Star Pathfinding</Link></li>
            	<li className="nav-item py-lg-3"><Link to="/MonteCarlo" activeClassName="active">Monte Carlo Method</Link></li>
			</ul>
		</nav>
        <main>
          {this.props.children}
        </main>
      </div>
    );
  }
}
export default MainLayout;

