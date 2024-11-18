import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';

function LandingPage() {
  return (
    <>
      <Row className='mt-5 mb-5 align-items-center justify-content-between '>
        <Col></Col>
        <Col lg={4}>
          <h3>Welcome to <span className='text-warning'>Media player</span></h3>
          <p style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti assumenda nesciunt maiores deserunt est sed iure nihil. Assumenda autem est at? Doloremque iste voluptates veritatis consequatur? Quis est quae rem.</p>
          <button className="btn btn-primary mt-3 fw-bolder">Get Started</button>
        </Col>
        <Col></Col>
        <Col className='ps-5' lg={6}>
        <img className='img-fluid ms-5' src='https://i.pinimg.com/originals/33/a4/6f/33a46f727dbe790d436616a1f56fce9c.gif' alt=''></img>
        </Col>

      </Row>
      <div className="container mt-5 mb-5 d-flex justify-content-center align-items-center flex-column">
        <h3 >Features</h3>
        <div className="cards mt-3 d-flex justify-content-between w-100 align-items-center">
        <Card className='p-3 ms-5' style={{ width: '22rem' }}>
      <Card.Img height={'300px'} width={'300px'} variant="top" src="https://i.makeagif.com/media/1-08-2015/IpvF38.gif" />
      <Card.Body>
        <Card.Title>managing videos</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
    
      </Card.Body>
    </Card>
    <Card className='p-3 ms-5' style={{ width: '22rem' }}>
      <Card.Img height={'300px'} width={'300px'} variant="top" src="https://cdn.dribbble.com/users/348324/screenshots/1755160/media/ef94bdca73112c59af01e0a1037d09f5.gif" />
      <Card.Body>
        <Card.Title>Categories Videos</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
    
      </Card.Body>
    </Card>
    <Card className='p-3 ms-5' style={{ width: '22rem' }}>
      <Card.Img height={'300px'} width={'300px'} variant="top" src="https://cdn.pixabay.com/animation/2023/01/05/17/19/17-19-44-244_512.gif" />
      <Card.Body>
        <Card.Title>Watch History</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
    
      </Card.Body>
    </Card>
        </div>
      </div>
    </>
  )
}

export default LandingPage
