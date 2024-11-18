import React from 'react'
import View from '../components/View'
import Add from '../components/Add';
import Category from '../components/Category';

import {Link} from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'

function Home() {
  return (
    <>
      <div className="title container align-items-center d-flex justify-content-between mt-5 mb-5"> 
      <div className="add"><Add/> </div>
      <Link style={{textDecoration:'none',color:'white'}} to={'/Watch-History'} className='fs-5'>Watch History</Link>
      </div>
      <Row className="container-fluid  w-100  ">
        <Col lg={8} className="all-videos">
        <h3>All videos</h3>
        <div className="videos"><View/></div>
        </Col>
        <Col lg={3} className=" ms-5 category">
        <Category/></Col>

      </Row>
    </>
  )
}

export default Home
