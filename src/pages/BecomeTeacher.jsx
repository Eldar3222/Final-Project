import React from 'react';
import './BecomeTeacher.css';

function ContactLoginRegister() {
  return (
    <>
      <div className="main-blog">
        <div className="holder-block">
          <div className="text-blog">
            <h2>Contact</h2>
          </div>
          <div className="href-holder">
            <a href="">Home</a>
            <i className="bi bi-arrow-right-short"></i>
            <a href="">Contact</a>
          </div>
        </div>
      </div>

      <div className="notification">
        <p>
          Please <a href="#">login</a> to send your request!
        </p>
      </div>

      <div className="container">
        <div className="form-box">
          <h2>Login</h2>
          <label>Username or email *</label>
          <input type="text" placeholder="Email or username" />

          <label>Password *</label>
          <input type="password" placeholder="Password" />

          <div className="options">
            <label>
              <input type="checkbox" /> Remember me
            </label>
          </div>

          <button className="btn">Login</button>
          <a href="#" className="forgot">
            Lost your password?
          </a>
        </div>

        <div className="form-box">
          <h2>Register</h2>
          <label>Email address *</label>
          <input type="email" placeholder="Email" />

          <label>Username *</label>
          <input type="text" placeholder="Username" />

          <label>Password *</label>
          <input type="password" placeholder="Password" />

          <label>Confirm Password *</label>
          <input type="password" placeholder="Password" />

          <button className="btn">Register</button>
        </div>
      </div>
    </>
  );
}

export default ContactLoginRegister;
