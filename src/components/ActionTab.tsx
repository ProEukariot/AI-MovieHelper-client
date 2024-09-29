/* eslint-disable @typescript-eslint/no-explicit-any */
import styled from "styled-components";

const StyledContainer = styled.div`
  grid-area: action;
  display: flex;
  justify-content: end;
  gap: var(--gap-width);
  background-color: var(--secondary-color);
  padding: var(--gap-width);
  border-radius: var(--radius);
`;

const ActionTab = ({ children }: any) => {
  return <StyledContainer>{children}</StyledContainer>;
};

const SubmitBtn = () => {
  return <button type="submit">Find</button>;
};

const ResetBtn = ({ reset }: { reset: any }) => {
  return (
    <button type="reset" onClick={() => reset()}>
      Reset
    </button>
  );
};

ActionTab.ResetBtn = ResetBtn;
ActionTab.SubmitBtn = SubmitBtn;

export default ActionTab;
