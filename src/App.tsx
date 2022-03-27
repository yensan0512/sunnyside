import React from 'react';
import './App.css';
import style from 'styled-components/macro';
import Card from './component/Card';

// const url = require("../public/static/icon-arrow-down.svg");

const MainWrapper = style.div`
  height:100vh;
  width:100vw;
  position:relative;
`;

const Wrapper = style.div`
  background:url(static/desktop/image-header.jpg) center no-repeat;
  position:relative;
  width: 100%;
  height: 100%;
  padding-bottom:0px;
  background-size: cover;
`;

const LeftTitle = style.div`
  color:var(--white);
  font-size:60px;
  position:absolute;
  top:3%;
  left:6%;
`;

const MenuList = style.div`
  display:flex;
`;

const Menu = style.h3`
  color:var(--white);
  font-size:30px;
  gap:10px;
  cursor:pointer;
  margin:0;
  
`;

const MainTtile = style.div`
  color:var(--white);
  position:absolute;
  top:50%;
  left:50%;
  font-size:100px;
  transform: translate(-50%, -260%);
  width:100%;
  text-align:center;

`;

const IconArrow = style.img`
  position:absolute;
  top:60%;
  left:50%;
  height:300px;
  width:100px;
  transform: translate(-50%, -100%);
  color:var(--white);
  // box-shadow: 0 0 10px 3px var(--dark-desaturated-cyan);
`;


function App() {
  return (
    <MainWrapper>
      <Wrapper >
        <LeftTitle>
          sunnyside
        </LeftTitle>
        <MenuList>
          <Menu>About</Menu>
          <Menu>Services</Menu>
          <Menu>Projects</Menu>
          <Menu>Contact</Menu>
        </MenuList>
        <MainTtile>WE ARE CREATIVES
        </MainTtile>
        <IconArrow src="/static/icon-arrow-down.svg" alt='icon-arrow-down' />
      </Wrapper>
      <Card />
    </MainWrapper>
  );
}

export default App;
