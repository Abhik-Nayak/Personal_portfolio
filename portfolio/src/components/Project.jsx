import React from 'react'
import flipkart from "../assets/flipKart.png";
import dashboard from "../assets/Admin-demo.png";
import { useNavigate } from "react-router-dom";
import user from "../assets/user1.gif"
const Project = () => {
  const navigate = useNavigate();
  const handleButtonClick = (id) => {
    navigate(`/projectdetails/${id}`);
  };

  const projDetails = [
    {
      id: 1,
      name: 'E-commerce',
      image: flipkart
    },
    {
      id: 2,
      name: 'Admin',
      image: dashboard
    },
    {
      id: 3,
      name: 'E-commerce',
      image: flipkart
    },
    {
      id: 4,
      name: 'Admin',
      image: dashboard
    },
    {
      id: 5,
      name: 'E-commerce',
      image: flipkart
    },
    {
      id: 6,
      name: 'Admin',
      image: dashboard
    },

  ]


  return (
    <main className="wrapper">
      <section className="section" id="projects">
        {/* <div className="top-header">
                    <h1>Projects</h1>
                </div> */}
        <div className="project-container">
          {
            projDetails.map((item) =>
              <div className='project-box-prjt' >
                <img style={{ height: "100%", width: "100%" }} src={item.image}></img>
                <div className='project-btn-section'>
                  <button className="project-btn" role="button" onClick={() => handleButtonClick(item.id)}>View</button>
                  <button className="project-btn" role="button">Source Code</button>
                </div>
              </div>
            )
          }
        </div>
      </section>
    </main>
  )
}

export default Project