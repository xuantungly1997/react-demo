import React, { Component } from 'react';
import {Container, Row, Col, Card, CardImg, CardText, CardBody,
  CardTitle, Button } from 'reactstrap';

import axios from 'axios';

import { CartContext } from '../context/cart'

class Product extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
      isLoading: true
    };
  }

  componentDidMount() {
    axios.get(`https://server-restful-api-0610.herokuapp.com/books`)
      .then(res => {
        this.setState({ 
          products: res.data,
          isLoading: false
         });
      })
      .catch(error => console.log(error));
  }
    render(){
      //destructuring
      const { products , isLoading} = this.state;
      return (
        <Container>
          <h2>Products</h2>
          <Row>
            {isLoading && <div className="loading">Loading&#8230;</div>}
            { products.map( product => (
              <Col sm = "4" key = {product._id}> 
                <Card>
                  <CardImg top width="100%" src={product.image} alt="Card image cap" />
                  <CardBody>
                    <CardTitle>{product.title}</CardTitle>
                    <CardText>{product.description}</CardText>
                    <CartContext.Consumer>
                      {({addToCart}) => (
                        <Button onClick = {() => addToCart(product)}>
                          Add
                          Add
                          Add
                          Add
                        </Button>
                      )}
                    </CartContext.Consumer>
                  </CardBody>
                </Card>
              </Col>
            ))}
          </Row>
          <p>aloooooo</p>
        </Container>
      );
    }
  }

export default Product;