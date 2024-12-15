import React, { useState } from 'react'
import { Card, Modal } from 'react-bootstrap';
import { addHistory } from '../services/allAPI';

import { deleteavideo } from '../services/allAPI';

function VideCard({ displayData, setremoveVideo }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow =async ()=>{
    setShow(true)
    // get caption and link
    const {caption,embadedlink} = displayData
    // generate time stamp
    let today = new Date()
    const timeStamp = new Intl.DateTimeFormat('en-US',{year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',second:'2-digit'}).format(today)
    let reqBody = {
      caption,embadedlink,timeStamp
    }
    // make api
    await addHistory(reqBody)
  }
  const removeVideo = async () => {
    setShow(true);
    // get caption and link
    const { caption, embadedlink } = displayData
    // generate timestamp
    let today = new Date()
    const timestamp = new Intl.DateTimeFormat("en-GB", { years: 'numeric', month: '2-digit', dat: '2-digit', hour: '2-digit', minute: '2-digits', second: '2-digits' }).format(today)
    let reqBody = {
      caption, embadedlink, timestamp
    }
    await addHistory(reqBody)
  }
  const deleteVideo = async (id) => {
    const response = await deleteavideo(id)
    setremoveVideo(true)

  }
  return (
    <>
      {
        displayData &&
        <Card className='mb-3'>
          <Card.Img onClick={handleShow} style={{ height: '200px' }} className='w-100' variant="top" src={displayData?.url} />
          <Card.Body>
            <Card.Title className='d-flex  justify-content-between align-items-center'>
              <h6>{displayData?.caption}</h6>

              <button onClick={() => deleteVideo(displayData?.id)} className='btn'><i className="fa-solid fa-trash text-danger overflow-hidden"></i></button>
            </Card.Title>
          </Card.Body>
        </Card>
      }
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{displayData?.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe width={"100%"} height={"400px"} src={displayData?.embadedlink} title={displayData?.caption} allowFullscreen></iframe>
        </Modal.Body>

      </Modal>
    </>
  )
}

export default VideCard
