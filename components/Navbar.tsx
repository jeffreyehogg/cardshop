import React from 'react'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import Link from 'next/link'
import { useUser } from '@auth0/nextjs-auth0'

const Header = () => {
  const { user, error, isLoading } = useUser()
  console.log(user)

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
            <Nav className='ms-auto'>
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
                <>
                  <NavDropdown id='basic-navbar-nav-dropdown' title={user.name}>
                    <Link href='/profile' passHref>
                      <NavDropdown.Item>
                        <i className='fas fa-user'></i>Profile
                      </NavDropdown.Item>
                    </Link>
                    <Link href='/api/auth/logout' passHref>
                      <NavDropdown.Item>
                        <i className='fas fa-user-times'></i>Logout
                      </NavDropdown.Item>
                    </Link>
                  </NavDropdown>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
