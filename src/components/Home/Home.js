import React, { Component } from 'react';
import './Home.css';

/* Changes from original tutorial
 *  - Here we import the tic-tac-toe game from a module
 *    so we import the folder, and use the name
 *    TicTacToe instead of the generic Game
 *    (actually we can use any name we like
 *     such as import Foo from './TicTacToe')
 */

class Home extends Component {
  render() {
    return (
       <div className="container text-center">
            <h1>
            My name is Samuel Witke, this page is currently in development, but feel free to use the apps available.
            </h1>
            <h1>
            You can find my contact <a href="https://www.linkedin.com/in/samuelwitke"> here </a> 
            </h1>
      </div>
    );
  }
}

export default Home;
