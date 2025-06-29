import React from 'react'
import './Courselist.css'
import { Square } from 'react-bootstrap-icons'

export default function Couselist() {
  return (
    <div>
      <div className="block">
      
      <div className="head">
        <div className="text">
        <h1>All Courses</h1>
        </div>
        <div className="buttons">
          <div className="input">
        <input className='i1' type="text" placeholder='Search courses'/>
        </div>
<div className="buutons-holder">
        <button className='btn1'>
          <Square size={10} color="black" />
        </button>
        <button className='btn2'>
            <Square size={10} color="blue" />
        </button>
        </div>
      
        </div>
      </div>
      
    </div>
    </div>
  )
}
