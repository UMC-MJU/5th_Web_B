import { useLocation } from "react-router-dom";
import styled from "styled-components";

export default function Details() {
  const { state } = useLocation();
  return (
    <Detail>
      <Detailposter
        src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${state.poster}`}
        alt={state.name}
      />
      <Detailname>{state.name}</Detailname>
    </Detail>
  );
}

const Detail = styled.div`
  padding-top: 20px;
`;
const Detailposter = styled.img`
  width: 250px;
  height: 400px;
  margin-left: 100px;
  margin-right: 30px;
`;
const Detailname = styled.span`
  vertical-align: top;
  font-size: 30px;
`;
