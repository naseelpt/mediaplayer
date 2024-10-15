import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';



function Landing() {
  return (
    <>
     <Container className='d-flex justify-content-center align-item-center py-5 px-4'>
      <Row className='mt-5 d-flex justify-content-center align-item-center'>
       
        <Col md={6}>
        <h2>welcome to <span className='text-warning'>media player</span></h2>
        <p style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure doloribus harum magni hic ullam odit esse, sequi commodi laboriosam unde atque. Obcaecati libero eius voluptatum excepturi sint, vel asperiores animi.</p>
        <Link to={'/home'}><button className='btn btn-warning mt-4'>Get start</button></Link>
        </Col>
        <Col md={1}></Col>
        <Col md={5}>
      <img src="https://i.pinimg.com/originals/0f/ae/e8/0faee8060a6f2d4d9a3aec8667ea2234.jpg" alt="no image" />
        </Col>
      </Row>
    </Container>


    <Container className='mt-5'>
      <h2 className='text-center'>features</h2>
      <Row >
      
        <Col md={1}> </Col>
        <Col md={10}>
        <Row>
          <Col md={4}   className='p-5'>
          <Card style={{ width: '100%' }}>
      <Card.Img variant="top" src="https://i2.wp.com/68.media.tumblr.com/2a2413ff0e4ddb7f413ca6a7fbe00388/tumblr_oeukkkWZJ41vsjcxvo1_500.gif" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
       
      </Card.Body>
    </Card>
          </Col>
          <Col md={4} className='p-5'>
          <Card style={{ width: '100%' }}>
      <Card.Img variant="top" src="https://i2.wp.com/68.media.tumblr.com/2a2413ff0e4ddb7f413ca6a7fbe00388/tumblr_oeukkkWZJ41vsjcxvo1_500.gif" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
       
      </Card.Body>
    </Card></Col>
          <Col md={4}  className='p-5'>
          <Card style={{ width: '100%' }}>
      <Card.Img variant="top" src="https://i2.wp.com/68.media.tumblr.com/2a2413ff0e4ddb7f413ca6a7fbe00388/tumblr_oeukkkWZJ41vsjcxvo1_500.gif" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
       
      </Card.Body>
    </Card></Col>


        </Row>
        </Col>
        <Col md={1}></Col>
      </Row>
    </Container>

    <div className='container'>
      <div className='row'>
       <div className='col border border-secondary border-2 rounded p-5'>
        <div className='row'>
        <div className='col-md-6 '>
          <h2>simple fast and powerfull</h2>
          <p><span className='fs-4'>Play Everything</span>:Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita cupiditate quisquam inventore, ea ab accusantium deleniti illum, voluptate repellendus nobis magni voluptatem! Quidem impedit ipsam beatae adipisci culpa hic dignissimos!</p>
          <p className='mt-2'><span className='fs-4'>Play Everything</span>:Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita cupiditate quisquam inventore, ea ab accusantium deleniti illum, voluptate repellendus nobis magni voluptatem! Quidem impedit ipsam beatae adipisci culpa hic dignissimos!</p>
          <p className='mt-2'><span className='fs-4'>Play Everything</span>:Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita cupiditate quisquam inventore, ea ab accusantium deleniti illum, voluptate repellendus nobis magni voluptatem! Quidem impedit ipsam beatae adipisci culpa hic dignissimos!</p>
        </div>
        <div className='col-md-6'></div>
        </div>
       </div>
      </div>
    </div>


    </>
  )
}

export default Landing