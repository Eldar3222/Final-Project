import React from 'react';
import './BlogGrid.css'
function BlogGrid() {
  return (
    <>
      <div className="main-blog">
        <div className="holder-block">
          <div className="text-blog">
            <h2>Blog Grid</h2>
          </div>
          <div className="href-holder">
            <a href="/">Home</a>
            <i className="bi bi-arrow-right-short"></i>
            <a href="/">Blog Grid</a>
          </div>
        </div>
      </div>

      <section className="blog-grid">
        <div className="container">
          <div className="card">
            <img
              src="https://varsity.mhrtheme.com/wp-content/uploads/2020/01/blog_1.png"
              alt=""
            />
            <div className="meta">
              <span>
                <i className="bi bi-person"></i> Jim Sichen
              </span>
              <span>
                <i className="bi bi-calendar"></i> October 14, 2023
              </span>
            </div>
            <h3>Top 10 WordPress Themes for Local Businesses</h3>
            <p>
              Twit cuppa Oxford car boot baking cakes I dropped a clanger cheeky
              bugger young delinquent say, hunky-dory ruddy butty matie boy
              cheeky cup of char ummm I'm telling get stuffed mate owt to do with
              me blow.
            </p>
            <a href="#">
              Read More <i className="bi bi-arrow-right-short"></i>
            </a>
          </div>

          <div className="card">
            <img
              src="https://varsity.mhrtheme.com/wp-content/uploads/2020/01/blog_2.png"
              alt=""
            />
            <div className="meta">
              <span>
                <i className="bi bi-person"></i> Jim Sichen
              </span>
              <span>
                <i className="bi bi-calendar"></i> October 13, 2023
              </span>
            </div>
            <h3>Business development ceremony for BBA student</h3>
            <p>
              Twit cuppa Oxford car boot baking cakes I dropped a clanger cheeky
              bugger young delinquent say, hunky-dory ruddy butty matie boy
              cheeky cup of char ummm I'm telling get stuffed mate owt to do with
              me blow.
            </p>
            <a href="#">
              Read More <i className="bi bi-arrow-right-short"></i>
            </a>
          </div>

          <div className="card">
            <img
              src="https://varsity.mhrtheme.com/wp-content/uploads/2020/01/blog_3.png"
              alt=""
            />
            <div className="meta">
              <span>
                <i className="bi bi-person"></i> Jim Sichen
              </span>
              <span>
                <i className="bi bi-calendar"></i> October 14, 2023
              </span>
            </div>
            <h3>Top 10 WordPress Themes for Local Businesses</h3>
            <p>
              Twit cuppa Oxford car boot baking cakes I dropped a clanger cheeky
              bugger young delinquent say, hunky-dory ruddy butty matie boy
              cheeky cup of char ummm I'm telling get stuffed mate owt to do with
              me blow.
            </p>
            <a href="#">
              Read More <i className="bi bi-arrow-right-short"></i>
            </a>
          </div>

          <div className="card">
            <img
              src="https://varsity.mhrtheme.com/wp-content/uploads/2020/01/blog_4.png"
              alt=""
            />
            <div className="meta">
              <span>
                <i className="bi bi-person"></i> Jim Sichen
              </span>
              <span>
                <i className="bi bi-calendar"></i> October 13, 2023
              </span>
            </div>
            <h3>Best products for fitness nutrition and muscles</h3>
            <p>
              Twit cuppa Oxford car boot baking cakes I dropped a clanger cheeky
              bugger young delinquent say, hunky-dory ruddy butty matie boy
              cheeky cup of char ummm I'm telling get stuffed mate owt to do with
              me blow.
            </p>
            <a href="#">
              Read More <i className="bi bi-arrow-right-short"></i>
            </a>
          </div>

          <div className="card">
            {/* no image */}
            <div className="meta">
              <span>
                <i className="bi bi-person"></i> Jim Sichen
              </span>
              <span>
                <i className="bi bi-calendar"></i> October 14, 2023
              </span>
            </div>
            <h3>How to Become Master In CSS within a Week.</h3>
            <p>
              Twit cuppa Oxford car boot baking cakes I dropped a clanger cheeky
              bugger young delinquent say, hunky-dory ruddy butty matie boy
              cheeky cup of char ummm I'm telling get stuffed mate owt to do with
              me blow.
            </p>
            <a href="#">
              Read More <i className="bi bi-arrow-right-short"></i>
            </a>
          </div>

          <div className="card">
            {/* no image and no person */}
            <div className="meta">
              <span>
                <i className="bi bi-calendar"></i> October 13, 2023
              </span>
            </div>
            {/* no title */}
            <p>
              Cheeky bugger morish cack a mush wind tickety boo pear shaped my
              good sir, ruddy blatant say boot.!
            </p>
            <a href="#">
              Read More <i className="bi bi-arrow-right-short"></i>
            </a>
          </div>

          <div className="d-flex gap-3">
            <div className="step active">1</div>
            <div className="step">2</div>
            <div className="step arrow">
              <i className="bi bi-arrow-right"></i>
            </div>
          </div>
        </div>
      </section>

      <section className="hero d-flex justify-content-between align-items-center">
        <div>
          <h1>
            Best teachers in every subject.
            <br />
            Let’s get started
          </h1>
          <p className="mt-3">We can teach you anything</p>
        </div>
        <div>
          <a href="#" className="btn btn-start">
            Get Started
          </a>
        </div>
      </section>
    </>
  );
}

export default BlogGrid;
