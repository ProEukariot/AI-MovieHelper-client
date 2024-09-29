import styled from "styled-components";

type Props = {
  children: string | JSX.Element | JSX.Element[];
};

const StyledHeader = styled.h2`
  font-size: 1.2rem;
  margin-right: 1rem;
  flex-basis: 120px;
`;

const StyledDescription = styled.p`
  flex: 1;
`;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 1px solid grey;
  border-radius: var(--radius);
  padding: var(--radius);
`;

const Card = ({ children }: Props) => {
  return <StyledContainer>{children}</StyledContainer>;
};

const Header = ({ children }: Props) => <StyledHeader>{children}</StyledHeader>;

const Description = ({ children }: Props) => (
  <StyledDescription>{children}</StyledDescription>
);

Card.Header = Header;
Card.Description = Description;

export default Card;
