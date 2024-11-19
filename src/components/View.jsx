import React, { useEffect, useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import VideCard from './VideCard'
import { getAllvideo } from '../services/allAPI'
function View() {
const [allVideos,setallVideos] = useState([])

  const uploadAllvideos  = async()=>{
    // make api call
    const {data} = await  getAllvideo()
   setallVideos(data);
    
  }
  useEffect(()=>{
    uploadAllvideos()
  },[])
  console.log(allVideos);
  
  return (
   <Row>
    {
     allVideos.length>0?
     allVideos.map(video=>(
      <Col sm={12} md={6} lg={4} xl={3} >
      < VideCard displayData={video}/>
       </Col>   
     ))
     :<p className='fw-bolder mt-3 fs-5 text-danger'>Nothing to display !!! </p>
    }
       </Row>
    
  )
}

export default View
