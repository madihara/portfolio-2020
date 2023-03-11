import React from "react";
import styled from "styled-components";
import "../index.css";

const About = () => {
  return (
    <Main>
      <FlexRow>
        <Title>
          madison <br></br> schafer
        </Title>
      </FlexRow>

      <SubTitle>Frontend Developer</SubTitle>
      <Disclaimer style={{ fontSize: "1.4rem", padding: "0", margin: "0" }}>
        Site is currently under construction.
      </Disclaimer>
      <p style={{ padding: "0", margin: "0", marginTop: "10px" }}>
        Come back soon for more up to date info and improved mobile
        responsiveness
      </p>
    </Main>
  );
};

export default About;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 6rem;
  width: 100%100vw;

  @media screen and (max-width: 900px) {
    padding: 4.2rem 1.3rem 1rem 1.3rem;
  }
`;
const FlexRow = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: space-between;
`;
export const Title = styled.h2`
  font-family: "Abril Fatface", cursive;
  font-size: 9.5rem;
  padding: 0rem;
  margin: 0;
  line-height: 8.5rem;

  @media screen and (max-width: 850px) {
    font-size: 5rem;
    line-height: 4.2rem;
  }

  /* margin: 0; */
`;

const SubTitle = styled.h4`
  /* font-weight: normal; */
  font-size: 1.8rem;
  color: #a1a1a1;
  padding: 2rem 0;
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 0.8rem;

  @media screen and (max-width: 1300px) {
    font-size: 0.7rem;
    letter-spacing: 1px;
    padding: 1rem 0;
  }
`;

const Disclaimer = styled(SubTitle)`
  font-size: 1.4rem;
`;
