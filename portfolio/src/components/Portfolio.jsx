import React, { useEffect } from 'react';
import Typed from 'typed.js';
import ScrollReveal from 'scrollreveal';

const Portfolio = () => {
  useEffect(() => {
    // TYPING EFFECT
    let typingEffect = new Typed(".typedText", {
      strings: ["Designer", "Youtuber", "Developer"],
      loop: true,
      typeSpeed: 100,
      backSpeed: 80,
      backDelay: 2000
    });

    // SCROLL REVEAL ANIMATIONS
    const sr = ScrollReveal({
      origin: 'top',
      distance: '80px',
      duration: 2000,
      reset: true
    });

    sr.reveal('.featured-text-card', {});
    sr.reveal('.featured-name', { delay: 100 });
    sr.reveal('.featured-text-info', { delay: 200 });
    sr.reveal('.featured-text-btn', { delay: 200 });
    sr.reveal('.social_icons', { delay: 200 });
    sr.reveal('.featured-image', { delay: 300 });

    sr.reveal('.project-box', { interval: 200 });

    const srLeft = ScrollReveal({
      origin: 'left',
      distance: '80px',
      duration: 2000,
      reset: true
    });

    srLeft.reveal('.about-info', { delay: 100 });
    srLeft.reveal('.contact-info', { delay: 100 });

    const srRight = ScrollReveal({
      origin: 'right',
      distance: '80px',
      duration: 2000,
      reset: true
    });

    srRight.reveal('.skills-box', { delay: 100 });
    srRight.reveal('.form-control', { delay: 100 });

    // ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING
    window.onscroll = function () {
      headerShadow();
    };

    function headerShadow() {
      const navHeader = document.getElementById("header");

      if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
        navHeader.style.height = "70px";
        navHeader.style.lineHeight = "70px";
      } else {
        navHeader.style.boxShadow = "none";
        navHeader.style.height = "90px";
        navHeader.style.lineHeight = "90px";
      }
    }

    // NAVIGATION BAR FUNCTION
    const myMenuFunction = () => {
      let menuBtn = document.getElementById("myNavMenu");

      if (menuBtn.classNameName === "nav-menu") {
        menuBtn.classNameName += " responsive";
      } else {
        menuBtn.classNameName = "nav-menu";
      }
    };

    // Scroll Active Link
    const sections = document.querySelectorAll('section[id]');

    function scrollActive() {
      const scrollY = window.scrollY;

      sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
          sectionTop = current.offsetTop - 50,
          sectionId = current.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          document.querySelector('.nav-menu a[href*=' + sectionId + ']').classNameList.add('active-link');
        } else {
          document.querySelector('.nav-menu a[href*=' + sectionId + ']').classNameList.remove('active-link');
        }
      });
    }

    window.addEventListener('scroll', scrollActive);

    // Clean up event listeners
    return () => {
      window.removeEventListener('scroll', scrollActive);
    };
  }, []);

  return (
    <div classNameName="container">
      <main className="wrapper">
            {/* <!-- -------------- FEATURED BOX ---------------- --> */}
            <section className="featured-box" id="home">
                <div className="featured-text">
                    <div className="featured-text-card">
                        <span>John Doe</span>
                    </div>
                    <div className="featured-name">
                        <p>I'm <span className="typedText"></span></p>
                    </div>
                    <div className="featured-text-info">
                        <p>Experienced frontend developer with a passion for creating visually stunning
                            and user-friendly websites.
                        </p>
                    </div>
                    <div className="featured-text-btn">
                        <button className="btn blue-btn">Hire Me</button>
                        <button className="btn">Download CV <i className="uil uil-file-alt"></i></button>
                    </div>
                    <div className="social_icons">
                        <div className="icon"><i className="uil uil-instagram"></i></div>
                        <div className="icon"><i className="uil uil-linkedin-alt"></i></div>
                        <div className="icon"><i className="uil uil-twitter"></i></div>
                        <div className="icon"><i className="uil uil-github-alt"></i></div>
                    </div>
                </div>
                <div className="featured-image">
                    <div className="image">
                        <img src="./profile.png" alt="avatar"/>
                    </div>
                </div>
                <div className="scroll-icon-box">
                    <a href="#about" className="scroll-btn">
                        <i className="uil uil-mouse-alt"></i>
                        <p>Scroll Down</p>
                    </a>
                </div>

            </section>
            {/* <!-- -------------- ABOUT BOX ---------------- --> */}
            <section className="section" id="about">
                <div className="top-header">
                    <h1>About Me</h1>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="about-info">
                            <h3>My introduction</h3>
                            <p>I am well-versed in HTML, CSS and JavaScript , and other cutting edge
                                frameworks and libraries,which allows me to implement interactive features.
                                Additionally, I have experirence working with content management systems (CMS) like
                                WordPress.
                            </p>
                            <div className="about-btn">
                                <button className="btn">Download CV <i className="uil uil-import"></i></button>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="skills-box">
                            <div className="skills-header">
                                <h3>Frontend</h3>
                            </div>
                            <div className="skills-list">
                                <span>HTML</span>
                                <span>CSS</span>
                                <span>Bootstrap</span>
                                <span>JavaScript</span>
                                <span>Vue</span>
                                <span>React</span>
                                <span>Angular</span>
                            </div>
                        </div>
                        <div className="skills-box">
                            <div className="skills-header">
                                <h3>Backend</h3>
                            </div>
                            <div className="skills-list">
                                <span>PHP</span>
                                <span>JAVA</span>
                                <span>Python</span>
                                <span>C++</span>
                            </div>
                        </div>
                        <div className="skills-box">
                            <div className="skills-header">
                                <h3>Database</h3>
                            </div>
                            <div className="skills-list">
                                <span>MySQL</span>
                                <span>PostgreSQL</span>
                                <span>MongoDB</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- -------------- PROJECT BOX ---------------- --> */}

            <section className="section" id="projects">
                <div className="top-header">
                    <h1>Projects</h1>
                </div>
                <div className="project-container">
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
                    </div>
                </div>
            </section>

            {/* <!-- -------------- CONTACT BOX ---------------- --> */}

            <section className="section" id="contact">
                <div className="top-header">
                    <h1>Get in touch</h1>
                    <span>Do you have a project in your mind, contact me here</span>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="contact-info">
                            <h2>Find Me <i className="uil uil-corner-right-down"></i></h2>
                            <p><i className="uil uil-envelope"></i> Email: john@doe.com</p>
                            <p><i className="uil uil-phone"></i> +91 70822 00001</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="form-control">
                            <div className="form-inputs">
                                <input type="text" className="input-field" placeholder="Name"/>
                                <input type="text" className="input-field" placeholder="Email"/>
                            </div>
                            <div className="text-area">
                                <textarea placeholder="Message"></textarea>
                            </div>
                            <div className="form-button">
                                <button className="btn">Send <i className="uil uil-message"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </main>
    </div>
  );
};

export default Portfolio;
