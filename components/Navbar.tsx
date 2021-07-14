import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import Link from 'next/link'
import { useUser } from '@auth0/nextjs-auth0'

const Header = () => {
  const { user, error, isLoading } = useUser()

  return (
    <header>
      <Navbar bg='primary' variant='dark' expand='lg' collapseOnSelect>
        <Container>
          <Link href='/'>
            <a>
              <Navbar.Brand>CardShop</Navbar.Brand>
            </a>
          </Link>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='mr-auto'>
              <Link href='/cart' passHref>
                <Nav.Link>
                  <i className='fas fa-shopping-cart'></i>Cart
                </Nav.Link>
              </Link>
              {!user && (
                <Link href='/api/auth/login' passHref>
                  <Nav.Link>
                    <i className='fas fa-user'></i>Login
                  </Nav.Link>
                </Link>
              )}
              {user && (
                <Link href='/api/auth/logout' passHref>
                  <Nav.Link>
                    <i className='fas fa-user'></i>Logout
                  </Nav.Link>
                </Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
