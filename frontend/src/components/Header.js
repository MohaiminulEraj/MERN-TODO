import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FaUserAlt, FaSignInAlt, FaSignOutAlt, FaHome, FaBell } from 'react-icons/fa'
const Header = () => {
    return (
        <header>
            <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
                <Container>
                    <Navbar.Brand href="/">MERN TODO</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="#home"><FaUserAlt /> REGISTER</Nav.Link>
                            <Nav.Link href="#link"><FaSignInAlt /> LOGIN</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header
