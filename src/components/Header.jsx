import React from 'react'
import "../App.css"
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <div>
        <Navbar expand="lg" variant="dark" bg="dark">
          <Container>
            <Navbar.Brand href="#">Header</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link><Link className='Link' to={'/'}>Главная</Link></Nav.Link>
                <Nav.Link><Link className='Link' to={'/Description'}>Описание</Link></Nav.Link>
                <Nav.Link><Link className='Link' exact to={'/Form'}>Обратная связь</Link></Nav.Link>
              </Nav>
          </Container>
        </Navbar>
    </div>
  )
}

export default Header