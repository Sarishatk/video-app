import React from 'react'
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { Modal, Button } from 'react-bootstrap';
import { uploadVideo } from '../services/allAPI';

function Add() {
  const [video, setVideo] = useState({
    id: "", caption: "", url: "", embadedlink: ""
  })
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
   const extractUrl = (e) => {
    const { value } = e.target
    if(value){
    const embadedData = `https://www.youtube.com/embed/${value.slice(-11)}`
    setVideo({...video,embadedlink:embadedData})
    }else{
      setVideo({...video,embadedlink:""})

    }
  }
const handleUpload = async ()=>{
 const {id,caption,url,embadedlink} = video
 if(!id|| !caption || !url || !embadedlink){
  alert("please fill the form completely!!!")
 }else{
  const response = await uploadVideo (video)
  if(response.status>=200 && response.status<300){
    alert(`"${response.data.caption}"video uploaded successfully`)
    handleClose()
  }else{
    alert("please provide unique id for all videos !!!")
  }
 }
}
  return (
    <>
      <div className="d-flex align-items-center">
        <h5>Upload New Video</h5>
        <button onClick={handleShow} className='btn '><i className="fa-solid fa-circle-plus fs-5"></i></button>
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Upload a Video</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Please Fill the following details!!</p>
          <Form className='border border-secondary p-3 '><Form.Group onChange={(e) => setVideo
            ({ ...video, id: e.target.value })}
            className='mb-5' controlId="formBasicEmail ">
            <Form.Control type="text" placeholder="Enter video ID" />
          </Form.Group>
            <Form.Group onChange={(e) => setVideo
              ({ ...video, caption: e.target.value })} controlId="formBasicEmail">
              <Form.Control className='mb-5' type="text" placeholder="Enter Video Caption" />
            </Form.Group>
            <Form.Group onChange={(e) => setVideo
              ({ ...video, url: e.target.value })} controlId="formBasicEmail">
              <Form.Control className='mb-5' type="text" placeholder="Enter Video Image URL" />
            </Form.Group>
            <Form.Group onClick={extractUrl} onChange={(e) => setVideo
              ({ ...video, embadedlink: e.target.value })} controlId="formBasicEmail">
              <Form.Control className='mb-5' type="text" placeholder="Enter Youtube Video Link" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleUpload} variant="primary">Upload</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Add
// <iframe width="914" height="514" src="https://www.youtube.com/embed/s2skans2dP4" title="React JS Explained In 10 Minutes" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>