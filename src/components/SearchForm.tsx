import styled from "styled-components";
import TextSearch from "./TextSearch";
import SearchFilters from "./SearchFilters";
import Output from "./Output";
import ActionTab from "./ActionTab";
import { SubmitHandler, useForm } from "react-hook-form";
import { FormContext, FormFields } from "../context";
import { Movie } from "../types/Movie";
import { useFetch } from "../hooks/useFetch";

const StyledFrom = styled.form`
  display: grid;
  grid: auto auto auto / 14rem 1fr;
  gap: var(--gap-width);
  grid-template-areas:
    "search search"
    "filters output"
    "action action";

  width: 100%;
  max-width: 48rem;
  padding: var(--gap-width);

  @media (max-width: 600px) {
    grid: auto auto auto auto / 1fr;
    grid-template-areas:
      "search"
      "filters"
      "output"
      "action";
  }
`;

const SearchForm = () => {
  const form = useForm<FormFields>();
  const { handleSubmit, reset } = form;
  const { data: movies, isLoading, error, fetchData } = useFetch<Movie[]>();

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    const endpoint = `/api/get-movies?query=${data.query}&genre=${data.genre}&mood=${data.mood}&type=${data.type}`;

    await fetchData(endpoint);
  };

  return (
    <FormContext.Provider value={form}>
      <StyledFrom onSubmit={handleSubmit(onSubmit)}>
        <TextSearch />
        <SearchFilters />
        <Output data={movies || []} error={error} loading={isLoading} />
        <ActionTab>
          <ActionTab.ResetBtn reset={reset} />
          <ActionTab.SubmitBtn />
        </ActionTab>
      </StyledFrom>
    </FormContext.Provider>
  );
};

export default SearchForm;
