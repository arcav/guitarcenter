import React from "react";
import Routes from './Routes/Routes'
import { BrowserRouter } from 'react-router-dom'
//Componentes
import { Layout } from './components/Layout';
import { NavigationBar } from './components/NavigationBar';
import { Jumbotron } from './components/Jumbotron';

//Funcion con componentes y rutas
const App = () => {
  return (
    <BrowserRouter>
        <NavigationBar />
        <Jumbotron />
        <Layout>
          <Routes />   
        </Layout>
    </BrowserRouter>
  );
};
export default App;

