import React from 'react';
import styled from 'styled-components/macro';

const Container = styled.div`
  display:flex;
  background-color:var(--dark-moderate-cyan);
  width:100%;
  height:500px;
  flex-direction:column;
  align-items:center;
`;

const Header = styled.h1`
  font-size:30px;
  color:var(--dark-desaturated-cyan);
  padding-top:100px;
  weight:100px;
`;

const Menu = styled.div`
  font-size:20px;
  padding-top:100px;
  color:var(--dark-desaturated-cyan);
  cursor:pointer;
  
`;

const LogoContainer = styled.div`
  display:flex;
  gap:60px;
  
  
`;

const Logo = styled.img`
  height:40px;
  width:40px;
  padding-top:100px;
  cursor:pointer;

`;

function Contact() {

  return (
    <Container>
      <Header>sunnyside</Header>

      <div style={{ display: "flex", gap: "60px" }}>

        <Menu>About</Menu>
        <Menu>Services</Menu>
        <Menu>Projects</Menu>
      </div>

      <LogoContainer>
        <Logo src="/static/icon-facebook.svg"></Logo>
        <Logo src="/static/icon-instagram.svg"></Logo>
        <Logo src="/static/icon-twitter.svg"></Logo>
        <Logo src="/static/icon-pinterest.svg"></Logo>
      </LogoContainer>


    </Container>

  );
}

export default Contact;