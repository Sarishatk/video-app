import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import { getHistroy } from '../services/allAPI'
function WatchHistory() {
      const [history,setHistory] = useState([])

  const getAllWatchHistory = async()=>{
    // make api call
    const {data}=await getHistroy()
    setHistory(data);
    
  }
  useEffect(()=>{
    getAllWatchHistory()
  },[])
  console.log(history);
  
  return (
    <>
      <div className="container mt-5 mb-5 d-flex justify-content-between">
        <h3>Watch History</h3>
        <Link style={{textDecoration:'none' ,fontSize:'20px',color:'white'}} className='d-flex align-items-center' to={'/Home'}><i className="fa-solid fa-arrow-left me-2  "></i>Back to Home</Link>
      </div>
      <div className="container mt-5 mb-5 table w-100 ">
        <thead>
            <tr>
                <th>#</th>
                <th>caption</th>
                <th>URL</th>
                <th>Time Stamp</th>
            </tr>
        </thead>
        <tbody>
          {
            history?.length>0?
            history.map((item,index)=>(
            <tr>
                <th>{index+1}</th>
                <th>{item?.caption}</th>
                <th><a href={item?.embadedlink} target='_blank'>{item?.embadedlink}</a></th>
                <th>4/6/2004</th>
            </tr>
  ))
            :<p className='fw-bolder mt-3 fs-5 text-danger'>Nothing to display !!! </p>
          }

        </tbody>
      </div>
    </>
  )
}  

export default WatchHistory
