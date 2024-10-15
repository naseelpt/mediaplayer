import React, { useEffect, useState } from 'react'
import Videocard from './Videocard'
import { addVideoToCategoryApi, getVideosApi } from '../server/allApi'

function Allvideos({addVideoStatus,setvideostatus}) {

const [deleteVideosStatus,setdeleteVideosStatus] = useState({})


  const [allVideos, setAllVideos] = useState([])

  const getAllvideo = async () => {
    const result = await getVideosApi()
    //  console.log(result);
    setAllVideos(result.data)

  }

const ondrop=(e)=>{
  e.preventDefault()
}
const videoDrop = async (e)=>{
  const {Category,video}=JSON.parse(e.dataTransfer.getData("datashare"))
  console.log(Category,video);

  const newArray = Category.allVideos.filter((items)=>items.id!=video.id)
  const newCategory= {
    Category:Category.Category,
    allVideos:newArray,
    id:Category.id
  }
  const result = await addVideoToCategoryApi(Category.id,newCategory)
  console.log(result);
  if(result.status>=200 && result.status<300){
    setvideostatus(result.data)
  }
  
  
  
  
}



  useEffect(() => {
    getAllvideo()
  }, [addVideoStatus,deleteVideosStatus])



  return (


    <div droppable onDragOver={(e)=>ondrop(e)} onDrop={(e)=>videoDrop(e)}>
      <h4>All videos</h4>

      {allVideos.length > 0 ?
        <div className='container'>

          <div className='row'>
            {allVideos.map(item => (
              <div className='col-md-3'>
                <Videocard items={item} setdeleteVideosStatus={setdeleteVideosStatus} />
              </div>
            ))}
          </div>
        </div>
        :


        <div className='container'>
          <div className='row'>
            <div className='col-md-4'></div>
            <div className='col-md-4 p-3'>
              <img src="https://tse4.mm.bing.net/th?id=OIP.dHtLJlu236M3jlX-dQuS2wAAAA&pid=Api&P=0&h=180" alt="" />
              <h5>no video added yet...</h5>
            </div>
            <div className='col-md-4'></div>
          </div>
        </div>

      }

    </div>







  )
}

export default Allvideos