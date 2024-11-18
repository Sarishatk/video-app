import React, { useState } from 'react'
import {  Card, Modal } from 'react-bootstrap';

function VideCard() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Card >
        <Card.Img onClick={handleShow} className='w-100' variant="top" src='https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg' />
        <Card.Body>
          <Card.Title className='d-flex  justify-content-between align-items-center'><h6>video caption</h6>

          <button className='btn'><i className="fa-solid fa-trash text-danger"></i></button>
          </Card.Title>
        </Card.Body>
      </Card>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe width={"100%"} height={"400px"} src="https://www.youtube.com/embed/s2skans2dP4?autoplay=1" title="React JS Explained In 10 Minutes" frameborder="0"  allowfullscreen></iframe>
        </Modal.Body>

      </Modal>
    </>
  )
}

export default VideCard
