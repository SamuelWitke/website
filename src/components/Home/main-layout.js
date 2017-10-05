import React, { Component } from 'react';
import logo from './logo.svg';
import { Link } from 'react-router';
import 'bootstrap/dist/css/bootstrap.css';


 
class MainLayout extends Component{
  render() {
    return (
      <div className="app">
        <header className="primary-header"></header>
        <aside className="primary-aside">
	    </aside>
		<nav class="navbar navbar-inverse bg-inverse">
				<div class="App">	
		 		<img src={logo} className="App-logo" alt="logo" />
         			<h2>Welcome to React</h2>
				</div>
	  		<ul class="nav navbar-nav">
				<li><Link to="/" activeClassName="active">Home</Link></li>
            	<li><Link to="/TicTacToe" activeClassName="active">TicTacToe</Link></li>
				<li><a href="https://samuelwitke.github.io/p5-Astar/live-A-star-index.html"> A Star </a></li>
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

