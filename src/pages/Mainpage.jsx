import React, { useEffect } from 'react';


import AOS from 'aos';
import 'aos/dist/aos.css';
import './home.css'
import './img.css'


const HomePage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true, startEvent: 'DOMContentLoaded' });
  }, []);

  
  return (
    <div>
      {/* Info Section */}
      <section className="info-form-section">
        <div className="info-boxes">
          {[
            { img: '3135789', title: 'Next Scheduled' },
            { img: '3135715', title: 'Online Courses' },
            { img: '3135768', title: 'Graduation' },
            { img: '3135719', title: 'University Life' }
          ].map((item, i) => (
            <div key={i} className="info-item" data-aos="fade-right" data-aos-delay={200 + i * 100}>
              <img src={`https://cdn-icons-png.flaticon.com/512/3135/${item.img}.png`} alt="Icon" />
              <h3>{item.title}</h3>
              <p>Tosser what plonker mufty squiffy the wireless the monty.</p>
            </div>
          ))}
        </div>

        {/* Form */}
        <div className="form-container" data-aos="fade-left" data-aos-delay="600">
          <h2><span>Registration</span><br />for Course Enroll</h2>
          <form className="form">
            <input type="text" placeholder="Name" required />
            <input type="email" placeholder="Email" required />
            <input type="tel" placeholder="Phone" required />
            <select required defaultValue="">
              <option value="" disabled>Courses Name</option>
              <option value="html">HTML Basics</option>
              <option value="css">CSS Design</option>
              <option value="js">JavaScript</option>
            </select>
            <button type="submit">Apply Now</button>
          </form>
          <div className="countdown-timer">
            {['Days', 'Hours', 'Minutes', 'Seconds'].map((unit, i) => (
              <div key={unit}><span id={unit.toLowerCase()}>{unit === 'Days' ? '000' : '00'}</span><br />{unit}</div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="container">
          <div className="left" data-aos="fade-right">
            <div className="badge">TRUSTED BY<br /><span>45k+</span></div>
            <img src="https://varsity.mhrtheme.com/wp-content/uploads/2022/11/about.png" alt="" />
          </div>
          <div className="right" data-aos="fade-left">
            <h1>We are Experts<br />Learning Institution</h1>
            <p className="experience">20 Years of Experience</p>
            <p className="description">Do one absolutely bladdered say bugger all...</p>
            <p className="call"><span className="phone">Call Us +456 968 562 75</span></p>
            <button className="btn">View Courses</button>
          </div>
        </div>
      </section>

      {/* Popular Courses */}
      <section className="popular-courses">
        <div className="text-center">
          <h2>Explore our <br /><span>Popular Courses</span></h2>
          <p className="description">Jeffrey crikey victoria sponge mush...</p>
        </div>
        <div className="courses">
          {/* Повтори карточки по шаблону */}
        </div>
      </section>

      {/* Categories */}
      <section className="browse-online-box">
        <h2>Browse Online<br />Course Categories</h2>
        <p className="description">Jeffrey crikey victoria sponge mush...</p>
        <div className="categories">
          {[
            { emoji: '💼', title: 'Business', count: '15', color: 'blue' },
            { emoji: '💻', title: 'Computer Science', count: '8', color: 'yellow' },
            { emoji: '📄', title: 'Data Science', count: '20', color: 'green' },
            { emoji: '📚', title: 'Language Learning', count: '30', color: 'pink' },
          ].map((cat, i) => (
            <div key={i} className={`category-card ${cat.color}`}>
              <div style={{ fontSize: '2rem' }}>{cat.emoji}</div>
              <h3>{cat.title}</h3>
              <p>{cat.count} Courses</p>
            </div>
          ))}
        </div>
      </section>

      {/* Instructors */}
      <section>
        <h2>Top Instructor</h2>
        <div className="instructors">
          {/* Повтори карточки */}
        </div>
      </section>

      {/* Motivation Section */}
      <section className="motivation-section">
        <div className="content">
          <h2>Your motivation & attention<br />will teach you best</h2>
          <p className="description">Cack gormless young delinquent...</p>
          <div className="tags">
            <div className="tag"><i className="icon">&#128187;</i> Graphics Design</div>
            <div className="tag"><i className="icon">&#128221;</i> Self Development</div>
            <div className="tag"><i className="icon">&#128421;</i> IT & Software</div>
          </div>
        </div>
        <div className="image-container">
          <img src="https://sites.dartmouth.edu/jacko/files/2020/02/8a916cdde713e7e599f66fe9a86aa925.jpg" alt="" />
          <a href="https://www.youtube.com/watch?v=f3NWvUV8MD8" className="play-button">&#9658;</a>
        </div>
      </section>

      {/* Events */}
      <section className="events-section">
        <h2>Our Upcoming Events</h2>
        {/* Повторить блоки event-card */}
        <div className="view-all"><a href="#">View All Events</a></div>
      </section>

      {/* Testimonials */}
      <section className="testimonial-section">
        <div className="testimonial-container">
          <div className="testimonial-left">
            <h1>Student Say<br />About Us.</h1>
            <div className="testimonial-nav desktop-only">
              <button>&larr;</button>
              <button>&rarr;</button>
            </div>
          </div>
          <div className="testimonial-right">
            <p className="testimonial-text">Loo faff about cockup Harry...</p>
            <div className="testimonial-user">
              <img src="https://varsity.mhrtheme.com/wp-content/uploads/2022/11/author_5.jpg" alt="" />
              <div>
                <h3>Lance Bogrol</h3>
                <p>UX Designer, Sceo Inc.</p>
              </div>
            </div>
          </div>
          <div className="testimonial-nav mobile-only">
            <button>&larr;</button>
            <button>&rarr;</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
