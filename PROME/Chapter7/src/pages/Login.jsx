import React, { useState } from "react";
import styled from "styled-components";

const list = [0, 0];
export default function Login() {
  const [display_email, setState_email] = useState({ display: "none" });
  const [display_pw, setState_pw] = useState({ display: "none" });
  const [button, setState] = useState(true);
  const onChange_email = (e) => {
    if (!regex_email.test(e.target.value)) {
      setState_email({ display: "inline" });
      list[0] = 0;
    } else {
      setState_email({ display: "none" });
      list[0] = 1;
    }
    checkcorrect();
  };
  const onChange_pw = (e) => {
    if (!regex_pw.test(e.target.value)) {
      setState_pw({ display: "inline" });
      list[1] = 0;
    } else {
      setState_pw({ display: "none" });
      list[1] = 1;
    }
    checkcorrect();
  };

  const checkcorrect = () => {
    console.log(list[0], list[1]);
    if (list[0] === 1 && list[1] === 1) setState(false);
    else setState(true);
  };

  const regex_email = new RegExp(
    "[a-zA-Z0-9가-힣ㄱ-ㅎㅏ-ㅣ]+@[a-zA-Z0-9가-힣ㄱ-ㅎㅏ-ㅣ]+.com$"
  );
  const regex_pw = new RegExp(
    "^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*#?&])[A-Za-z\\d@$!%*#?&]{8,}$"
  );
  return (
    <Page>
      <h1>
        이메일과 비밀번호를
        <br />
        입력해주세요
      </h1>
      <Form>
        <Textinform>이메일</Textinform>
        <Forminput
          onChange={onChange_email}
          type="text"
          placeholder="'@' 를 포함, '.com'으로 끝남"
          name="email"
        />
        <Inputerror id="emailerror" style={display_email}>
          올바른 이메일을 입력해주세요.
        </Inputerror>
      </Form>
      <Form>
        <Textinform>비밀번호</Textinform>
        <Forminput
          onChange={onChange_pw}
          type="password"
          placeholder="영문, 숫자, 특수문자 포함 8자 이상"
          name="PW"
        />
        <Inputerror id="PWerror" style={display_pw}>
          올바를 비밀번호를 입력해주세요.
        </Inputerror>
      </Form>
      <Signupbutton
        props={button}
        type="button"
        disabled={button}
        value="가입하기"
      />
    </Page>
  );
}
const Page = styled.div`
  margin-left: 30px;
`;
const Form = styled.div`
  width: 300px;
`;
const Textinform = styled.div`
  color: rgb(0, 0, 0);
  display: inline-block;
  font-weight: bold;
  width: 300px;
  white-space: nowrap;
  text-align: start;
  margin-bottom: 5px;
  margin-top: 15px;
`;
const Forminput = styled.input`
  color: rgb(0, 0, 0);
  background-color: transparent;
  border-radius: 5px;
  width: 500px;
  height: 30px;
  border-color: #fff;
  box-shadow: none;
  border: 1px solid rgba(150, 150, 150, 0.418);
  background-color: rgb(255, 255, 255);
`;
const Inputerror = styled.div`
  width: 300px;
  text-align: start;
  color: red;
  font-size: 12px;
`;
const Signupbutton = styled.input`
  width: 300px;
  height: 50px;
  background-color: ${({ props }) => (props ? "#2c2c2f3f" : "#000")};
  cursor: ${({ props }) => (props ? "default" : "pointer")};
  color: #fff;
  border: none;
  border-radius: 10px;
  margin-bottom: 30px;
  margin-top: 20px;
  font-size: 23px;
`;
