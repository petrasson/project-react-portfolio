import React from 'react';
import styled from 'styled-components';
import ContentWrapper from './Shared/ContentWrapper';
import ColorTitle from './Shared/ColorTitle';

const TechStyle = styled.div`
background-color: var(--secondBackground); 
display: row;
border: solid 2px red;
justify-content: center;
padding: 10px 0 40px 0;
font-family: Montserrat, sans-serif;
font-weight: 400;
text-align: center;
`
const Tech = () => {
  return (
    <ContentWrapper as="section">
      <TechStyle>
        <ColorTitle />
        <p>HTML, CSS, Flexbox, JavaScript ES6, React, Web Accessibility, API:s, mob-programming,
          pair-programming, Github.
        </p>
      </TechStyle>
    </ContentWrapper>
  );
};
export default Tech;
