import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faTrash } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { deleteVideoHistoryApi, getallVideoHistory } from '../serivices/allApi'

function Watchhistory() {

  const [videoHistory, setVideoHistory] = useState([])
  const [deletestatus, setDeletestatus] = useState({})

  const getAllHistory = async () => {
    const result = await getallVideoHistory()
    // console.log(result);
    if (result.status >= 200 && result.status < 300) {
      setVideoHistory(result.data)
    }
  }

  // console.log(videoHistory);

  const deleteVido = async (id) => {
    const result = await deleteVideoHistoryApi(id)
    // console.log(result);
    if(result.status>=200 && result.status<300){
      setDeletestatus(result.data)
    }

  }


  useEffect(() => {
    getAllHistory()
  }, [deletestatus])


  return (
    <>
      <div className='container d-flex justify-content-between align-items-center mt-5'>
        <h5>Watch History</h5>
        <Link to={'/home'} style={{ textDecoration: 'none' }}><h5 className='d-flex justify-content-between aling-item-center'> <span className="d-none d-md-flex fs-5 me-3">Back Home</span> <FontAwesomeIcon icon={faHouse} /> </h5></Link>
      </div>
      <div className='container mt-5 table-responsive'>
        {
          videoHistory?.length > 0 ? <table className='table table-bordered border-1 border border-primary  '>
            <thead className='border-1 border border-primary'>
              <tr>
                <th className='p-3 text-center border-1 border border-primary'>S1:No</th>
                <th className='p-3 text-center border-1 border border-primary'>Caption</th>
                <th className='p-3 text-center border-1 border border-primary'>Url</th>
                <th className='p-3 text-center border-1 border border-primary'>TimeStamp</th>
                <th className='p-3 text-center border-1 border border-primary'>Action</th>
              </tr>

            </thead>
            <tbody >
              {
                videoHistory?.map((item, index) => (
                  <tr key={index}>
                    <td className='border-1 border border-primary'>{index + 1}</td>
                    <td className='border-1 border border-primary'>{item?.caption}</td>
                    <td className='border-1 border border-primary'><Link to={`${item?.url}`} target='_blank'>{item?.url}</Link></td>
                    <td className='border-1 border border-primary'>{item?.time}</td>
                    <td className='border-1 border border-primary'><button onClick={()=>deleteVido(item?.id)} className='btn btn-danger'><FontAwesomeIcon icon={faTrash} /></button></td>
                  </tr>
                ))
              }
            </tbody>

          </table> :
            <h4 className='text-danger text-center m-5'>History Cleared</h4>
        }

      </div>


    </>
  )
}

export default Watchhistory