import styled from "styled-components";
import { useFormContext } from "../context";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  grid-area: search;
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
