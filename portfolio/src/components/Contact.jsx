import React from 'react'

const Contact = () => {
  return (
   <main className='wrapper'>
    <section class="section" id="contact">
                <div class="top-header">
                    <h1>Get in touch</h1>
                    <span>Do you have a project in your mind, contact me here</span>
                </div>
                <div class="row">
                    <div class="col">
                        <div class="contact-info">
                            <h2>Find Me <i class="uil uil-corner-right-down"></i></h2>
                            <p><i class="uil uil-envelope"></i> Email: john@doe.com</p>
                            <p><i class="uil uil-phone"></i> +91 70822 00001</p>
                        </div>
                    </div>
                    <div class="col">
                        <div class="form-control">
                            <div class="form-inputs">
                                <input type="text" class="input-field" placeholder="Name"/>
                                <input type="text" class="input-field" placeholder="Email"/>
                            </div>
                            <div class="text-area">
                                <textarea placeholder="Message"></textarea>
                            </div>
                            <div class="form-button">
                                <button class="btn">Send <i class="uil uil-message"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
   </main> 
  )
}

export default Contact