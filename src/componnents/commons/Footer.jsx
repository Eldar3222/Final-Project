import React from 'react';
import './Footer.css';
import { Telephone, Envelope, Facebook, X, Youtube, Linkedin,Skype, Instagram,  Pinterest } from 'react-bootstrap-icons';


export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-info">
        <div className="footerone">
          <img src="https://varsity.mhrtheme.com/wp-content/uploads/2022/11/logo.png" alt="" />
          <p className='p1'>Loo faff about cockup Harry<br></br> baking cakes hunky dory mush <br></br> happy days on your bike mate.</p>
          <div className="phone">
          <Telephone size={15} color="blue" />
           <span className='s1'>+464 145 684 325</span>
          </div>
         
          <div className="envelope">
          <Envelope  size={15} color="blue" />
           <span className='s1'>education@examole.com</span>
          </div>
         
        </div>
        <div className="footertwo">
          <h4 className='popular'>Popular Courses</h4>
          <ul>
            <li>Algebra & Calculus</li>
            <li>Business Strategy</li>
            <li>Computer Security & Network</li>
            <li>Data Analysis</li>
            <li>English Learning</li>
            <li>Music & Art</li>
          </ul>
        </div>
        <div className="footerthree">
           <h4 className='popular'>COURSE CATEGORIES</h4>
        <ul>
          <li>Arts & Humanities</li>
          <li>Business</li>
          <li>Computer Science</li>
          <li>Data Science</li>
          <li>Language Learning</li>
          <li>Math & Logic</li>
        </ul>
</div>
<div className="footerfour">
  <h4 className='popular'>Quick Links</h4>
  <ul>
    <li>Live Class</li>
    <li>Tuition Fees</li>
    <li>Terms & Conditions</li>
    <li>Privacy Policy</li>
    <li>Support</li>
    <li>Career</li>
  </ul>

</div>
      
      </div>
     <div className="button-holder">
  <button className="instagram-button"><Facebook size={15} color="#A9A9A9" /></button>
  <button className="instagram-button"><X size={15} color="#A9A9A9" /></button>
  <button className="instagram-button"><Youtube size={15} color="#A9A9A9" /></button>
  <button className="instagram-button"><Linkedin size={15} color="#A9A9A9" /></button>
  <button className="instagram-button"><Skype size={15} color="#A9A9A9" /></button>
  <button className="instagram-button"><Instagram size={15} color="#A9A9A9" /></button>

  
  <button className="instagram-button pinterest-desktop">
    <Pinterest size={15} color="#A9A9A9" />
  </button>
</div>

<div className="pinterest-mobile">
  <button className="instagram-button">
    <Pinterest size={15} color="#A9A9A9" />
  </button>
</div>

 <div className="button-holder-tablet">
  <div className="up">
  <button className="instagram-button"><Facebook size={15} color="#A9A9A9" /></button>
  <button className="instagram-button"><X size={15} color="#A9A9A9" /></button>
  <button className="instagram-button"><Youtube size={15} color="#A9A9A9" /></button>
  <button className="instagram-button"><Linkedin size={15} color="#A9A9A9" /></button>
  </div>
  <div className="down">
  <button className="instagram-button"><Skype size={15} color="#A9A9A9" /></button>
  <button className="instagram-button"><Instagram size={15} color="#A9A9A9" /></button>
  <button className="instagram-button">
    <Pinterest size={15} color="#A9A9A9" />
  </button>
  </div>
</div>

    </footer>
  );
}
