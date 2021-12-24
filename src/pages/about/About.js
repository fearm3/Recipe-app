import React from "react";
import {
  AboutContainer,
  HeaderContainer,
  InfoContainer,
  StyledImage,
} from "./AboutStyle";
import codingSvg from "../../assets/coding.svg";

const About = () => {
  return (
    <div>
      <AboutContainer>
        <StyledImage src={codingSvg} />
        <HeaderContainer>
          <h1>
            {" "}
            <span>SteakHouse</span> About Us!
          </h1>
        </HeaderContainer>
        <InfoContainer>
          <p>
            ICONIC LOG FLAME AND HICKORY MARK The Log Flame & Hickory icon
            combines two of Gallaghers most distinctive features. The flame
            above the logs pays tribute to our hickory coal grills—unique among
            all the restaurants in USA as the only way we cook our steak. The
            logs echo the bold design of the restaurant’s chandeliers—dating
            back to 1940s.
          </p>
        </InfoContainer>
      </AboutContainer>
    </div>
  );
};

export default About;
