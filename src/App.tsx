import styled from "styled-components";
import SearchForm from "./components/SearchForm";
import Heading from "./components/Heading";

const ContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  height: 100svh;
  margin: var(--gap-width);
`;

const App = () => {
  return (
    <ContainerDiv>
      <Heading />
      <SearchForm />
    </ContainerDiv>
  );
};

export default App;
