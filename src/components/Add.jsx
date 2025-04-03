import React from 'react'
import { faCloudArrowUp, faUpload } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { ToastContainer, toast } from 'react-toastify';
import { videoAddApi } from '../serivices/allApi';


function Add({setAddVideoStatus}) {

    const [videoDetails, setvideoDetails] = useState(
        {
            caption: "",
            image: "",
            embedLink: ""
        }

    )
    console.log(videoDetails);""


    const [show, setShow] = useState(false);
    const handleClose = () => {

        setShow(false);
        handleRest()

    }

    const handleShow = () => setShow(true);
    const handleRest = () => {

        setvideoDetails({
            caption: "",
            image: "",
            embedLink: ""
        })
    }

    const handleUpload = async () => {
        const { caption, image, embedLink } = videoDetails

        if (!caption || !image || !embedLink) {
            toast.error("Please Enter ")

        } else {

            if (embedLink.startsWith('https://youtu.be/')) {
                let link = `https://www.youtube.com/embed/${embedLink.slice(17, 28)}`
                console.log(link);
                const result = await videoAddApi({ caption, image, embedLink:link })
                if(result.status>=200 && result.status<300){   
                    
                
                // console.log(result);
                
            
                toast.success("Updload Succesful")
                
                
                handleClose()
                setAddVideoStatus(result.data)

                }else{

                    toast.error("Please Enter url")
                    handleRest()
                }

            }
            else {
                let link =`https://www.youtube.com/embed/${embedLink.slice(-11)}`
                console.log(link);
                const result = await videoAddApi({ caption, image, embedLink:link })

                if(result.status>=200 && result.status<300){   

                    
                    // console.log(result);
                    toast.success("Updload Succesful")
                    handleClose()
                    setAddVideoStatus(result.data)
    
                    }else{
                        toast.error("Please Enter url ")
                        handleRest()
                    }
    
                // // console.log(result);
            }


    

            // const result = await videoAddApi(videoDetails)
            //  console.log(result);
            
            //  

            //  } else{
            //     handleRest()
            //  }
             

        }
    }

    return (
        <>
            <h5>Upload New Video <FontAwesomeIcon icon={faCloudArrowUp} className='ms-3' onClick={handleShow} /></h5>


            
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>

                    <h2><FontAwesomeIcon icon={faUpload} beat /> Upload Videos</h2>
                </Modal.Header>
                {/* <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body> */}
                <div className='m-2 p-2 border border-1 rounded'>
                    <Form.Control
                        placeholder="Video Caption"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        className='mb-3'
                        value={videoDetails.caption}
                        onChange={(e) => { setvideoDetails({ ...videoDetails, caption: e.target.value }) }}
                    />
                    <Form.Control
                        placeholder="Video Image"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        className='mb-3'
                        value={videoDetails.image}
                        onChange={(e) => { setvideoDetails({ ...videoDetails, image: e.target.value }) }}
                    />
                    <Form.Control
                        placeholder="Vido Url"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        value={videoDetails.embedLink}
                        onChange={(e) => { setvideoDetails({ ...videoDetails, embedLink: e.target.value }) }}
                    />
                </div>
                <Modal.Footer>
                    <Button className='btn btn-warning mt-3 text-dark' variant="secondary" onClick={handleRest}>
                        Reset
                    </Button>
                    <Button className='btn btn-warning mt-3 text-dark' variant="primary" onClick={handleUpload}>
                        Upload
                    </Button>
                </Modal.Footer>
            </Modal>
            <ToastContainer position='top-center' onTouchMoveCapture="colord" autoClose={2000}/>


        </>
    )
}

export default Add