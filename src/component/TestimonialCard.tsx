import React from 'react';
import styled from 'styled-components/macro';

const ImgContainer1 = styled.div`

  position: relative;
  display:flex;
  flex-direction:column;
  align-items:center;
  gap:20px;
`;

const ImgTestimonial1 = styled.img`
  border-radius:50%;

  height: 100px;
  width: 100px;

`;

const SentenceContainer = styled.div`

  text-align:center;
  font-size:23px;
  letter-spacing:2px;
  line-height:1.6;
  color:var(--very-dark-grayish-blue);


  width:100%;
`;

const NameTitleTestimonial = styled.p`
  font-size:30px;
  font-weight:900;
  text-align:center;

  margin:0;
`;

const Position = styled.p`
  font-size:20px;
  color:var(--very-dark-grayish-blue);
  margin:0;
`;

function TestimonialCard({ photo, sentence, name, position }: {
  photo: string,
  sentence: string,
  name: string,
  position: string
}) {

  return (

    < ImgContainer1 >
      <ImgTestimonial1 src={photo} alt="image-emily">
      </ImgTestimonial1>
      <SentenceContainer>{sentence}</SentenceContainer>
      <NameTitleTestimonial>{name}</NameTitleTestimonial>
      <Position>{position}</Position>
    </ImgContainer1 >
  );
}


export default TestimonialCard;