import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Allvideos from '../component/Allvideos'
import Add from '../component/Add'
import Category from '../component/Category'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClockRotateLeft } from '@fortawesome/free-solid-svg-icons'


function Home() {
  const [addVideoStatus,setAddVideoStatus] = useState({})
  const[videostatus,setvideostatus]=useState({})
  


  return (
    <>
    <div className='d-flex p-md-5 p-3'>
      <Add setAddVideoStatus={setAddVideoStatus} />
      <Link to={'/watchHistory'} className='ms-auto' style={{textDecoration:"none"}}><h5><span className='d-none d-md-inline'>Watch history</span><FontAwesomeIcon icon={faClockRotateLeft} /></h5></Link>
    </div>


    <div className='container-fluid p-4'>
      <div className='row'>
        <div className='col-md-9'>
          <Allvideos addVideoStatus={addVideoStatus} setvideostatus={setvideostatus} />
        </div>
        <div className='col-md-3'>
          <Category videostatus={videostatus} />
        </div>
      </div>
    </div>
    
    </>
  )
}

export default Home