import React from 'react';
import P5Wrapper from 'react-p5-wrapper';
import sketch from './AStar.js';
class AStar extends React.Component {
 render() {
    return( 
        <div className="container text-center">
        <h1 className="text-center"> Click two points to begin</h1>
        <p className="lead">The process of plotting an efficiently directed path between multiple points, called nodes. </p>
        <p className="lead"> Full repo available <a href="https://github.com/SamuelWitke/p5-Astar">here</a> </p>
        <p className="lead"> Improved A* implemetation available <a href="https://samuelwitke.github.io/p5-Astar/A-star-index.html">here</a> </p>
        <P5Wrapper sketch={sketch} />
    </div>
    );
  }
}
export default AStar;

