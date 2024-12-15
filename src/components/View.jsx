import React, { useEffect, useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import VideCard from './VideCard'
import { getAllvideo } from '../services/allAPI'
function View({uploadVideoServerResponse}) {
const [allVideos,setallVideos] = useState([])
const [removeVideo,setremoveVideo] = useState(false)
  const uploadAllvideos  = async()=>{
    // make api call
    const {data} = await  getAllvideo()
   setallVideos(data);
    
  }
  useEffect(()=>{
    setremoveVideo(false)
    uploadAllvideos()
  },[uploadVideoServerResponse,removeVideo])
  
  return (
   <Row>
    {
     allVideos.length>0?
     allVideos.map(video=>(
      <Col sm={12} md={6} lg={4} xl={3} >
      < VideCard displayData={video} setremoveVideo={setremoveVideo}/>
       </Col>   
     ))
     :<p className='fw-bolder mt-3 fs-5 text-danger'>Nothing to display !!! </p>
    }
       </Row>
    
  )
}

export default View
