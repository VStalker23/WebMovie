import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Nav, Navbar } from "react-bootstrap"
import { useAuth } from '../context/AuthContext'
import "../styles/settings.css"


function NavBar() {
  const { getUser, userIsAuthenticated, userLogout } = useAuth()

  const logout = () => {
    userLogout()
  }

  const enterMenuStyle = () => {
    return userIsAuthenticated() ? { "display": "none" } : { "display": "block" }
  }

  const logoutMenuStyle = () => {
    return userIsAuthenticated() ? { "display": "block" } : { "display": "none" }
  }

  const adminPageStyle = () => {
    const user = getUser()
    return user && user.data.rol[0] === 'ADMIN' ? { "display": "block" } : { "display": "none" }
  }

  const userPageStyle = () => {
    const user = getUser()
    return user && user.data.rol[0] === 'USER' ? { "display": "block" } : { "display": "none" }
  }

  const getUserName = () => {
    const user = getUser()
    return user ? user.data.name : ''
  }

  return (
    <>
    <div >
    <Navbar className=" bg-secondary bg-gradient text-white rounded-5 "  expand="lg" >
      <Container >
        <Navbar.Brand header href='/' className='text-warning'>Movie Storm</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto, center-navbar">
          <Nav.Link as={Link} exect='true' to='/' className="p-3 mb-2 bg-secondary bg-gradient text-warning rounded-5 fs-5">Home</Nav.Link>
          <Nav.Link as={Link} to='/adminpage' style={adminPageStyle()} className="p-3 mb-2 bg-secondary bg-gradient text-warning rounded-5 fs-5">AdminPage</Nav.Link>
          <Nav.Link as={Link} to='/userpage' style={userPageStyle()} className="p-3 mb-2 bg-secondary bg-gradient text-warning rounded-5 fs-5">UserPage</Nav.Link>
          <Nav.Link as={Link} to='/login' style={enterMenuStyle()} className="p-3 mb-2 bg-secondary bg-gradient text-warning rounded-5 fs-5">Login</Nav.Link>
          <Nav.Link as={Link} to='/signup' style={enterMenuStyle()} className="p-3 mb-2 bg-secondary bg-gradient text-warning rounded-5 fs-5">Sign Up</Nav.Link>
          <Nav.Link as={Link} to='/ContactForm' style={enterMenuStyle()} className="p-3 mb-2 bg-secondary bg-gradient text-warning rounded-5 fs-5">Contact Us</Nav.Link>
          <Nav.Link as={Link} to='/' style={logoutMenuStyle()} onClick={logout} className="p-3 mb-2 bg-secondary bg-gradient text-warning rounded-5 fs-5">Logout</Nav.Link>
          <Nav.Item header style={logoutMenuStyle()}>{`Hi ${getUserName()}`}</Nav.Item>
        </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
    </>
  )
}

export default NavBar