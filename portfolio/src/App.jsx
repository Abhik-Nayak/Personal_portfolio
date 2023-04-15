import React from 'react';
import Contact from './components/Contact';
import Hero from './components/Hero';
import Who from './components/Who';
import Works from './components/Works';
import styled from 'styled-components';
import Home from "./assets/home.jpg";
import Navbar from './components/Navbar';
const Container = styled.div`
height: 100vh;
scroll-snap-type: y mandatory;
scroll-behavior: smooth;
overflow-y: auto;
scrollbar-width: none;
color: white;
background: url('./img/bg.jpeg');
// background-image: linear-gradient(to top, #30cfd0 0%, #330867 0%);
&::-webkit-scrollbar{
  dsiplay: none;
}
`;
const App = () => {
  return (
    <Container>
      {/* <Navbar/> */}
      <Hero />
      <Who />
      <Works />
      <Contact />
    </Container>
  )
}

export default App