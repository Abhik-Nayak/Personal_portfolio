import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import styled from 'styled-components';
import { ImLocation } from 'react-icons/Im';
import { CiMail } from 'react-icons/Ci';
import { MdCall } from 'react-icons/Md';
import { AiFillGithub } from 'react-icons/Ai';
import { FaTwitter, FaInstagramSquare } from 'react-icons/Fa';

const Section = styled.div`
  height: 100vh;
  scroll-snap-align:center;
`;

const Container = styled.div`
  width:100%;
  height: 100%;
  display: flex;
  flex-wrap:wrap;
  justfy-content: space-between;
  gap: 50px;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media only screen and (max-width: 768px) {
    justify-content: center;
  }
`;
const Title = styled.h1`
  font-weight: 200;
`;
const Form = styled.form`
  width: 450px;
  display: flex;
  flex-direction: column;
  gap: 25px;

  @media only screen and (max-width: 768px) {
    width: 300px;
  }
`;
const Input = styled.input`
  padding: 10px;
  background-color: #e8e6e6;
  border: none;
  border-radius: 5px;
`;
const TextArea = styled.textarea`
  padding: 20px;
  border: none;
  border-radius: 5px;
  background-color: #e8e6e6;
`;

const Button = styled.button`
  background-color: #da4ea2;
  color: white;
  border: none;
  font-weight: bold;
  cursor: pointer;
  border-radius: 5px;
  padding: 20px;
`;
const Middle = styled.div`
  flex: 0;
  display: flex;
  align-items: center;
  // border: 2px solid red;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  flex-direction: column;
  background: ;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;
const Info = styled.div`
  width: 100%;
  height: 323px;
  background: none;
  display: flex;
  // color: black;
  justify-content: center;
  flex-direction: column;
`;
const Infobox = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;
const Infoicon = styled.div`
  min-width: 40px;
  height: 40px;
  color: #fff;
  background: #18b7ff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5em;
  border-radius: 50%;
  margin-right: 15px;
`;
const Infoboxlink = styled.a`
  color: #fff;
  text-decoration: none;
  font-size: 1.1em;
`;
const Social = styled.ul`
  margin-top: 40px;
  display: flex;
`;
const  Line = styled.li`
  list-style: none;
  margin-right: 15px;
`;
const Sociallink = styled.a`
  color: #fff;
  font-size: 2em;
  columns: #ccc;

  :hover{
    color: #fff;
  }
`;
const Contact = () => {
  const [name1, setName1] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(null);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
      .then((result) => {
        console.log(result.text);
        setSuccess(true);
        setName1("");
        setEmail("");
      }, (error) => {
        console.log(error.text);
        setSuccess(false);
      });
  };
  return (
    <Section>
      <Container>
        <Left>
          <Form ref={form} onSubmit={sendEmail}>
            <Title>Contact Us</Title>
            <Input placeholder='Name' name="name" value={name1} onChange={e => setName1(e.target.value)} />
            <Input placeholder='Email' name="email" value={email} onChange={e => setEmail(e.target.value)} />
            <TextArea placeholder=" Write your message" name="message" rows={10} value={message} onChange={e => setMessage(e.target.value)} />
            <Button type="submit">Send</Button>
            {success &&
              "Your message has been sent. We'll get back to you soon :)"}
          </Form>
        </Left>
        <Right>
          <Info>
            {/* <h3>Contact Info</h3> */}
            <div className="Infobox">
              <Infobox>
                <Infoicon><ImLocation /></Infoicon>
                <p style={{fontSize:"1.1em"}}>Bhubaneswar,Odisha<br /> INDIA </p>
              </Infobox>
              <Infobox>
                <Infoicon><CiMail /></Infoicon>
                <Infoboxlink href="mailto:loremipsum@gmail.com">loremipsum@gmail.com</Infoboxlink>
              </Infobox>
              <Infobox>
                <Infoicon><MdCall /></Infoicon>
                <Infoboxlink href="tel: +91 5678599876">+91 5678599876</Infoboxlink>
              </Infobox>
              <Social>
                <Line><Sociallink href="#"><AiFillGithub /></Sociallink></Line>
                <Line><Sociallink  href="#"><FaTwitter /></Sociallink></Line>
                <Line><Sociallink href="#"><FaInstagramSquare /></Sociallink></Line>
              </Social>
            </div>
          </Info>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d239486.66728042197!2d85.65563620518064!3d20.301129051258286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1909d2d5170aa5%3A0xfc580e2b68b33fa8!2sBhubaneswar%2C%20Odisha!5e0!3m2!1sen!2sin!4v1681394330818!5m2!1sen!2sin"
            width="50%"
            height="130"
            style={{ border: 0, minWidth: "300px" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"></iframe>
        </Right>
      </Container>

    </Section>
  )
}

export default Contact