import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { addVideoHistoryApi, deleteVideosApi } from '../server/allApi';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons/faArrowUpRightFromSquare';

function Videocard({ items,setdeleteVideosStatus,isPresent }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () =>{ 
    setShow(true);
    const time =new Date()
    console.log(time);

    let formatedDate = new Intl.DateTimeFormat("en-GB",{year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',second:'2-digit'}).format(time)
    console.log(formatedDate);

    const reqBody = {
      caption:items?.caption,
      url:items?.embedLinks,
      time:formatedDate
    }
    const result =  addVideoHistoryApi(reqBody)
    console.log(result);
    
    
    
  }


  const handleDelete = async(id)=>{
    const result = await deleteVideosApi(id)
    console.log(result);
    if(result.status>=200 && result.status<300){
      setdeleteVideosStatus(result.data)
    }
    
  }

  const itemsDrag = (e,items)=>{
   console.log(items);
   e.dataTransfer.setData("videoDetails",JSON.stringify(items))
   
  }

  return (
    <>
      <Card style={{ width: '100%' }} draggable onDragStart={(e)=>itemsDrag(e,items)}>
       { !isPresent && <Card.Img onClick={handleShow} variant="top" src={items?.imageUrl} />}
        <Card.Body className='d-flex justify-content-between'>
          <Card.Title>{items?.caption}</Card.Title>

         { !isPresent && <Button variant="danger"><FontAwesomeIcon icon={faTrash} onClick={()=>handleDelete(items?.id)} /></Button>}
        </Card.Body>
      </Card>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{items?.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe width="100%" height="514" src={`${items?.embedLinks}?autoplay=1`} title="Neela Nilave - Video Song | RDX | Kapil Kapilan | Sam CS | Shane Nigam,Antony Varghese,Neeraj Madhav" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </Modal.Body>

      </Modal>

    </>
  )
}

export default Videocard