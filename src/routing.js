import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux"; // allows us our application access to the store
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Contracts from 'Components/Contracts';
import NotFound from 'Components/NotFound';
import store from './store/index';
const routing = (
    <Router>
        <Switch>
            <Route exact path="/" component={Contracts} />
            <Route component={NotFound} />
        </Switch>
    </Router>
);

ReactDOM.render(<Provider store={store}>{routing}</Provider>, document.getElementById('root'));
