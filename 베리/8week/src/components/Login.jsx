import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { getID, getPW } from "../Redux/state";

export default function Login() {
  const ID = useSelector((state) => state.state.id);
  const PW = useSelector((state) => state.state.pw);
  const [isLoading, setIsLoading] = useState(false);
  var url = "http://localhost:3000/user/login";
  const dispatch = useDispatch();
  async function Loginclick(e) {
    e.preventDefault();
    try {
      setIsLoading(true);
      const API = await axios.post(url, {
        id: ID,
        pw: PW,
      });
      console.log("로그인 성공!!!");
      console.log(API);
    } catch (err) {
      alert("ID, PW를 다시 확인해주세요");
      console.log("에러 발생 :", err);
    }
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }
  return (
    <Form onSubmit={Loginclick}>
      <Inputform
        onChange={(e) => dispatch(getID(e.target.value))}
        placeholder="ID를 입력하세요"
      />
      <Inputform
        type="password"
        onChange={(e) => dispatch(getPW(e.target.value))}
        placeholder="PW를 입력하세요"
      />
      <Button type="submit" disabled={isLoading}>
        {isLoading ? "Loading..." : "로그인"}
      </Button>
    </Form>
  );
}

const Form = styled.form`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Inputform = styled.input`
  padding-left: 20px;
  font-size: 15px;
  width: 200px;
  height: 40px;
  border-radius: 10px;
  margin-bottom: 20px;
`;
const Button = styled.button`
  width: 160px;
  height: 40px;
  border-radius: 10px;
  font-size: 15px;
`;