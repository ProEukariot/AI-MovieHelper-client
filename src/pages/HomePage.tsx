import styled from "styled-components";
import SearchForm from "../components/SearchForm";
import Header from "../components/Header";

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
        <Header h1="Movie Helper" h2="Let AI find movie for you" />
        <SearchForm />
      </ContainerDiv>
    </>
  );
};

export default HomePage;
