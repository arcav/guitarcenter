import React, { Component } from "react";
//Router para enrutar las paginas
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Paginas o Views
import {Home} from './views/Home';
import {Contact} from './views/Contact';
import {About} from './views/About';
import {NoMatch} from './views/NoMatch';

//Componentes
import { Layout} from './components/Layout';
import {NavigationBar} from './components/NavigationBar';
import {Jumbotron} from './components/Jumbotron';


//Clase con componentes y rutas
class App extends Component {
  render(){
    return (
      <React.Fragment>
       <NavigationBar/>
        <Jumbotron/>
        <Layout>
          <Router>
            <Switch>
              <Route exact path="/"component={Home}/>
              <Route exact path="/About"component={About}/>
              <Route exact path="/Contact"component={Contact}/>
              <Route component={NoMatch}/>
            </Switch>
          </Router>
        </Layout>
      </React.Fragment>
    );
  }
}   

export default App;

