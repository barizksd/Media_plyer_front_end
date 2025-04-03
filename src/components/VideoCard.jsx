import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { deleteVideoApi } from '../serivices/allApi';
import { VideoHistoryApi } from '../serivices/allApi';


function VideoCard({ video, setDeleteVideo }) {

  // console.log(video);
  
  


  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const addVideoHistory = async()=>{

    let caption = video?.caption
    let url = video?.embedLink

    const time = new Date()
    const result = new Intl.DateTimeFormat("en-GB",{year:'numeric',month:'2-digit',hour:'2-digit',minute:'2-digit', second:'2-digit'}).format(time)
    console.log(result);
    
    const response = await VideoHistoryApi({caption,url,time:result})
    console.log(response);
    

  }

  const handleShow = () => {setShow(true); addVideoHistory()}

  const deleteVideo = async(id)=>{
    // console.log(id)
    const result = await deleteVideoApi(id)
    // console.log(result);

    if(result.status>=200 && result.status<300){
      setDeleteVideo(result.data)
    }
    
  }

  return (
    <>
      <Card style={{ width: '100%' }} >
        <Card.Img variant="top" src={video?.image} style={{ height: '300px' }} onClick={handleShow} />
        <Card.Body className='d-flex justify-content-between aling-item-center'>
          <Card.Title>{video?.caption}</Card.Title>

          <Button variant="primary" className='btn btn-warning  text-dark'><FontAwesomeIcon icon={faTrash} onClick={()=>deleteVideo(video?.id)} /></Button>
        </Card.Body>
      </Card>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='text-warning'>Modal heading</Modal.Title>
        </Modal.Header>
        <iframe width="100%" height="300px" src={`${video?.embedLink}?autoplay=1`} title="Ishq Mega Mashup | Faheem Abdullah | Emraan Hashmi | Best Of Soulful Mashups | Chillout Vibes" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullscreen className='p-2'></iframe>

      </Modal>
    </>
  )
}

export default VideoCard