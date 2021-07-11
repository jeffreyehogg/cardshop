import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import Link from 'next/link'

const Header = () => {
  return (
    <header>
      <Navbar
        bg="primary"
        variant="dark"
        expand="lg"
        collapseOnSelect
        animation="false"
      >
        <Container>
          <Link href="/">
            <a>
              <Navbar.Brand>CardShop</Navbar.Brand>
            </a>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" animation="false">
            <Nav className="mr-auto">
              <Link href="/cart" passHref>
                <Nav.Link>
                  <i className="fas fa-shopping-cart"></i>Cart
                </Nav.Link>
              </Link>
              <Link href="/login" passHref>
                <Nav.Link>
                  <i className="fas fa-user"></i>Login
                </Nav.Link>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
