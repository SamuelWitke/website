import React, { Component } from 'react';
import './Home.css';
import './normalize.css'
import './img-info.css'
import logo from './logo.svg';

const Home = () =>(
    <div>
        <div className="content content--intro">
            <div className="content__inner">
                <h2 className="content__title">Samuel Witke</h2>
                <h3 className="content__subtitle">Portfolio</h3>
                <a href="https://docs.google.com/document/d/1Q7Ed1mpcnPyNY3sZK6LZyoUrv-YRULx255IWvTHOHow/edit?usp=sharing" className="enter">Explore</a>
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

export default Home;
