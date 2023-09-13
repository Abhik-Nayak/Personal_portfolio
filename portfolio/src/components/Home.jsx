import React, { useEffect } from 'react';
import Typed from 'typed.js';
import { useSearchParams } from 'react-router-dom';
import homeLogo from "../Assets/home-main.svg";


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