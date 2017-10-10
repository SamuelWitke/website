import React, { Component } from 'react';
import './TicTacToe.css'
import {Layer, Rect, Stage, Group} from 'react-konva';


Class MonteCarlo extends React.Component {
    render() {
        <div>
            <div>
                  <Rect
                    x={10}
                    y={10}
                    width={50}
                    height={50}
                    fill={this.state.color}
                    shadowBlur={5}
                    onClick={this.handleClick}
                    />
            </div>
        </div>
    }
}
