import React, { useState, useEffect } from 'react';
import './LiveClass.css';
import { ChevronBarRight } from 'react-bootstrap-icons';

export default function LiveClass() {
  const [days, setDays] = useState(542);
  const [hours, setHours] = useState(23);
  const [minutes, setMinutes] = useState(52);
  const [seconds, setSeconds] = useState(41);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(prev => {
        if (prev <= 0) {
          setMinutes(prevMin => {
            if (prevMin <= 0) {
              setHours(prevHr => {
                if (prevHr <= 0) {
                  setDays(prevDay => {
                    if (prevDay <= 0) {
                      clearInterval(interval);
                      return 0;
                    }
                    return prevDay - 1;
                  });
                  return 23;
                }
                return prevHr - 1;
              });
              return 59;
            }
            return prevMin - 1;
          });
          return 59;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="notebook">
        <div className="n1">
          <h2 className="p22">About us</h2>
          <span className="s3">Home</span>
          <button className="ch1">
            <ChevronBarRight size={20} color="white" />
          </button>
          <span className="s3">Live Class</span>
        </div>
      </div>
      <div className="our-class">
        <div className="class-info">
          <img
            className="i23"
            src="https://varsity.mhrtheme.com/wp-content/uploads/2022/11/meeting.jpg"
            alt=""
          />
          <p className="p101">
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.”
          </p>
          <p className="p101">
            “Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ration.”
          </p>
        </div>
        <div className="timer-container">
          <div className="time-details">
            <button className="time-button">{days} <p>Days</p></button>
            <button className="time-button">{hours} <p>Hours</p></button>
            <button className="time-button">{minutes} <p>Minutes</p></button>
            <button className="time-button">{seconds} <p>Seconds</p></button>
          </div>
          <div className="details">
            <h3 className='d5'>Details</h3>
            <p className='p44'>Topic:</p>
            <p  className='p45'>Initial Meeting</p>
            <p className='p44'>Hosted By:</p>
            <p  className='p45'>admin</p>
            <p className='p44'>Start:</p>
            <p className='p45 s33'>Saturday, November 30, 2024 11:26 PM</p>
            <p className='p44'>Duration:</p>
            <p  className='p45'>1 hour 0 minutes</p>
            <p className='p44'>Current Timezone:</p>
            <p className='p45'>Asia/Dhaka</p>
            <p  className='p45'>Note: Countdown time is shown based on your local timezone.</p>
        
          </div>
          <div className="join-buttons">
             <button className='btn-info-tablet'>Join Meeting via <br/> Zoom App </button>
        
            <button className='btn-info2 info3'>Join Meeting via Zoom App </button>
            <button className='btn-info'>Join via Web Browser</button>
            <button className='btn-info1'>Start Meeting</button>
          </div>
        </div>
      </div>
    </div>
  );
}