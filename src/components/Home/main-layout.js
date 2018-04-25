import React, { Component } from 'react';
import logo from './logo.svg';
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import './Home.css';

const MainLayout = ({children}) =>(
    <div className="app">
        <header className="primary-header"></header>
        <aside className="primary-aside">
        </aside>
        <nav className="navbar navbar-inverse bg-inverse">
            <div className="App">	
                <img src={logo} className="App-logo" alt="logo" />
            </div>
            <nav className="nav navbar-nav">
                <li className="nav-item py-lg-3"><Link to="/" activeClassName="active"><h4>Home</h4></Link></li>
                <li className="nav-item py-lg-3"><Link to="/TicTacToe" activeClassName="active"><h4>TicTacToe</h4></Link></li>
                <li className="nav-item py-lg-3"><Link to="/AStar" activeClassName="active"><h4>A* Star Pathfinding</h4></Link></li>
                <li className="nav-item py-lg-3"><Link to="/MonteCarlo" activeClassName="active"><h4>Monte Carlo Method</h4></Link></li>
                <li className="nav-item py-lg-3"><a href="https://fierce-coast-55012.herokuapp.com/" activeClassName="active"><h4>Stroop Effect</h4></a></li>
                <li className="nav-item py-lg-3"><a href="http://partifystart.herokuapp.com/#/" activeClassName="active"><h4>Partify</h4></a></li>
            </nav>
        </nav>
        <main>{children}</main>
    </div>
)
export default MainLayout;
