
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import VideoCard from './VideoCard';
import { addCategoryApi } from '../serivices/allApi';
import Modal from 'react-bootstrap/Modal';
import { ToastContainer, toast } from 'react-toastify';





function Category() {

  const [show, setShow] = useState(false)
  const [categoryName, setCatoryName] = useState("")

  const handleClose = () => {
    setShow(false);
    setShow(false)
    handleReset()
  }
  const handleShow = () => setShow(true)

  // console.log(categoryName);


  const handleReset = () => {
    setCatoryName("")
  }



  const addNewCategory = async () => {

    if (categoryName) {
      const reqBody = {
        category: categoryName,
        allVideos: []
      }
      const result = await addCategoryApi(reqBody)
      console.log(result);
      if (result.status >= 200 && result.status < 300) {
        toast.success('Category added successfully')
        handleClose()
      } else {
        toast.error('Something went Worng')
        handleReset()
      }

    } else {
      toast.error('Please Add a category name')
    }
  }

  return (
    <>

      <h5 className='mt-5'>Category</h5>
      <button onClick={handleShow} className='btn btn=warning mt-4 w-100 text-warning border-1 border-warning'>Add Category</button>




      <div className='border border-secondary p-3 rounded mt-4'>
        <div className='d-flex justify-content-between'>
          <h6>Malayalam</h6>
          <button className='btn btn-danger'><FontAwesomeIcon icon={faTrashCan} /></button>

        </div>
        <VideoCard />
      </div>




      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='text-warning'>Add Category</Modal.Title>

        </Modal.Header>
        <Modal.Body>
          <div className='p-4 rounded border-info border'>
            <input value={categoryName} type="text" placeholder='Enter Category Name' className='form-control' onChange={(e) => setCatoryName(e.target.value)} />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button varint="secondary" onClick={handleReset}>
            Cancel
          </Button>
          <Button varint="secondary" onClick={addNewCategory}>
            Add
          </Button>

        </Modal.Footer>

      </Modal>

      <ToastContainer position='top-center' onTouchMoveCapture="colord" autoClose={2000} />





    </>
  )
}

export default Category
