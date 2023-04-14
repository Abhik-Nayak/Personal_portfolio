import React from 'react';
import styled from 'styled-components';
import User from "../assets/user.png";
import Cube from './Cube';
const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width:1000px;
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
  flex:1;

`;
const Title = styled.h1`
font-size: 50px;

@media only screen and (max-width: 768px) {
  text-align: center;
}
`;
const Right = styled.div`
flex: 1;
display: flex;
flex-direction: column;
justify-content: center;
gap: 20px;

`;
const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
const Line = styled.div`
  height: 4px;
  max-width: 300px;
  border-radius: 2px;
  background: rgb(237,192,6);
  background: linear-gradient(99deg, rgba(237,192,6,1) 0%, rgba(7,56,214,1) 100%, rgba(17,17,222,1) 100%);
`;
const Subtitle = styled.h2`
  color: #da4ea2;
`;
const Desc = styled.p`
  font-size: 20px;
  color: lightgray;
`;
const Button = styled.button`
  background-color: #da4ea2;
  color: white;
  font-weight: 500;
  width: 120px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Img = styled.img`
  width:500px;
  height: 1000px;
  object-fit: contain;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  animation: animate 2s infinite ease alternate;
  @keyframes animate {
    to {
      transform: translateY(20px);
    }
  }
`;

const Who = () => {
  return (
    <Section>
      <Container>
        <Left >
          <Cube/>
        </Left>
        <Right >
          <Title>Think outside the square space</Title>
          <Line />
          <WhatWeDo>
            {/* <Line /> */}
            <Subtitle>Who we Are</Subtitle>
          </WhatWeDo>
          <Desc>
            a creative group of designers and developers with a passion for the
            arts.
          </Desc>
          <Button>See our works</Button>
        </Right>
      </Container>
    </Section>
  )
}

export default Who