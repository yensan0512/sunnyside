import React from 'react';
import styled from 'styled-components/macro';
import TestimonialCard from './TestimonialCard';
import Footer from './Footer';
import Contact from './Contact';


const InnerWrapper = styled.div`
  position:absolute;
  height:100vh;
  width:100vw;
  
`;

//Flex
const FlexContainer = styled.div`
  display:flex;
  flex-direction:row;
  flex-wrap: wrap;
`;

//lvl 1 - div 1
const LeftContainer = styled.div`
 // position:absolute;
  background-color:var(--white);
  flex:50%;
  order: 1; 
`;

const LabelBox = styled.div`

`;

const Header = styled.div`
  font-size:75px;
  //padding:500px;
  // display:flex;
  // flex-direction:column;
  margin-left:15%;
  margin-top:20%;
`;

const Description = styled.div`
  color:var(--dark-grayish-blue);
  font-size:22px;
  text-align:left;
  font-family: 'Fraunces', serif;
  // flex:30%;
  margin-left:15%;
  margin-top:5%;
  line-height:1.6;
  margin-right:15%;
`;

//lvl 1 - div 2
const EggContainer = styled.img`
  flex:50%;
  order: 2; 
`;

const FooterFirst = styled.div`
  margin-top:5%;
  margin-left:15%;
`;


//lvl 2 - div 3
const ImgLightSec = styled.img`
  flex:50%;
  order: 3; 
`;

//lvl 2 - div 4
const RightContainerSec = styled.div`
  flex:50%;
  order: 4; 
`;

const HeaderSec = styled.div`
  font-size:70px;
  margin-left:15%;
  margin-top:20%;
  
`;

const DescriptionSec = styled.div`
  color:var(--dark-grayish-blue);
  font-size:22px;
  text-align:left;
  font-family: 'Fraunces', serif;
  margin-left:15%;
  margin-top:5%;
  margin-right:15%;
  line-height:1.6;

`;

const FooterSec = styled.div`
  margin-top:5%;
  margin-left:15%;
`;

//lvl 3 - div 5
const CherryImgThirdContainer = styled.div`
  flex:50%;
  position:relative;
  order: 5; 

`;

const CherryImgThird = styled.img`
  margin: auto;
  display: block;
  width:100%;
`;

//lvl 3 - div 6
const MandarinImgThirdContainer = styled.div`
  flex:50%;
  position:relative;
  order: 6; 
`;

const MandarinImgThird = styled.img`
  margin: auto;
  display: block;
  width:100%;
  height:100%;
`;

const HeaderThirdGD = styled.div`
  position:absolute;
  top:65%;
  left:30%;
  font-size:50px;
  color:var(--dark-desaturated-cyan);
  // text-align:center;
`;

const HeaderThirdPH = styled.div`
  position:absolute;
  top:65%;
  left:30%;
  font-size:50px;
  color:var(--dark-blue);
  // text-align:center;
`;

const SentencesThirdGD = styled.div`
  color:var(--dark-desaturated-cyan);
  font-size:22px;
  text-align:center;
  position: absolute;
  top:80%;
  left:20%;
  right:20%;
`;

const SentencesThirdPH = styled.div`
  color:var(--dark-blue);
  font-size:22px;
  text-align:center;
  position: absolute;
  top:80%;
  left:20%;
  right:20%;
`;

// Testimonials
const Testimonials = styled.div`
  flex:100%;
  background-color:#F8F8F8;
  order:7;
  height:400px;
  position:relative;

  display:flex;
  flex-direction:column;
  align-items:center;
`;

const HeaderTestimonial = styled.div`
  color:var(--dark-grayish-blue);

  padding: 50px 0;
  letter-spacing:3px;
`;

// const FlexTestimonial = styled.div`
//   display:flex;
//   flex-direction:row;
//   width:100%;
//   top:40%;
//   position:absolute;
//   flex-wrap: wrap;
// `;

// const EmptyFlexSide = styled.div`
//   flex:20%;
// `;

