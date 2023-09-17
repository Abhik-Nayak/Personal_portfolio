import React, { useEffect } from 'react';
import Typed from 'typed.js';
import flipKart from "../Assets/flipKart.png";
import Slideshow from './Slideshow';

const Projectdetails = () => {
  // useEffect(() => {
  //     let typingEffect = new Typed(".typedText", {
  //         strings: ['MERN Stack Developer', ' Web Enthusiast ', 'Problem Solver'],
  //         loop: true,
  //         typeSpeed: 100,
  //         backSpeed: 80,
  //         backDelay: 2000
  //     });

  //     return () => {
  //         typingEffect.destroy();
  //     };
  // }, []);

  return (
    <>
      <main className="wrapper" >

        {/* <!-- -------------- FEATURED BOX ---------------- --> */}
        <section className='prjt-details-box' >
          <div className='prjt-details-img'>
            <div className="image-prjt image1" >
              <Slideshow />
            </div>
          </div>
          <div className='prjt-details-text'>
            <div className="featured-name">
              <p> Flipkart Clone</p>
              <p><span className="typedText1"></span></p>
            </div>
            <div style={{ height: '200px', width: 'auto', overflow: 'auto', border: 'none' }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, sequi cumque ipsam, voluptatem quam nam, alias rerum quo corporis aperiam dolorum quae accusamus vitae porro est quisquam vel nulla exercitationem!Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, sequi cumque ipsam, voluptatem quam nam, alias rerum quo corporis aperiam dolorum quae accusamus vitae porro est quisquam vel nulla exercitationem!Lorem ipsum dolor sit amet consectetuLorem ipsum dolor sit amet consectetur adipisicing elit. Ea, sequi cumque ipsam, voluptatem quam nam, alias rerum quo corporis aperiam dolorum quae accusamus vitae porro est !
            </div>
            {/* <div className="prjt-description">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, sequi cumque ipsam, voluptatem quam nam, alias rerum quo corporis aperiam dolorum quae accusamus vitae porro est quisquam vel nulla exercitationem!Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, sequi cumque ipsam, voluptatem quam nam, alias rerum quo corporis aperiam dolorum quae accusamus vitae porro est quisquam vel nulla exercitationem!Lorem ipsum dolor sit amet consectetuLorem ipsum dolor sit amet consectetur adipisicing elit. Ea, sequi cumque ipsam, voluptatem quam nam, alias rerum quo corporis aperiam dolorum quae accusamus vitae porro est !
              </p>
            </div> */}
            <div className="featured-text-btn" style={{ marginTop: '20px' }}>
              <button className="btn blue-btn">Demo</button>
              <button className="btn">Source Code<i className="uil uil-file-alt"></i></button>
            </div>
          </div>
        </section>
        {/* <section className="featured-box" id="home">
          <div className="featured-image featured-image-prjt">
            <div className="image-prjt image" >
              <Slideshow />
            </div>
          </div>
          <div className="featured-text">
            <div className="featured-name">
              <p> Flipkart Clone</p>
              <p><span className="typedText"></span></p>
            </div>
            <div className="featured-text-info">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic in adipisci nesciunt velit repellat delectus iste odio et ab vitae aspernatur assumenda, expedita, eligendi id officiis incidunt exercitationem. Modi, animi.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores cumque similique vitae architecto mollitia ex necessitatibus qui impedit molestias eligendi fugiat fuga sunt dignissimos sapiente, reiciendis laudantium, harum hic saepe?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat sint ducimus repellat? Distinctio voluptatum modi eligendi incidunt suscipit facilis dicta eaque totam, animi praesentium alias culpa placeat minima. Doloribus, quos!
              </p>
            </div>
            <div className="featured-text-btn">
              <button className="btn blue-btn">Hire Me</button>
              <button className="btn">Download CV <i className="uil uil-file-alt"></i></button>
            </div>
          </div>
        </section> */}
      </main>
    </>
  )
}

export default Projectdetails