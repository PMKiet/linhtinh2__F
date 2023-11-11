
import React, { useState } from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, Container, Collapse, NavbarToggler } from 'reactstrap';
import { NavLink } from "react-router-dom";
import '../../assets/styles/NavBar/NavBar.scss'

function NavBar(props) {

     const [isOpen, setIsOpen] = useState(false);

     const toggle = () => setIsOpen(!isOpen);

     return (
          <Navbar color="dark" dark expand="sm">
               <Container>
                    <NavbarBrand href="/">My Website</NavbarBrand>
                    <NavbarToggler onClick={toggle} />

                    <Collapse isOpen={isOpen} navbar>
                         <Nav className="ml-auto" navbar>
                              <NavItem>
                                   <NavLink className='nav-link' to="/">Home</NavLink>
                              </NavItem>
                              <NavItem>
                                   <NavLink className='nav-link' to="/about">About</NavLink>
                              </NavItem>
                              <NavItem>
                                   <NavLink className='nav-link' to="/contact">Contact</NavLink>
                              </NavItem>
                              <NavItem>
                                   <NavLink className='nav-link' to="/contact">Contact</NavLink>
                              </NavItem>
                         </Nav>
                    </Collapse>
               </Container>
          </Navbar>
     );
}

export default NavBar;