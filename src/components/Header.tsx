import styled from "styled-components";

const StyledContainer = styled.header`
  text-align: center;
  margin: 0 0 1rem;
`;

const StyledHeader = styled.h1``;

const StyledSubheader = styled.h2``;

export type HeaderProps = { h1?: string; h2?: string };

const Header = ({ h1, h2 }: HeaderProps) => {
  return (
    <StyledContainer>
      {h1 && <StyledHeader>{h1}</StyledHeader>}
      {h2 && <StyledSubheader>{h2}</StyledSubheader>}
    </StyledContainer>
  );
};

export default Header;
