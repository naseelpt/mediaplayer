import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideo } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
       <Navbar className="bg-transparent">
        <Container>
         <Link to={'/'} style={{textDecoration:'none'}}>
            <Navbar.Brand href="#home">
           <h3> <FontAwesomeIcon icon={faVideo} style={{color: "#897a43",} }  />  <span className='text-warning' >media player</span></h3>
            </Navbar.Brand>
         </Link>
        </Container>
      </Navbar>
    </>
  )
}

export default Header