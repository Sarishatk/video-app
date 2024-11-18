import React,{useState} from 'react'
import { Modal, Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';


function Category() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
    <div className='d-grid'>
      <Button onClick={handleShow} variant="info">Add new Category</Button>
    </div>
    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add new catregory</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Please Fill the following details!!</p>
          <Form  className='border border-secondary p-3 '><Form.Group className='mb-5' controlId="formBasicEmail">
          <Form.Control type="text" placeholder="Enter category ID" />
         </Form.Group>
         <Form.Group  controlId="formBasicEmail">
          <Form.Control className='mb-5' type="text" placeholder="Enter category Name" />
         </Form.Group>         
         </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="info">Add</Button>
        </Modal.Footer>
      </Modal>
    </>
    
  )
}

export default Category
