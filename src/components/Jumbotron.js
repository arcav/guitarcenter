import React from 'react';

//Componentes de Bootstrap4
import {Jumbotron as Jumbo, Container} from 'react-bootstrap';

//Styled Component
import styled from 'styled-components';

//Imagen de Jumbotron
import imgg from '../images/imgg.jpg';


//Variable que representa objeto js para Styled Component

const Styles = styled.div`
    .jumbo {
        background: url(${imgg}) no-repeat fixed bottom;
        background-size: cover;
        color: #efefef;
        height:200px;
        position: relative;
        z-index:-2;
    }

    .overlay {
        background-color: #000;
        opacity: 0.6;
        position: absolute;
        top: 0;
        left:0;
        bottom: 0;
        right: 0;
        z-index: -1;
    }
`;

  
//Variable de jumbotron con arrow function
export const Jumbotron = () => (
   //Objeto Styles de Styled
   <Styles>
        <Jumbo fluid className="jumbo">
            <div className="overlay"></div>
            <Container>
                <h1><b>GUITAR ON-LINE</b></h1>
                <p>The Best Guitars For You</p>
            </Container>
        </Jumbo>
    </Styles>
) 

