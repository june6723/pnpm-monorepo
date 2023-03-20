import { AddIcon } from "@june/icons";
import styled from "styled-components";
import { ButtonProps } from "./Button.types";

const ButtonStyle = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #0aa2c0;
  gap: 4px;
  color: white;
  padding: 8px 16px;
`;

const Button = ({ children }: ButtonProps) => {
  return (
    <ButtonStyle>
      <AddIcon />
      {children}
    </ButtonStyle>
  );
};

export default Button;
