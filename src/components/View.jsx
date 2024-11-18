import React from 'react'
import { Row, Col } from 'react-bootstrap'
import VideCard from './VideCard'
function View() {
  return (
   <Row>
      <Col sm={12} md={6} lg={4} xl={3} >
     < VideCard/>
      </Col>   
      

       </Row>
  )
}

export default View
