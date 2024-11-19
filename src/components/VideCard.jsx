import React, { useState } from 'react'
import {  Card, Modal } from 'react-bootstrap';

function VideCard({displayData}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
    {
      displayData &&
      <Card className='mb-3'>
        <Card.Img onClick={handleShow} style={{height:'200px'}} className='w-100' variant="top" src={displayData?.url} />
        <Card.Body>
          <Card.Title className='d-flex  justify-content-between align-items-center'>
            <h6>{displayData?.caption}</h6>

          <button className='btn'><i className="fa-solid fa-trash text-danger"></i></button>
          </Card.Title>
        </Card.Body>
      </Card>
}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{displayData?.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe width={"100%"} height={"400px"} src={displayData?.embadedlink}  title={displayData?.caption}  allowFullscreen></iframe>
        </Modal.Body>

      </Modal>
    </>
  )
}

export default VideCard
