import { FormEvent, useEffect, useState } from "react";
import styled from "styled-components";
import ActionTab from "./ActionTab";
import Header from "./Header";
import { useFetch } from "../hooks/useFetch";
import axiosInstance from "../axios/axiosInstance";
import { useNavigate } from "react-router-dom";

const ContentWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  min-height: 100svh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4rem 0;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-width);
  width: 100%;
  max-width: 48rem;
  height: 100%;
  padding: var(--gap-width);
`;

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: var(--gap-width);
  list-style-type: none;
  background-color: var(--secondary-color);
  display: flex;
  flex-direction: column;
  gap: var(--gap-width);
  padding: var(--gap-width);
  border-radius: var(--radius);
`;

const StyledInput = styled.input`
  width: 100%;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: var(--gap-width);
  padding: var(--gap-width);
  border-radius: var(--radius);
`;

type ResponseType = { movies: { avoidMovies: Array<string> } };

const Preferences = () => {
  type Movie = { title: string };
  const [movies, setMovies] = useState<Array<Movie>>([]);

  const [snapshot, setSnapshot] = useState<Array<Movie> | null>(null);

  const { data, isLoading, error, fetchData } = useFetch<ResponseType>();

  const navigate = useNavigate();

  useEffect(() => {
    fetchData("/api/user/avoid-movies");
  }, []);

  useEffect(() => {
    if (!data) return;
    const parsedData: Array<Movie> = data.movies.avoidMovies.map((record) => ({
      title: record,
    }));
    parsedData.push({ title: "" });

    setMovies(parsedData);

    setSnapshot(parsedData);
  }, [data]);

  const updateMovie = (index: number, newValue: Movie) => {
    setMovies((currMovies) => {
      const updatedItems = [...currMovies];

      updatedItems[index] = newValue;

      return updatedItems;
    });
  };

  const deleteRecord = (index: number) => {
    if (movies[index].title || index == movies.length - 1) return;

    setMovies((currMovies) => {
      const updatedItems = [...currMovies];

      updatedItems.splice(index, 1);

      return updatedItems;
    });
  };

  const addEmptyRecord = () => {
    if (!movies[movies.length - 1]?.title) return;

    setMovies((currMovies) => {
      const updatedItems = [...currMovies];

      updatedItems.push({ title: "" });

      return updatedItems;
    });
  };

  const onReset = () => {
    if (snapshot) setMovies(snapshot);
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const reqMovies = movies
      .filter((v) => v.title.length > 0)
      .map((v) => v.title);

    await axiosInstance.put("/api/user/avoid-movies", { movies: reqMovies });

    navigate("/");
  };

  return (
    <ContentWrapper>
      <Container>
        <Header h2="Exclude movies you've seen" />
        <StyledForm onSubmit={onSubmit}>
          <StyledList>
            {movies.map((movie, i) => (
              <li key={i}>
                <StyledInput
                  type="text"
                  value={movie.title}
                  onChange={(e) => {
                    updateMovie(i, { title: e.target.value });
                  }}
                  onBlur={(e) => {
                    addEmptyRecord();
                    deleteRecord(i);
                  }}
                />
              </li>
            ))}
          </StyledList>

          <ActionTab>
            <ActionTab.ResetBtn reset={onReset} />
            <ActionTab.SubmitBtn />
          </ActionTab>
        </StyledForm>
      </Container>
    </ContentWrapper>
  );
};

export default Preferences;
