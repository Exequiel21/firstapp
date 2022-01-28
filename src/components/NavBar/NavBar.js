import React from 'react';
import {
    Navbar,
    NavbarBrand, 
    NavbarToggler,
    Collapse,
    Nav,
    NavItem,
    NavLink, 
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText} from 'reactstrap';
import './NavBar.css';

import CartWidget from './CartWidget';
import './CartWidget.css';
const NavBarComponent = ({logo, components, login, contacto, compras, foro}) => {
    return (
        <div>
        <Navbar className='navCss'
    color="dark"
    expand="md"
    fixed="top"
    dark
    >
    
    <NavbarBrand href="/">
        {logo}
        
    </NavbarBrand>
    <NavbarToggler onClick={function noRefCheck(){}} />
    <Collapse navbar>
        <Nav
        className="me-auto"
        navbar
        >
        <NavItem>
            <NavLink href="/">
            {components}
            </NavLink>
        </NavItem>
        <NavItem>
            <NavLink href="/">
            {foro}
            </NavLink>
        </NavItem>
        <UncontrolledDropdown
            inNavbar
            nav
        >
            <DropdownToggle
            caret
            nav
            >
            Options
            </DropdownToggle>
            <DropdownMenu right>
            <DropdownItem>
                {compras}
            </DropdownItem>
            <DropdownItem>
                {contacto}
            </DropdownItem>
            <DropdownItem divider />
            <DropdownItem>
            Reset
            </DropdownItem>
            </DropdownMenu>
        </UncontrolledDropdown>
        </Nav>
        <CartWidget />
        <NavbarText>
        {login}
        </NavbarText>
    </Collapse>
    </Navbar>
        </div>
    );
};

export default NavBarComponent;
