import styled from "styled-components";

const StyledContainer = styled.header`
  text-align: center;
  margin: 0 0 1rem;
`;

const StyledHeader = styled.h1``;

const StyledSubheader = styled.h2``;

const Heading = () => {
  return (
    <StyledContainer>
      <StyledHeader>Movie Helper</StyledHeader>
      <StyledSubheader>Let AI find movie for you.</StyledSubheader>
    </StyledContainer>
  );
};

export default Heading;
