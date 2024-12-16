import React,{useEffect, useState} from 'react'
import { Modal, Button } from 'react-bootstrap';
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Form from 'react-bootstrap/Form';
import { deleteCategory, getCategory, saveCategory } from '../services/allAPI';


function Category() {
  const[allcategory,setallcategory] = useState([])
  const [categoryname,setcategoryName] = useState("")
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleADDCategory=async()=>{
if(categoryname){
// make api
const body={
  categoryname,allVideos:[]
}
const response = await saveCategory(body)
if(response.status>=200 && response.status<300){
// hide modal
handleClose()
// reset state
setcategoryName("")
// call handlecategory
handleGetcategory()
}else{
  toast.warning("uploading Error...perform operation after sometime  !!!")
}
}else{
toast.info("pls provide catgory name....!")
}
  }
const handleGetcategory = async ()=>{
  const {data} =await getCategory()
  setallcategory(data)
}
const handledeleteCategory = async(id)=>{
  // make api call
  await deleteCategory(id)
  // get all categroty
  handleGetcategory()
}
useEffect(()=>{
  handleGetcategory()
},[])
const videoDropped=(e,categoryId)=>{
console.log("inside category id:"+categoryId);

}
const gragover = (e)=>{
  console.log("dragging over the category:");
  e.preventDefault()
}
  return (
    <>
    <div className='d-grid'>
      <Button onClick={handleShow} variant="info">Add new Category</Button>
    </div>
    {
      allcategory.length>0?allcategory?.map(item=>(
        <div className=' border  p-3 rounded mb-3 mt-3 ' droppable onDragOver={(e)=>gragover(e)} onDrop={(e)=>videoDropped(e,item?.id)}>
          <div className=' d-flex justify-content-between align-items-center'>
            <h6>{item?.categoryname}</h6>
            <button onClick={(e)=>handledeleteCategory(item?.id)} className='btn'><i className="fa-solid fa-trash text-danger"></i></button>
          </div>
        </div>
      )):<p className='fw-bolder mt-3 fs-5 text-danger'>No categories are added !!! </p>
    }
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
          <Form  className='border border-secondary p-3 '><Form.Group className='mb-5' controlId="formBasicEmail">
         </Form.Group>
         <form label>Enter category Name</form>
         <Form.Group  controlId="formBasicEmail">
          <Form.Control className='mb-5' type="text" placeholder="Enter category Name" onChange={(e)=>setcategoryName(e.target.value)} />
         </Form.Group>         
         </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleADDCategory} variant="info">Add</Button>
        </Modal.Footer>
      </Modal>
            <ToastContainer position='top-center' theme='colored' autoClose={2000}/>
      
    </>
    
  )
}

export default Category
