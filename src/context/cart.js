import React, { Component } from 'react';

export const CartContext = React.createContext();

export class CartProvider extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cartItems : [],
            lengthCart: 0
        }

        this.addToCart = this.addToCart.bind(this);
    }

    addToCart(product) {
        console.log('aaaaaaaaaaaa', product);
        let arr = this.state.cartItems;
        arr.push(product);
        this.setState({
            cartItems: arr,
            lengthCart: this.state.cartItems.length
        });

        console.log(this.state.cartItems);
        
    }

    render() {
        return (
            <CartContext.Provider
                value = {{
                    cartItems: this.state.cartItems,
                    lengthCart: this.state.lengthCart,
                    addToCart: this.addToCart
                }}
            >
                {this.props.children}
            </CartContext.Provider>
        );
    }
}