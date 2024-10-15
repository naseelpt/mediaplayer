import React, { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Videocard from './Videocard';
import { addCategoreyApi, addVideoToCategoryApi, deleteCategoryApi, getAllCategoryApi } from '../server/allApi';
import { toast } from 'react-toastify';

function Category({videostatus}) {
  const [show, setShow] = useState(false);
  const [categoryNmae,setcategoryNmae] = useState("")
  const [allCategory,setallCategory]= useState([])
  const[addcategoreystatus,setaddcategoreystatus]= useState({})
  const[deletecategorystatus,setdeletecategorystatus] = useState({})
  const[videocategorystatus,setVideoCategoryStatus] = useState({})
  console.log(categoryNmae);

  const handleCancel = ()=>{
    setcategoryNmae("")
  }
  

  const handleClose = () =>{ setShow(false);
    handleCancel()
  }
  const handleShow = () => setShow(true);

const handleAdd = async ()=>{

 if(categoryNmae){
  const reqBody ={
    Category: categoryNmae,
    allVideos:[]
  }
  const result = await addCategoreyApi(reqBody)
  console.log(result);

  if(result.status>=200 && result.status<300){
    toast.success('category addedd successfully')
    handleClose()
    setaddcategoreystatus(result.data)
  }
  else{
    toast.error('something went wrong')
    handleClose()
  }
 }
 else{
  toast.info('please add a category name')
 }
  

}

const getCategory = async ()=>{
  const result = await getAllCategoryApi()
  setallCategory(result.data);
  
}
console.log(allCategory);


const handleDelete = async(id)=>{
  const result = await deleteCategoryApi(id)
  console.log(result);

  if(result.status>=200 && result.status<300){
    setdeletecategorystatus(result.data)
  }
  
}

const ondrag = (e)=>{
  e.preventDefault()
}
const videoDrop =async (e,categoryDetails)=>{
  console.log(categoryDetails);

  const videoDetails =JSON.parse(e.dataTransfer.getData("videoDetails"))
  console.log(videoDetails);

if(categoryDetails.allVideos.find((item)=>item.id==videoDetails.id)){
  toast.error('video already present in the category')
}
else{
  categoryDetails.allVideos.push(videoDetails)
  console.log(categoryDetails);

 const result = await addVideoToCategoryApi(categoryDetails.id,categoryDetails)

 if(result.status>=200 && result.status<300){
  toast.success('Video added')
  setVideoCategoryStatus()
 }
 else{
  toast.error('something went wrong')
 }
}

  

  
}

const videoDrag = (e,video,Category)=>{
console.log(video);
console.log(Category);

const datashare = {
  Category,
  video
}

e.dataTransfer.setData("datashare",JSON.stringify(datashare))


}



useEffect(()=>{
  getCategory()
},[addcategoreystatus,deletecategorystatus,videocategorystatus,videostatus])

  return (
   <>
     
    <h4>category</h4>
     <button className='w-100 form-control btn btn-warning'onClick={handleShow} >add category</button>

     
     <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>add category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='p-3border border-secondary border-2 rounded'>
            <input type="text" placeholder='category name' className='form-control' value={categoryNmae} onChange={(e)=>setcategoryNmae(e.target.value)} />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleAdd}>
            add
          </Button>
          <Button variant="warning" onClick={handleCancel}>
            cancel
          </Button>
        </Modal.Footer>
      </Modal>

      { allCategory?.length>0 && 
      allCategory.map((items)=>(
        <div className='border border-secondary p-2 rounded mt-4' droppable onDragOver={(e)=>ondrag(e)} onDrop={(e)=>videoDrop(e,items)}>
        <div className='d-flex justify-content-between'>
          <h5>{items?.Category}</h5>
          <button className='btn btn-danger' onClick={()=>handleDelete(items.id)}><FontAwesomeIcon icon={faTrash} /></button>
          
        </div>
        
       {items?.allVideos?.length>0 &&
        items?.allVideos?.map((video)=>(
          <div draggable onDragStart={(e)=>videoDrag(e,video,items)}>
          <Videocard items={video} isPresent={true} />
        </div>
        ))
       }
        
      </div>

      ))
     
      }
      
     
       
     

      </>
  )
}

export default Category