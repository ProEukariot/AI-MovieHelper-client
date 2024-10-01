/* eslint-disable @typescript-eslint/no-explicit-any */
import styled from "styled-components";

export type SubmitBtnProps = {
  disabled?: boolean;
};

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

const SubmitBtn = ({ disabled = false }: SubmitBtnProps) => {
  return (
    <button disabled={disabled} type="submit">
      Find
    </button>
  );
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
