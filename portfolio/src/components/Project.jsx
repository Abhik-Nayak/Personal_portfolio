import React from 'react'
import flipkart from "../assets/flipKart.png";
import dashboard from "../assets/Admin-demo.png"
const Project = () => {
  return (
    <main className="wrapper">
      <section className="section" id="projects">
        {/* <div className="top-header">
                    <h1>Projects</h1>
                </div> */}
        <div className="project-container">
          <div className='project-box-prjt'>
            <img style={{ height: "100%", width: "100%" }} src={flipkart}></img>
            <div className='project-btn-section'>
              <button className="button-10" role="button">View</button>
              <button className="button-10" role="button">Source Code</button>
            </div>
          </div>
          <div className='project-box-prjt'>
            <img style={{ height: "100%", width: "100%" }} src={dashboard}></img>
            <div className='project-btn-section'>
              <button className="button-10" role="button">View</button>
              <button className="button-10" role="button">Source Code</button>
            </div>
          </div>
          <div className='project-box-prjt'>
            <img style={{ height: "100%", width: "100%" }} src={flipkart}></img>
            <div className='project-btn-section'>
              <button className="button-10" role="button">View</button>
              <button className="button-10" role="button">Source Code</button>
            </div>
          </div>
          <div className='project-box-prjt'>
            <img style={{ height: "100%", width: "100%" }} src={flipkart}></img>
            <div className='project-btn-section'>
              <button className="button-10" role="button">View</button>
              <button className="button-10" role="button">Source Code</button>
            </div>
          </div>
          <div className='project-box-prjt'>
            <img style={{ height: "100%", width: "100%" }} src={flipkart}></img>
            <div className='project-btn-section'>
              <button className="button-10" role="button">View</button>
              <button className="button-10" role="button">Source Code</button>
            </div>
          </div>

          
          
          
          {/* <div className="project-box">
            <i className="uil uil-briefcase-alt"></i>
            <h3>MERN</h3>
            <label>15+ Finished Projects</label>
          </div>
          <div className="project-box">
            <i className="uil uil-users-alt"></i>
            <h3>Clients</h3>
            <label>25+ Happy Clients</label>
          </div>
          <div className="project-box">
            <i className="uil uil-award"></i>
            <h3>Experience</h3>
            <label>7+ Years in the field</label>
          </div>
          <div className="project-box">
            <i className="uil uil-briefcase-alt"></i>
            <h3>Completed</h3>
            <label>15+ Finished Projects</label>
          </div>
          <div className="project-box">
            <i className="uil uil-users-alt"></i>
            <h3>Clients</h3>
            <label>25+ Happy Clients</label>
          </div>
          <div className="project-box">
            <i className="uil uil-award"></i>
            <h3>Experience</h3>
            <label>7+ Years in the field</label>
          </div> */}
        </div>
      </section>
    </main>
  )
}

export default Project