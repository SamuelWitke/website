import React, { Component } from 'react';
import "./AStar.css"
import "./A-star.js"

class AStar extends React.Component {
    render() {
            return (<div> 
                <h2> Click Two Points To Begin </h2>
                <div id="sketch-holder"></div>
	            <input type="button" value="Start Again?" onClick="window.location.reload()">
                <h1> Run it </h1>
            </div>
           );
    }
}
export default AStar;