// const EmptyFlexMiddle = styled.div`
//   flex:20%;
// `;

// const ImgTestimonial = styled.img`
//   flex:5%;
//   border-radius:50%;

// `;


// const FlexTestimonialFeedback = styled.div`
//   flex:23%;
//   text-align:center;
//   margin-top:3%;
//   font-size:23px;
//   letter-spacing:2px;
//   line-height:1.6;
//   color:var(--very-dark-grayish-blue);

// `;

// const EmptyFlexFeedback = styled.div`
//   flex:10%;

// `;

// const EmptyFlexFeedbackMiddle = styled.div`
//   flex:5%;

// `;

// // Name Title 
// const NameTitleTestimonial = styled.div`
//   flex:20%;
//   fonr-size:30px;
//   font-weight:900;
// `;



function Card() {

  return (
    <InnerWrapper>
      <FlexContainer>

        {/* First LVL */}
        <LeftContainer>
          <Header>
            Transform your brand
          </Header>
          <Description>
            We are full-service creative agency specializing in helping brands grow fast. Engage your client through compelling visuals that do most of the marketing for you.
          </Description>
          <FooterFirst>
            LEARN MORE
          </FooterFirst>
        </LeftContainer>

        <EggContainer src="/static/desktop/image-transform.jpg" alt="image-transform">
        </EggContainer>




        {/* Second LVL */}
        <ImgLightSec src="/static/desktop/image-stand-out.jpg" alt="image-stand-out">
        </ImgLightSec>

        <RightContainerSec>
          <HeaderSec>
            Stand out to the right audience
          </HeaderSec>
          <DescriptionSec>
            Using a collaborative formula of designers,researchers,photographers,videographers,and copywritters,we'll build and extend your brand in digital places.
          </DescriptionSec>
          <FooterSec>
            LEARN MORE
          </FooterSec>
        </RightContainerSec>




        {/* Third LVL */}
        <CherryImgThirdContainer>
          <CherryImgThird src="/static/desktop/image-graphic-design.jpg" alt="image-graphic-design">
          </CherryImgThird>
          <HeaderThirdGD>
            Graphic Design
          </HeaderThirdGD>
          <SentencesThirdGD>
            Great Design makes you memorable. We deliver artwork that underscores your brand message and captures potential client's attention.
          </SentencesThirdGD>
        </CherryImgThirdContainer>

        <MandarinImgThirdContainer>
          <MandarinImgThird src="/static/desktop/image-photography.jpg" alt="image-photography">
          </MandarinImgThird>
          <HeaderThirdPH>
            Photography
          </HeaderThirdPH>
          <SentencesThirdPH>
            Increase your credibility by getting the most stunning,high-quality photos that improve your business image.
          </SentencesThirdPH>
        </MandarinImgThirdContainer>

        <Testimonials>
          <HeaderTestimonial>
            CLIENT TESTIMONIALS
          </HeaderTestimonial>

          <div style={{ display: "flex" }}>
            <TestimonialCard
              photo="/static/image-emily.jpg"
              sentence="We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit."
              name="Emily R."
              position="Marketing Director"
            />
            <TestimonialCard
              photo="/static/image-thomas.jpg"
              sentence="We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit."
              name="Thomas S."
              position="Chief Operation Officer"
            />
            <TestimonialCard
              photo="/static/image-jennie.jpg"
              sentence="We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit."
              name="Jennie F."
              position="Business Owner"
            />

          </div>







        </Testimonials>
        <div style={{ display: "flex", width: "100%" }}>
          <Footer image="/static/desktop/image-gallery-milkbottles.jpg"></Footer>
          <Footer image="/static/desktop/image-gallery-orange.jpg"></Footer>
          <Footer image="/static/desktop/image-gallery-cone.jpg"></Footer>
          <Footer image="/static/desktop/image-gallery-sugarcubes.jpg"></Footer>

        </div>

        <Contact></Contact>



      </FlexContainer>


    </InnerWrapper>
  );
}

export default Card;