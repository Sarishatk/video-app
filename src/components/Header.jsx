import React from 'react'
import { Navbar, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
function Header() {
  return (
    <div>
       <Navbar className="bg-primary">
        <Container>
        <Navbar.Brand >
          <Link className='fs-4' to={'/'}style={{textDecoration:'none',color:'white'}}>
          <i className="fa-solid fa-cloud-arrow-up overflow-hidden"></i>{" "}
            Media Player
            </Link>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header

