import React, { useState } from 'react'
import Add from '../components/Add'
import { Link } from 'react-router-dom'
import Category from '../components/Category'
import View from '../components/View'


function Home() {
  const [addVideoStatus, setAddVideoStatus] = useState();


  return (
    <>
      <div className='container d-flex justify-content-between mt-5'>
        <Add setAddVideoStatus={setAddVideoStatus}/>
        <Link to={'/Watchhistory'}><p>Watch History </p></Link>


      </div>

      <div className='container-fluid p-3 mt-5'>

        <div className='row'>
          <div className='col-md-9'>
            <View addVideoStatus ={addVideoStatus}/>
          </div>
          <div className='col-md-3 '>
            <Category />
          </div>
        </div>
      </div>

    </>
  )
}

export default Home