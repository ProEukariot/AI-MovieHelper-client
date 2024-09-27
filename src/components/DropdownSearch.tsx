import { forwardRef } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import styled from "styled-components";

export type Option = { value: string; label: string };
export type DropdownProps = {
  options: Option[];
  idleOption: Option;
} & Omit<UseFormRegisterReturn, "ref">;

const StyledContainer = styled.div`
  position: relative;

  &::before {
    content: "";
    position: absolute;
    width: 8px;
    height: 8px;
    background-color: black;
    right: 1rem;
    top: 50%;
    clip-path: polygon(0 0, 100% 0, 50% 50%);
  }
`;

const StyledSelect = styled.select`
  appearance: none;
  width: 100%;
`;

const DropdownSearch = forwardRef<HTMLSelectElement, DropdownProps>(
  ({ options, idleOption, ...rest }, ref) => {
    return (
      <StyledContainer>
        <StyledSelect {...rest} ref={ref}>
          <option value={idleOption.value}>{idleOption.label}</option>
          {options.map(({ value, label }) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </StyledSelect>
      </StyledContainer>
    );
  }
);

export default DropdownSearch;
