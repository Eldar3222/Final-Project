import React from 'react'
import "./Myprofile.css"
import { Square, ChevronBarRight, ChevronCompactLeft, ChevronCompactRight } from 'react-bootstrap-icons'

export default function Myprofile() {
  return (
    <div>
          <div className="notebook">
              <div className="n1">
              <h2 className='p22'>About us</h2>
              <span className='s3'>Home</span>
              <button className='ch1'>
                    <ChevronBarRight size={20} color="white" />
              </button>
              <span className='s3'>My Profile</span>
              </div>
            </div>
      
    <div className="my-container">


     
      
      <div className="menu">
        <div className="courses-list">
          <p className='p60'>Courses</p>
          <button className='btn4'>
            <Square size={10} color="white" />
          </button>
        </div>

        <div className="courses-list1">
          <p className='p61'>Quizzes</p>
          <button className='btn3'>
            <Square size={10} color="black" />
          </button>
        </div>

        <div className="courses-list1">
          <p className='p61'>Orders</p>
          <button className='btn3'>
            <Square size={10} color="black" />
          </button>
        </div>

        <div className="courses-list1">
          <p className='p61'>Settings</p>
          <button className='btn3'>
            <Square size={10} color="black" />
          </button>
          <div className="setiing">
            <p className='p62'>General</p>
            <p className='p62'>Avatar</p>
            <p className='p62'>Password</p>
          </div>
        </div>

        <div className="courses-list1">
          <p className='p61'>Logout</p>
        </div>
      </div>
        <div className="container-mobile">
      <button className='btn-mobile  mobile1'></button>
      <button className='btn-mobile mobile2'></button>
      <button className='btn-mobile mobile2'></button>
      <button className='btn-mobile mobile2'></button>
      <button className='btn-mobile mobile2'></button>
           <div className="myupbtn">
          <button className='upbtn'>
            <span><ChevronCompactLeft size={10} color="black" /></span>
            <span><ChevronCompactRight size={10} color="black" /></span>
          </button>
        </div>
    
    </div>
       <div className="container-tablet">
        <div className="btn-holder">
      <button className='btn-mobile  mobile3'>Courses</button>
      <button className='btn-mobile mobile4'>Quizzes</button>
      <button className='btn-mobile mobile4'>Orders</button>
      <button className='btn-mobile mobile4'>Settings</button>
      <button className='btn-mobile mobile4'>Logout</button>
      </div>
           <div className="myupbtn">
          <button className='upbtn1'>
            <span><ChevronCompactLeft size={10} color="black" /></span>
            <span><ChevronCompactRight size={10} color="black" /></span>
          </button>
        </div>
    
    </div>


      <div className="my-buttons">
        <div className="my-buttons-up">
        <button className='course-button'>Enrolled Courses <br /> <p className='p73'>0</p></button>
         <button className='course-button'>Active Courses <br /> <p className='p73'>0</p></button>
            <button className='course-button'>Complete Courses <br /> <p className='p73'>0</p></button>
            </div>
            <div className="mybutton-down">
        <button className='course-button'>Total Courses <br /> <p className='p73'>5</p></button>
        <button className='course-button'> Total Students <br /> <p className='p73'>0</p></button>

   

            </div>
      </div>
    </div>
  
    </div>
  )
}
