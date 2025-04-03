import React from 'react'
import { faVideo } from '@fortawesome/free-solid-svg-icons'
import { Container } from 'react-bootstrap'
import { Navbar } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function Header() {
  return (
    <Navbar className="bg-primary">
    <Container>
      <Navbar.Brand  className='text-warning fs-3'>
      <FontAwesomeIcon icon={faVideo} beat className='me-3' />
        Media Player 
      </Navbar.Brand>
    </Container>
  </Navbar>
  )
}

export default Header