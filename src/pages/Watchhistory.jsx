import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import Table from 'react-bootstrap/Table';
import { deleteHistoryVideoApi, getAllVideoHistoryApi } from '../server/allApi'

function Watchhistory() {
const[allHisVideos,setallHisVideos]=useState([])
const[deleteStatus,setdeleteStatus]=useState(false)

  const getAllHistoryVideos = async()=>{
    const result = await getAllVideoHistoryApi()
    setallHisVideos(result.data);
    
  }
  console.log(allHisVideos );

  const handledelete = async(id)=>{
    const result = await deleteHistoryVideoApi(id)
    console.log(result);
    if(result.status>=200 && result.status<300){
      setdeleteStatus(true)
    }
    
  }

  
  
  useEffect(()=>{
    getAllHistoryVideos()
    setdeleteStatus(false)
  },[deleteStatus])



  return (
    <>
    <div className='d-flex'>
      <h4>watch history</h4>
      <Link to={'/home'} style={{textDecoration:"none"}} className='ms-auto'><h4><FontAwesomeIcon icon={faHouse} className='me-2' /><span className='d-none d-md-inline'>back home</span></h4></Link>
    </div>

    <div className='container-fluid'>
      <div className='row'>
        <div className='col-md-1'></div>
        <div className='col-md-10 p-5 table-responsive'>
{allHisVideos?.length>0?
<Table striped bordered hover>
      <thead>
        <tr>
          <th>sl.no</th>
          <th>caption </th>
          <th>url</th>
          <th>time stamp</th>
          <th>action</th>
        </tr>
      </thead>
      <tbody>
        {allHisVideos?.map((item)=>(
        <tr>
        <td>{item?.id}</td>
        <td>{item?.caption}</td>
        <td>{item?.url}</td>
        <td>{item?.time}</td>
        <td><button onClick={()=>handledelete(item?.id)} className='btn btn-danger'><FontAwesomeIcon icon={faTrash} /></button></td>
      </tr>
        ))
          }
       
      </tbody>
    </Table>
         :
         <h4 className='text-warning text-center'>no watch history</h4>}
        </div>
        <div className='col-md-1'></div>
      </div>
    </div>
    </>
  )
}

export default Watchhistory