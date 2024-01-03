// ResponsiveComponent.js
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 20px;
  background-color: #f0f0f0;
  max-width: 600px;
  margin: 0 auto;
  transition: all 3s ease;
  background-image: linear-gradient(
    to bottom,
    red,
    orange,
    yellow,
    green,
    blue,
    indigo,
    violet
  );
  @media (min-width: 760px) {
    color: #333;
    font-size: 30px;
    background-image: linear-gradient(
      to right,
      red,
      orange,
      yellow,
      green,
      blue,
      indigo,
      violet
    );
  }
  @media (min-width: 800px) {
    color: green;
    font-size: 20px;
  }
`;

const Heading = styled.h1`
  color: white;
  mix-blend-mode: multiply;
`;

const Paragraph = styled.p`
  color: #555;
`;

const ResponsiveComponent = () => {
  return (
    <Container>
      <Heading>Responsive React App</Heading>
      <Paragraph>
        This is a simple example of a responsive React component. It will adapt
        its styling based on the screen size.
      </Paragraph>
    </Container>
  );
};

export default ResponsiveComponent;
