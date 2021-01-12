import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Home } from '../views/Home'
import { Contact } from '../views/Contact';
import { About } from '../views/About';
import { NoMatch } from '../views/NoMatch';


const Routes = () => {
    return (
        <>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/About" component={About} />
                <Route path="/Contact" component={Contact} />
                <Route path="/Nomatch" component={NoMatch} />
            </Switch>
        </>
    );
};

export default Routes
 