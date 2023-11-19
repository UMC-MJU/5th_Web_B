import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function NotFound() {
  const navigate = useNavigate();
  const toHome = () => {
    navigate("/");
  };
  return (
    <Page>
      <h1>해당 페이지를 찾지 못했습니다</h1>
      <h3>주소가 잘못되었거나 더 이상 제공되지 않는 페이지입니다.</h3>
      <Tohome onClick={toHome}>메인 페이지로 이동</Tohome>
    </Page>
  );
}

const Page = styled.div`
  margin-left: 30px;
`;
const Tohome = styled.div`
  color: red;
  cursor: pointer;
  width: 10em;
`;
