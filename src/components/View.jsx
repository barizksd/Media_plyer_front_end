import React, { useEffect, useState } from 'react'
import VideoCard from './VideoCard'
import { allVidosApi } from '../serivices/allApi'

function View(addVideoStatus) {

  const [allVideo, setAllVideo] = useState([])
  const [DeleteVideo, setDeleteVideo] = useState();


  const getAllVideo = async () => {
    const result = await allVidosApi()
    // console.log(result); 

    if (result.status == 200 && result.status < 300) {
      setAllVideo(result.data)
    }

  }
  // console.log(allVideo);


  useEffect(() => {
    getAllVideo()
  }, [addVideoStatus, DeleteVideo])

  return (
    <>
      <h5>All Videos</h5>
      <div className="container-fluid ">
        <div className="row">
          {
            allVideo?.length > 0 ?
            allVideo?.map((item, index)=>(
              <div className="col-md-3 p-2"key={index}>
              <VideoCard video={item} setDeleteVideo={setDeleteVideo}/>
            </div>
            ))
              :

              <div className="d-flex justify-content-center align-items-center flex-column">
                <img src="https://cdn-icons-png.flaticon.com/512/2762/2762885.png" alt="" />
                <h5 className='text-danger'>No video to show</h5>
              </div>
          }


        </div>
      </div>
    </>
  )
}

export default View