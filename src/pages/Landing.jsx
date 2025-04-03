import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

function Landing() {
    return (
        <>
            <Container className='mt-5 d-flex justify-content-center align-item-center'>
                <Row className='w-100'>
                    <Col md={6}>
                        <h2>Welcome to <span className='text-warning'>Media Player</span></h2>
                        <p className='mt-4' style={{ fontSize: '18px', textAlign: 'justify' }}>A media player app document typically outlines the functionalities, features, and development aspects of a software application designed to play audio and video files. It can include information on supported formats, playback controls, UI/UX design, and backend technologies. </p>

                        <button className='btn btn-warning mt-3 text-dark'>Get Started</button>
                    </Col>
                    <Col md={6} className='d-flex justify-content-center align-item-center'>
                        <img src="https://i.pinimg.com/originals/41/34/d8/4134d81e03e1341121826158833c73f7.gif" alt="" className='w-75' />
                    </Col>
                </Row>
            </Container>


            <Container className='mt-5'>
                <Row>

                    <Col md={4}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://i.pinimg.com/originals/53/b5/55/53b555c98e73777b01a4d25a0a5d2b77.gif" />
                            <Card.Body>
                                <Card.Title>Original</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>

                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://i.pinimg.com/originals/53/b5/55/53b555c98e73777b01a4d25a0a5d2b77.gif" />
                            <Card.Body>
                                <Card.Title>youtube</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>

                            </Card.Body>
                        </Card></Col>
                    <Col md={4}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://i.pinimg.com/originals/53/b5/55/53b555c98e73777b01a4d25a0a5d2b77.gif" />
                            <Card.Body>
                                <Card.Title>potify</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>

                            </Card.Body>
                        </Card></Col>
                </Row>
            </Container>
            
            <Container>
                <Row className='mt-5 p-5  border border-2 border-secondary rounded'>
                    <Col>
                        <h1 className='text-warning'>Simple fast and PowerFull</h1>
                        <p className='mt-4' style={{textAlign:'justify', fontSize:'18'}}> <span className='fs-4 text-warning'> Play Everthing</span> : Amet consectetur adipisicing elit. Autem veritatis totam tempore expediatal1  </p>
                        <p className='mt-4' style={{textAlign:'justify', fontSize:'18'}}> <span className='fs-4 text-warning'> Play Everthing</span> : Amet consectetur adipisicing elit. Autem veritatis totam tempore expediatal1  </p>
                        <p className='mt-4' style={{textAlign:'justify', fontSize:'18'}}> <span className='fs-4 text-warning'> Play Everthing</span> : Amet consectetur adipisicing elit. Autem veritatis totam tempore expediatal1  </p>
                        <p className='mt-4' style={{textAlign:'justify', fontSize:'18'}}> <span className='fs-4 text-warning'> Play Everthing</span> : Amet consectetur adipisicing elit. Autem veritatis totam tempore expediatal1  </p>
                    </Col>
                    <Col>
                        
                        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/V7s4o-ZWgg0?si=xwqlkDk7XWkmGg2E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                        
                    </Col>
                </Row>
            </Container>

        </>
    )
}

export default Landing