import React, { useCallback, useState } from "react";
import styled from "styled-components";
import { useAuth } from "../hooks/useAuth";
import { customColor } from "../style/theme";
const SignupPopup = ({ setOnSignup }) => {
  const { signup } = useAuth();
  const [info, setInfo] = useState({
    id: "",
    password: "",
    passwordCheck: "",
  });
  const onChange = useCallback(
    (e) => {
      setInfo({ ...info, [e.target.name]: e.target.value });
    },
    [info]
  );
  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (info.password !== info.passwordCheck) {
        return alert("Password and Password Check do not match");
      }
      signup(info, setOnSignup);
    },
    [info, setOnSignup, signup]
  );
  return (
    <Wrap>
      <Title>Sign up</Title>
      <CancelBtn
        onClick={() => {
          setOnSignup(false);
        }}
      >
        <Icon src="../../img/cancel-circle.svg" />
      </CancelBtn>
      <Form onSubmit={onSubmit}>
        <Input
          type="text"
          name="id"
          value={info.id}
          onChange={onChange}
          placeholder="id"
        />
        <Input
          type="password"
          name="password"
          value={info.password}
          onChange={onChange}
          placeholder="password"
        />
        <Input
          type="password"
          name="passwordCheck"
          value={info.passwordCheck}
          onChange={onChange}
          placeholder="password check"
        />
        <Btn>Sign up</Btn>
      </Form>
    </Wrap>
  );
};

export default SignupPopup;
const Wrap = styled.div`
  position: fixed;
  width: 500px;
  height: 500px;
  box-shadow: 0px 0px 1000px 1000px rgba(0, 0, 0, 0.5);
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
`;
const Title = styled.h3`
  width: 100%;
  text-align: center;
`;
const CancelBtn = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  border: none;
  background: none;
  outline: none;
`;
const Icon = styled.img`
  width: 20px;
`;
const Form = styled.form`
  width: 100%;
`;
const Input = styled.input`
  border: 1px solid #eee;
  padding: 6px;
  width: 100%;
  background: ${customColor.inputColor};
  border-radius: 20px;
  line-height: 2em;
  font-size: 16px;
  display: block;
  outline: none;
  margin-top: 10px;
  box-sizing: border-box;
`;
const Btn = styled.button`
  border: none;
  outline: none;
  padding: 6px;
  cursor: pointer;
  border-radius: 6px;
  width: 100%;
  line-height: 2em;
  font-size: 16px;
  margin-top: 10px;
  background: ${customColor.button};
  &:active {
    background: ${customColor.buttonActive};
  }
`;