import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Counter } from '../components/counter/Counter';
import home from '../components/home/home';

const AppRoute = () => (
    <>
            <Router>
                <Route path="/" exact={true} component={Counter} />
                <Route path="/home" component={home} />
            </Router>

    </>
)

export default AppRoute;