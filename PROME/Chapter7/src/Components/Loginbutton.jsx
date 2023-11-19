import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function Loginbutton() {
  const navigate = useNavigate();
  return (
    <Button
      onClick={() => {
        navigate("/Login");
      }}
    >
      로그인
    </Button>
  );
}

const Button = styled.button`
  margin-top: 12px;
  margin-left: 40px;
  width: 80px;
  height: 30px;
  border-radius: 25px;
  font-weight: bold;
  font-size: 14px;
  border-color: none;
  cursor: pointer;
`;
