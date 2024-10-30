import styled from "styled-components";
import SearchForm from "../components/SearchForm";
import Heading from "../components/Heading";

const ContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  min-height: 100svh;
  padding: 4rem 0;
`;

const HomePage = () => {
  return (
    <>
      <ContainerDiv>
        <Heading />
        <SearchForm />
      </ContainerDiv>
    </>
  );
};

export default HomePage;
