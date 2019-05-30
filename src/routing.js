import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Contracts from 'Components/Contracts';
import NotFound from 'Components/NotFound';
const routing = (
    <Router>
        <Switch>
            <Route exact path="/" component={Contracts} />
            <Route component={NotFound} />
        </Switch>
    </Router>
);

ReactDOM.render(routing, document.getElementById('root'));
