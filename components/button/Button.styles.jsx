import styled, { keyframes } from "styled-components";

export const StyledButton = styled.button`
  font-size: 18px;
  padding: 10px;
  margin: 5px;
  cursor: pointer;
  background-color: ${(props) =>
    props.variant === "outline" ? "white" : "green"};
  color: ${(props) => (props.variant === "outline" ? "black" : "white")};
  &:hover {
    background-color: grey;
    color: white;
    transition: 0.5s;
  }
`;
export const FancyButton = styled(StyledButton)`
  border: 1px solid red;
  background-color: white;
  color: black;
`;

export const SubmitButton = styled(StyledButton).attrs({
  type: "submit",
})`
  background-color: red;
  color: white;
`;

const rotate = keyframes`
  from{
    transform: rotate(0deg);
  }
  to{
    transform: rotate(360deg);
  }
`;

export const AnimatedLogo = styled.img`
  height: 10vmin;
  pointer-events: none;
  animation: ${rotate} infinite 2s linear;
`;

export const DarkButton = styled(StyledButton)`
  border: 2px solid ${(props) => props.theme.dark.primary};
  background-color: ${(props) => props.theme.dark.primary};
  color: ${(props) => props.theme.dark.text};
`;
