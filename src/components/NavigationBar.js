import React from 'react';

//Componentes de Bootstrap4
import {Nav, Navbar} from 'react-bootstrap';

//Styled Component
import styled from 'styled-components';

//Variable que representa objeto js para Styled Component
const Styles = styled.div`
    .navbar{
        background-color: #222;
    }

    .navbar-brand, .navbar-nav .nav-link {
        color: #bbb;

        &:hover {
            color: white;
        }
    }
`;


  
//Variable de NavigationBar con arrow function

export const NavigationBar = () => (

    //Objeto Styles de Styled
    <Styles>
        <Navbar expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className= "ml-auto">
                  <Nav.Item><Nav.Link href="/"><h6>Home</h6></Nav.Link></Nav.Item>
                  <Nav.Item><Nav.Link href="/about"><h6>About</h6></Nav.Link></Nav.Item>
                  <Nav.Item><Nav.Link href="/contact"><h6>Contact</h6></Nav.Link></Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </Styles>
)
