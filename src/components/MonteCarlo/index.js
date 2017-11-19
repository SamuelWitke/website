import React, { Component } from 'react';
import P5Wrapper from 'react-p5-wrapper';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';
//import sketch from './sketch.js';
const styles = {                                                      
  slider: {
  backgroundColor: "#E0E0E0",                                                   
  padding: "20px",                                                              
	paddingTop:'10px',
}
};


class MonteCarlo extends React.Component {
		constructor(props) {
			super(props);
    	this.state = {
      	value:100, 
				pi:0
    		};
			this.sketch = this.sketch.bind(this);
			this.monteCarlo = this.mon
		}
		sketch (p) {
			let amt; 
			let d = [30, 20, 85, 20, 75]
			p.setup = ()=> {
				p.createCanvas(720, 800);
			  p.background(0);

 				p.stroke(153);
				/*
				p.line(d[0],d[1],d[2],d[3]);
				p.line(d[2],d[1],d[2],d[4]);
				p.line(d[2],d[4],d[0],d[4]);
				p.line(d[0],d[3],d[0],d[4]);
				*/
				p.line(620,820,620,620);
			}
			const monteCarlo = (n)=> {
				let r = 5;
				let points_total = 0;
				let points_inside = 0;
				for(let i=0;i<n;i++) {
  				points_total++;
  				let x = Math.random() * r * 2 - r;
  				let y = Math.random() * r * 2 - r;
  				if (Math.pow(x, 2) + Math.pow(y, 2) < Math.pow(r, 2))
    				points_inside++;
				}
				let pi=(4 * points_inside / points_total);
    		console.log(points_inside + "/" + points_total + " pi == " + pi);
				this.setState({pi:pi});
			}
			p.draw = ()=> {
				if(amt != this.state.value){
					amt = this.state.value;
					monteCarlo(amt);	
				}
			}
		}
    render() {
        return(
				<div className="container">
           <h1 className="display-3">Use the slider to calculate the value of Pi</h1> 
  				<div>
						<P5Wrapper sketch={this.sketch} />
            </div>
						<div className="jumbotron">{this.state.pi}</div>
						<div style={styles.slider}>
						<InputRange
 							step={100}
        			maxValue={5000}
  						value={this.state.value}
  						onChange={value => this.setState({ value })}
						/>
						</div>

        </div>
      );
    }
}
export default MonteCarlo;
