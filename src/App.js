import React from "react";
import styled from "styled-components";
import img from "./assets/img.jpg";
import icon from "./assets/icon-gh.png"

const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color:#EBEFEE;
  padding: 1.5rem;
  padding-left:0;
  padding-right:0;
  color: #3498db;
  border: 0.25rem solid #1890ff;
  border-radius: 50px;
  
`;

const Image = styled.div`
  width: 50%;
  height: 100%;
  
`;

const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  img: url("./assets/img.jpg");
  border-radius: 2rem;
`;

const Info = styled.div`
  padding: 20px;
`;

const Name = styled.h2`
font-size:3.75rem;
padding: 20px;
margin: 0;
color: #3498db;
text-align: center;
font-family: Copperplate, Papyrus, fantasy;
`;

const Title1 = styled.p`
padding-bottom:1rem;
font-size:2.5rem;
font-style:bold;
margin: 0;
color: #333;
text-align: center;
`;

const Title = styled.p`
  margin: 0;
  color: #333;
  text-align: center;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  padding: 10px 16px;
  background-color: #2F71AC;
  color: #1890ff;
  border-radius: 40px ;
  align-intem:center;
  icon: url("./assets/icon-gh.png");
  justify-content: space-between;
  font-size:1.5rem;
  border: 0.1rem solid #27BBD1;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.5);
  animation: shimmer 1.5s infinite;
  @keyframes shimmer {
    0% {
      box-shadow: 0 0 0px #27BBD1;
    }
    100% {
      box-shadow: 0 0 5px #27BBD1;
    }
  }
  
`;

const Icon = styled.img`
width: 22px;
height: 22px;
margin-right: 14px;
`;

function App() {
  return (
    <Card>
      <Container>
        <Image>
          <ProfileImage img alt="Antoine's photo" src={img}  />
        </Image>
        <Info>
          <Name>Antoine</Name>
          <Title1>Web developper junior</Title1>
          <Title>Wild Code School</Title>
          <Title>Toulouse</Title>
          <Title>France</Title>
        </Info> 
         <Button>
         <a href="https://github.com/antoine-droid">
         <Icon  src={icon} alt="icon github"/> My Github
       </a>
       </Button>
       
      </Container>
    </Card>
  );
}

export default App;
