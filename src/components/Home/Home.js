import React, { Component } from 'react';
import logo from './logo.svg';
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
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
		 <div className="home-page">
        <h1>The app has React Router</h1>
        <p>
          While the <a href="https://css-tricks.com/learning-react-router/">CSS-Tricks article</a> for
          this guide covers an explanation of <strong>React Router</strong>, there
          are still many implementation details in this code that the article
          doesn't cover. For a better understanding of those details, see
          the <a href="https://github.com/bradwestfall/CSS-Tricks-React-Series">Github documentation</a> for
          this guide.
        </p>
        <p>
          As far as the [Search Title] and [Total Results] that you'll see on the results page,
          those are static for now. We will make them dynamic in the third guide.
        </p>
      </div>
      </div>
    );
  }
}

export default Home;
