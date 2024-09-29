import styled from "styled-components";
import { Movie } from "../types/Movie";
import Card from "./Card";

export type OutputProps = {
  data: Movie[];
  loading: boolean;
  error: unknown;
};

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: var(--gap-width);
  background-color: var(--secondary-color);
  border-radius: var(--radius);
  padding: var(--gap-width);
`;

const StyledText = styled.span`
  display: block;
  padding: var(--gap-width);
`;

const Output = ({ data, loading, error }: OutputProps) => {
  const renderLoader = () => <StyledText>Loading...</StyledText>;

  const renderError = () => <StyledText>Something went wrong!</StyledText>;

  const renderMovies = () => (
    <>
      {data.map((movie, i) => (
        <Card key={i}>
          <Card.Header>{movie.movieName}</Card.Header>
          <Card.Description>{movie.movieDescription}</Card.Description>
        </Card>
      ))}
    </>
  );

  const renderContent = () => {
    let content: JSX.Element = <StyledText>Try submit the form.</StyledText>;

    if (error) content = renderError();

    if (loading) content = renderLoader();

    if (data && data.length) content = renderMovies();

    return content;
  };

  return <StyledContainer>{renderContent()}</StyledContainer>;
};

export default Output;
