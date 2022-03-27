import React from 'react';
import styled from 'styled-components/macro';


const Img1 = styled.img`
  width:1%;
  flex-grow:1;
`;

function Footer({ image }: {
  image: string
}) {

  return (

    <Img1 src={image} alt="image-gallery-millkbottles"></Img1>

  );
}

export default Footer;