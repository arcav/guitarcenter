import React from 'react';
//Componentes de Bootstrap4
import { Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom'
//Styled Component
import styled from 'styled-components';
//Variable que representa objeto js para Styled Component

const Styles = styled.div`
.navbar {
  background-color: #222;
}
  .navbar-toggler{
  background-color: white;
}  
.navbar-brand,
.navbar-nav 
 .nav-link {
  color: white;
  &:hover,:focus {
    color: yellow;
    };
  }
`

//Variable de NavigationBar con arrow function
export const NavigationBar = () => (
  //Objeto Styles de Styled
  <Styles>
    <Navbar expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item><Nav.Link exact={true} as={NavLink} to="/"activeClassName="deactived" ><h6>Home</h6></Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link   as={NavLink} to="/About" activeClassName="deactived"><h6>About</h6></Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link as={NavLink} to="/Contact" activeClassName="deactived"><h6>Contact</h6></Nav.Link></Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
);
