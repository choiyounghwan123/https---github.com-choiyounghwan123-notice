import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "../common/Button";

const AuthFormBlock = styled.div`
  width: 50%;
  height: 600px;
  background: white;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const StyleLoginBox = styled.div`
  margin-top: 20px;
  width: 80%;
`;

const StyleInput = styled.input`
  width: 100%;
  height: 50px;
  border-radius: 30px;
  margin-top: 10px;
  padding: 0px 20px;
  border: 1px solid lightgray;
  outline: none;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

const AuthForm = () => {
  return (
    <AuthFormBlock>
      <h2>Log-in</h2>
      <StyleLoginBox>
        <h4>E-mail</h4>
        <StyleInput type="email" placeholder="Email"></StyleInput>
      </StyleLoginBox>
      <StyleLoginBox>
        <h4>Password</h4>
        <StyleInput type="email" placeholder="password"></StyleInput>
      </StyleLoginBox>
      <div className="login_etc">
        <div>
          <input type="checkbox" style={{ margin: "5px" }}></input>Remember me?
        </div>
        <div>
          <StyledLink>Forgot Password?</StyledLink>
        </div>
      </div>
      <div className="submit">
        <Button>Submit</Button>
      </div>
    </AuthFormBlock>
  );
};

export default AuthForm;
