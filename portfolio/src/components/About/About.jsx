import React from 'react'
import ScrollReveal from 'scrollreveal';
import "./styles.css";
import Github from '../Github';
const About = () => {
  return (
    <main className="wrapper">
      <section className="section" id="about">
        {/* <div className="top-header">
          <h1>About Me</h1>
        </div> */}
        <div className="rowAbout">
          <div className="colAbout">
            <div className="about-info">
              <h3>My introduction</h3>
              <p>
                Welcome to my portfolio! I'm passionate about crafting
                web solutions and turning ideas into reality. With expertise in
                building full-stack applications using the MERN (MongoDB, Express,
                React, Node.js) stack, I'm always eager to take on new challenges
                and create innovative digital experiences.
              </p>
              {/* <p>
                Here, you'll find a showcase of my projects, skills, and the
                technologies I work with. Whether you're an employer looking for a
                dedicated developer or a fellow enthusiast interested in my work,
                feel free to explore, and don't hesitate to get in touch.
              </p> */}
              <div className="about-btn">
                <button className="btn">Download CV <i className="uil uil-import"></i></button>
              </div>
            </div>
          </div>
          <div className="colAbout">
            <div className="skills-box">
              <div className="skills-header">
                <h3>UI Web Tech.</h3>
              </div>
              <div className="skills-list">
                <img className='tag' src="https://camo.githubusercontent.com/90b284b4f542180aeb3bfa244cf0a86d451f9ebc95f9cffe71dc8f73da41b7a7/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f68746d6c352d2532334533344632362e7376673f7374796c653d706c6173746963266c6f676f3d68746d6c35266c6f676f436f6c6f723d7768697465" alt="HTML" />
                <img className='tag' src="https://camo.githubusercontent.com/57909719a287181a7ed571f0df7fec7bf5b51a0833eb85bdac822f2184984edd/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f637373332d2532333135373242362e7376673f7374796c653d706c6173746963266c6f676f3d63737333266c6f676f436f6c6f723d7768697465" alt="CSS" />
                <img className='tag' src="https://camo.githubusercontent.com/6d3b128cd950dff725d5caed37ed86c4039eeec0a861332bd2bc7a73fac74fd1/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6a6176617363726970742d2532333332333333302e7376673f7374796c653d706c6173746963266c6f676f3d6a617661736372697074266c6f676f436f6c6f723d253233463744463145" alt="javaScript"/>
                <img className='tag' src="https://camo.githubusercontent.com/d95d357d3b1afd1a4128bd5c74de9035cb76dd59b21e38080257562b8ebe37b5/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6a71756572792d2532333037363941442e7376673f7374796c653d706c6173746963266c6f676f3d6a7175657279266c6f676f436f6c6f723d7768697465" alt="jquery"/>
                <img className='tag' src="https://camo.githubusercontent.com/4dd544cdabaa3f7e6711582784a13f32666dc7f5d9ba6c675f3678d7fd8d0a6c/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f626f6f7473747261702d2532333536334437432e7376673f7374796c653d706c6173746963266c6f676f3d626f6f747374726170266c6f676f436f6c6f723d7768697465" alt="Bootstarp" />
                <img className='tag' src="https://camo.githubusercontent.com/c24c3c3c0cafb16a5c973c7dc9d4d5292f9db2d3ae78d51609ebabe38c6cea7d/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f72656163742d2532333230323332612e7376673f7374796c653d706c6173746963266c6f676f3d7265616374266c6f676f436f6c6f723d253233363144414642" alt="ReactJs" />
                <img className='tag' src="https://camo.githubusercontent.com/5b0057367aa84b871ec44bb771b851d2c918ac1d3da2f7c086f7176eb047489e/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4d55492d2532333030383143422e7376673f7374796c653d706c6173746963266c6f676f3d6d6174657269616c2d7569266c6f676f436f6c6f723d7768697465" alt="MUI" />
                <img className='tag' src="https://camo.githubusercontent.com/c69d05ed91e1e4f50b6f76c712947bb7b597e27fbcabfd8a014f31b00655d81a/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6e6f64652e6a732d3644413535463f7374796c653d706c6173746963266c6f676f3d6e6f64652e6a73266c6f676f436f6c6f723d7768697465" alt="NodeJs" />
                <img className='tag' src="https://camo.githubusercontent.com/c1c285600a7629e32f0c16a53ea8407fb3d3223c96b4ebb988cb71d7d21a1caa/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f657870726573732e6a732d2532333430346435392e7376673f7374796c653d706c6173746963266c6f676f3d65787072657373266c6f676f436f6c6f723d253233363144414642" alt="Express" />
                <img className='tag' src="https://camo.githubusercontent.com/0bca0394e8f5de954ae44319392e62c8739c9ebce512d5550bffba8e96a19b2c/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f72656475782d2532333539336438382e7376673f7374796c653d706c6173746963266c6f676f3d7265647578266c6f676f436f6c6f723d7768697465" alt="redux"/>
                <img className='tag' src="https://camo.githubusercontent.com/3f335350d2f798d1ee6dfd5503fbd56c88d41f9d28fb77d1bcc23a0799f6aefa/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4e504d2d2532333030303030302e7376673f7374796c653d706c6173746963266c6f676f3d6e706d266c6f676f436f6c6f723d7768697465" alt="npm"/>
              </div>
            </div>
            <div className="skills-box">
              <div className="skills-header">
                <h3>Database</h3>
              </div>
              <div className="skills-list">
                <img className='tag' src="https://camo.githubusercontent.com/c59c79370b2ef4d35238a2cc377705b4188a48d8c1a2ff62387d431974f3e483/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6d7973716c2d2532333030662e7376673f7374796c653d706c6173746963266c6f676f3d6d7973716c266c6f676f436f6c6f723d7768697465" alt="MySql"/>
                <img className='tag' src="https://camo.githubusercontent.com/381b71da18da2cd848e7b184052f8b2488d49d1b5e8e63fe13b0aa11a1e8d3ae/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f706f7374677265732d2532333331363139322e7376673f7374796c653d706c6173746963266c6f676f3d706f737467726573716c266c6f676f436f6c6f723d7768697465" alt="PostgreSql" />
                <img className='tag' src="https://camo.githubusercontent.com/5cf0cb058a822ec77ef3bd38643acef933c52c8381eb4bf190d9d36481e9cd92/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4d6f6e676f44422d2532333465613934622e7376673f7374796c653d706c6173746963266c6f676f3d6d6f6e676f6462266c6f676f436f6c6f723d7768697465" alt="mongoDB"/>
              </div>
            </div>
            <div className="skills-box">
              <div className="skills-header">
                <h3>Language</h3>
              </div>
              <div className="skills-list">
                <img className="tag" src="https://camo.githubusercontent.com/995f28c733b2e7f131c5c7d9f80f7f57123f03269ddb73384a624ed0e23ad45c/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f632d2532333030353939432e7376673f7374796c653d706c6173746963266c6f676f3d63266c6f676f436f6c6f723d7768697465" alt="C"/>
                <img className="tag" src="https://camo.githubusercontent.com/2c08fc3d41772227cb08cd66274051a917769fa4330cfd5ca37f7dd8ac1d4826/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f632b2b2d2532333030353939432e7376673f7374796c653d706c6173746963266c6f676f3d63253242253242266c6f676f436f6c6f723d7768697465" alt="c++"/>
                <img className="tag" src="https://camo.githubusercontent.com/6d3b128cd950dff725d5caed37ed86c4039eeec0a861332bd2bc7a73fac74fd1/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6a6176617363726970742d2532333332333333302e7376673f7374796c653d706c6173746963266c6f676f3d6a617661736372697074266c6f676f436f6c6f723d253233463744463145" alt="Javascript"/>
                <img className="tag" src="https://camo.githubusercontent.com/a6a594ae99bb801830151596208ddc1cb603d24e880f10bd694df18b494de8fb/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f707974686f6e2d3336373041303f7374796c653d706c6173746963266c6f676f3d707974686f6e266c6f676f436f6c6f723d666664643534" alt="Python"/>
              </div>
            </div>
            <div className="skills-box">
              <div className="skills-header">
                <h3>IDE Editor</h3>
              </div>
              <div className="skills-list">
                <span>VS Code</span>
                <span>Sublime Text3</span>
                <span>Pycharm</span>
                <span>Planet9App Editor</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Github/>
    </main>
  )
}

export default About