import React from 'react'
import Container from 'react-bootstrap/esm/Container';
import { faVideo } from '@fortawesome/free-solid-svg-icons'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons';


function Footer() {
  return (
    <>
    <Container className='mt-4'>
        <Row >
          <Col md={3}>
              <span className='text-warning fs-2'>Media Player</span>
              <p>Media players are designed to decode and render multimedia content, allowing users to play audio, video, and other media files. </p>
          </Col>
          <Col md={2}>
              <h2 style={{textAlign:'center'}}>Links</h2>
              <ul>
                <a ><li>Landing Page</li></a>
                <a ><li> Home Page</li></a>
                <a ><li> Watch History</li></a>
              </ul>
          </Col>
          <Col md={1}>
          
          </Col>
          <Col md={2}>
                <h2>Guides</h2>
                <ul>
                  <li>React</li>
                  <li>React Bootstap</li>
                  <li>Bootswatch</li>
                </ul>
          </Col>
          <Col md={4}>
                <h2>Contact Us</h2>
                <input type="text" placeholder='Email id'/>
                <button className='btn btn-warning ms-3 text-dark'>Subscribe</button>
                
                <div className="icons d-flex mt-5">
                
                  <div className="insta "><FontAwesomeIcon icon={faInstagram} /> </div>
                  <div className="twitter ms-5">x </div>
                  <div className="twitter ms-5">f </div>
                  <div className="twitter ms-5">w </div>
                  <div className="twitter ms-5">lin </div>
                </div>
          </Col>
        </Row>
      </Container> 
    </>
  )
  
}

export default Footer