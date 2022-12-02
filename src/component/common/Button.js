import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  width: 100%;
  height: 50px;
  border: 0;
  outline: none;
  border-radius: 40px;
  background: linear-gradient(to left, rgb(255, 77, 46), rgb(255, 155, 47));
  color: white;
  font-size: 1.2em;
  letter-spacing: 2px;
`;

const Button = (props) => {
  return <StyledButton {...props}></StyledButton>;
};

export default Button;
