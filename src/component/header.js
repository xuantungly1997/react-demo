import React, { useState } from 'react';

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    NavbarText
} from 'reactstrap';

import {Link} from "react-router-dom";

import {CartContext} from '../context/cart';

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    return (
        <div>
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/">reactstrap</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink><Link to="/">Home</Link></NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink><Link to="/product">Product</Link></NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink>
                                <CartContext.Consumer>
                                    {({lengthCart}) => (
                                        <Link to="/contact">Cart ({lengthCart})</Link>
                                    )}
                                </CartContext.Consumer>
                            </NavLink>
                        </NavItem>
                    </Nav>
                    <NavbarText>Simple Text</NavbarText>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default Header;