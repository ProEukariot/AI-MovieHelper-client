import styled from "styled-components";
import TextSearch from "./TextSearch";
import SearchFilters from "./SearchFilters";
import Output from "./Output";
import ActionTab from "./ActionTab";
import { SubmitHandler, useForm } from "react-hook-form";
import { FormContext, FormFields } from "../context";

const StyledFrom = styled.form`
  display: grid;
  grid: auto 1fr auto / 14rem 1fr;
  gap: var(--gap-width);
  grid-template-areas:
    "search search"
    "filters output"
    "action action";

  background-color: red;
  border-radius: var(--radius);
  height: 32rem;
  width: 100%;
  max-width: 48rem;
  padding: var(--gap-width);
`;

const SearchForm = () => {
  const form = useForm<FormFields>();
  const { handleSubmit, reset } = form;

  const onSubmit: SubmitHandler<FormFields> = (data) => {
    console.log("Submitted", data);
  };

  return (
    <FormContext.Provider value={form}>
      <StyledFrom onSubmit={handleSubmit(onSubmit)}>
        <TextSearch />
        <SearchFilters />
        <Output />
        <ActionTab>
          <ActionTab.ResetBtn reset={reset} />
          <ActionTab.SubmitBtn />
        </ActionTab>
      </StyledFrom>
    </FormContext.Provider>
  );
};

export default SearchForm;
