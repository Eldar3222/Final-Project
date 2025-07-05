import React from 'react';
import './AboutUs.css';
import {ChevronBarRight} from 'react-bootstrap-icons'

export default function AboutUs() {
  return (
    <div>
      <div className="notebook">
        <div className="n1">
        <h2 className='p22'>About us</h2>
        <span className='s3'>Home</span>
        <button className='ch1'>
              <ChevronBarRight size={20} color="white" />
        </button>
        <span className='s3'>About us</span>
        </div>
      </div>
      <div className="about-container">
        <div className="text-info">
          <h1>About Varsity</h1>
          <p className="p23">
            Varsity is an educational Bootstrap Premium Template. You can use it for
            making your modern educational website.
          </p>
        </div>
        <div className="img-info">
          <img
            src="https://varsity.mhrtheme.com/wp-content/uploads/2022/11/about-1.png"
            alt="Varsity"
          />
        </div>
      </div>
      <div className="about-container1">
        <div className="text-info">
          <h2 className='l2'>Lorem ipsum dolor sit amet</h2>
          <p className="p23">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <button className="btn1">Our courses</button>
        </div>
        <div className="img-info">
          <img
            src="https://varsity.mhrtheme.com/wp-content/uploads/2022/11/about-2.png"
            alt="Varsity"
          />
        </div>
      </div>
        <div className="about-container1">
       
        <div className="img-info1">
          <img 
            src="https://varsity.mhrtheme.com/wp-content/uploads/2022/11/about-3.png"
            alt="Varsity"
          />
         
        </div>
         <div className="text-info1">
          <h2 className='l3'>Lorem ipsum dolor sit amet</h2>
          <p className="p23">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <button className="btn1">All Events</button>
        </div>
      </div>
       <div className="about-container-mobile">
        <div className="text-info-mobile">
          <h1>About Varsity</h1>
          <p className="p23-mobile">
            Varsity is an educational Bootstrap Premium Template. You can use it for
            making your modern educational website.
          </p>
        </div>
       
      </div>
      <div className="about-container1-mobile">
  <img 
    src="https://varsity.mhrtheme.com/wp-content/uploads/2022/11/about-2.png"
    alt="Varsity"
  />

  <div className="text-info1-mobile">
    <h2>Lorem ipsum dolor sit amet</h2>
    <p className="p23-mobile">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    </p>
      <button className="btn1">Our courses</button>
  </div>
</div>
  <div className="about-container1-mobile">
  <img 
    src="https://varsity.mhrtheme.com/wp-content/uploads/2022/11/about-3.png"
    alt="Varsity"
  />

  <div className="text-info1-mobile">
    <h2>Lorem ipsum dolor sit amet</h2>
    <p className="p23-mobile">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    </p>
      <button className="btn1">All Events</button>
  </div>
</div>
<div className="my-line">
  <h1>Our team</h1>
  <p className='p32'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
</div>
<div className="team">
  <div className="our-team">
    
    <img className='i5' src="https://varsity.mhrtheme.com/wp-content/uploads/2022/11/avatar-4.png" alt="" />
  
  <h5 className='m1'>Manuella Nevoresky</h5>
  <span className='m2'>CEO - Founder</span>
  </div>
  <div className="our-team">
    <img className='i5' src="https://varsity.mhrtheme.com/wp-content/uploads/2022/11/avatar-3.png" alt="" />
  
  <h5 className='m1'>Samuel Hardy</h5>
  <span className='m2'>Managing Director</span>
  </div>
  <div className="our-team">
    <img className='i5' src="https://varsity.mhrtheme.com/wp-content/uploads/2022/11/avatar-2.png" alt="" />
  
  <h5 className='m1'>Tom Sunderland</h5>
  <span className='m2'>Supervisor</span>
  </div>
  <div className="our-team">
    <img className='i5' src="https://varsity.mhrtheme.com/wp-content/uploads/2022/11/avatar-1.png" alt="" />
  
  <h5 className='m1'>John Tarly</h5>
  <span className='m2'>Team Leader</span>
  </div>
</div>

    </div>
    
  );
}