import React from 'react';
import { Switch, Route } from 'react-router-dom'
//Layouts
import Home from './components/Home/Home.js';
import MainLayout from './components/Home/main-layout.js';
//Pages
import TicTacToe from './components/TicTacToe';
import MonteCarlo from './components/MonteCarlo';
import AStar from './components/AStar';
import { BrowserRouter } from 'react-router-dom'

const App = ()=> (
    <BrowserRouter>
        <MainLayout>
            <Switch>
                <Route path="/MonteCarlo"component={MonteCarlo} />
                <Route path="/AStar"component={AStar} />
                <Route exact path="/TicTacToe"component={TicTacToe} />
                <Route exact path="/" component={Home} />
            </Switch>
        </MainLayout>
    </BrowserRouter>
);

export default App;
