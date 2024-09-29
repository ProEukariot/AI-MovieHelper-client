import styled from "styled-components";
import { useFormContext } from "../context";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  grid-area: search;
  background-color: var(--secondary-color);
  padding: var(--gap-width);
  border-radius: var(--radius);
`;

const TextSearch = () => {
  const { register } = useFormContext();

  return (
    <StyledContainer>
      <input
        {...register("query")}
        type="text"
        placeholder="Some suggestions..."
      />
    </StyledContainer>
  );
};

export default TextSearch;
