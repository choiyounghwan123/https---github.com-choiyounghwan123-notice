import React from "react";
import styled from "styled-components";
import AuthForm from "../component/auth/AuthForm";
import AuthTemplate from "../component/auth/AuthTemplate";
import Button from "../component/common/Button";

const Login = () => {
  return (
    <AuthTemplate>
      <AuthForm></AuthForm>
    </AuthTemplate>
  );
};

export default Login;
