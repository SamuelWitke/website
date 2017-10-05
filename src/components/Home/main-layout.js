import React, { Component } from 'react';
import { Link } from 'react-router';
 
class MainLayout extends Component{
  render() {
    return (
      <div className="app">
        <header className="primary-header"></header>
        <aside className="primary-aside">
          <ul>
            <li><Link to="/" activeClassName="active">Home</Link></li>
            <li><Link to="/TicTacToe" activeClassName="active">TicTacToe</Link></li>
			<li><a href="https://samuelwitke.github.io/p5-Astar/live-A-star-index.html"> A Star </a></li>
          </ul>
        </aside>
        <main>
          {this.props.children}
        </main>
      </div>
    );
  }
}
export default MainLayout;

