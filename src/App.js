import React from "react";
import Routes from "./Routes/Routes";
//Componentes
import { Layout } from "./components/Layout";
import { NavigationBar } from "./components/NavigationBar";
import { Jumbotron } from "./components/Jumbotron";

//Funcion con componentes y rutas
const App = () => {
  return (
    <>
      <NavigationBar />
      <Jumbotron />
      <Layout>
        <Routes />
      </Layout>
    </>
  );
};
export default App;
