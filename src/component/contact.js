import React from 'react';
import { CartContext } from '../context/cart';
import {Container, Row, Col, Card, CardImg, CardText, CardBody,
  CardTitle, Button } from 'reactstrap';

const Contact = () => {
    return (
        <Container>
            <h1>CART</h1>
          <Row>
            <CartContext.Consumer>
              {
                ({cartItems}) => (
                  cartItems.map(pro => (
                    <Col sm = "4" key = {pro._id}> 
                      <Card>
                        <CardImg top width="100%" src={pro.image} alt="Card image cap" />
                        <CardBody>
                          <CardTitle>{pro.title}</CardTitle>
                          <CardText>{pro.description}</CardText>
                        </CardBody>
                      </Card>
                    </Col>
                  ))
                )}
            </CartContext.Consumer>
            <p>aaaa</p>
          </Row>
        </Container>
    );
  }

export default Contact;