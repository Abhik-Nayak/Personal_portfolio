import React, { useEffect } from 'react';
import Typed from 'typed.js';
import About from './About/About';
import homeLogo from "../Assets/home-main.svg";
import user from "../assets/user1.gif"
import ScrollReveal from 'scrollreveal';

const Home = () => {
    useEffect(() => {
        let typingEffect = new Typed(".typedText", {
            strings: ['MERN Stack Developer', ' Web Enthusiast ', 'Problem Solver'],
            loop: true,
            typeSpeed: 100,
            backSpeed: 80,
            backDelay: 2000
        });

        return () => {
            typingEffect.destroy();
        };
    }, []);
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

    return (
        <>
            <main className="wrapper" >
            {/* <!-- -------------- FEATURED BOX ---------------- --> */}
            <section className="featured-box" id="home">
                <div className="featured-text">
                    {/* <div className="featured-text-card">
                        <span>Abhik Nayak</span>
                    </div> */}
                    <div className="featured-name">
                        <p> Hello, I'm Abhik Nayak</p>
                        <p><span className="typedText"></span></p>
                    </div>
                    <div className="featured-text-info">
                        <p>Experienced full-stack developer dedicated to crafting visually captivating and user-friendly websites.
                        </p>
                    </div>
                    <div className="featured-text-btn">
                        <button className="btn blue-btn">Hire Me</button>
                        <button className="btn">Download CV <i className="uil uil-file-alt"></i></button>
                    </div>
                    <div className="social_icons">
                        {/* <div className="icon"><i className="uil uil-instagram"></i></div> */}
                        <div className="icon"><i className="uil uil-linkedin-alt"></i></div>
                        <div className="icon"><i className="uil uil-skype"></i></div>
                        <div className="icon"><i className="uil uil-github-alt"></i></div>
                    </div>
                </div>
                <div className="featured-image">
                    <div className="image">
                        <img src={homeLogo} alt="avatar" />
                    </div>
                </div>

            </section>
            </main>
        </>
    )
}

export default Home