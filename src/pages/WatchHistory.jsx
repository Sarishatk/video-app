import React from 'react'
import {Link} from 'react-router-dom'
function WatchHistory() {
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
            <tr>
                <th>#</th>
                <th>kannan</th>
                <th>ikjnkjbnjuhbhugvhgvgfcgfcygvygfcg</th>
                <th>4/6/2004</th>
            </tr>
        </tbody>
      </div>
    </>
  )
}  

export default WatchHistory
