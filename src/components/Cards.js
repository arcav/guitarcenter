import React from 'react'
//Componentes de Bootstrap4
import {Card, Button} from 'react-bootstrap';
//Imagen de Card
import imgg from '../images/imgg.jpg';
//Variable de Cards con arrow function
export default function Cards() {
    return (
        <>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src= {imgg} />
                <Card.Body>
                 <Card.Title>Fender</Card.Title>
                    <Card.Text>Stratocasters Models</Card.Text>
                    <Button href="Catalogue"variant="dark">Catalogue</Button>
                </Card.Body>
         </Card>
         </>
                    )
                }


