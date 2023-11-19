import { Link } from "react-router-dom";
import Loginbutton from "./Loginbutton";
import styled from "styled-components";

export default function Header() {
  return (
    <Mainheader>
      <Link to="/">
        <Logo
          src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
          alt="로고"
        />
      </Link>
      <Links>
        <Link to="/Movie">
          <Linksli>영화</Linksli>
        </Link>
        <Link to="/TV">
          <Linksli>TV 프로그램</Linksli>
        </Link>
        <Link to="/Celebrity">
          <Linksli>인물</Linksli>
        </Link>
      </Links>
      <Loginbutton />
    </Mainheader>
  );
}

const Mainheader = styled.div`
  width: 100%;
  background-color: #032541;
  display: flex;
  text-align: center;
`;
const Logo = styled.img`
  width: 154px;
  height: 20px;
  margin-top: 16px;
  margin-left: 80px;
  margin-right: 10px;
`;
const Links = styled.ul`
  list-style: none;
  padding: 0;
`;
const Linksli = styled.li`
  color: white;
  float: left;
  padding-left: 25px;
`;
