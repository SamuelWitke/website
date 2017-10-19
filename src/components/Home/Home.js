import React, { Component } from 'react';
import './Home.css';
import './normalize.css'
import './img-info.css'
import logo from './logo.svg';

class Home extends Component {
  constructor(){
    super()
  }
  render() {
    return (
           <div>
            <div className="content content--intro">
				<div className="content__inner">
					<h2 className="content__title">Samuel Witke</h2>
					<h3 className="content__subtitle">Portfolio</h3>
					<a href="#" className="enter">Explore</a>
			    </div>
                </div>
				<div className="img-info">
					<p className='img-info__title'>
					 Image taken by Samuel Witke 
					in Copenhagen,Denmark 
					</p>
				</div>
            </div>
    );
  }
}

export default Home;
