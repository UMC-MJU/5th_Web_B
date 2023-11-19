import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function Contents({ name, poster, date, overview }) {
  const [isHovering, setIsHovering] = useState(0);
  const navigate = useNavigate();

  const onClickImg = () => {
    navigate(`${name}`, { state: { name, poster, overview } });
  };

  return (
    <Wrapper
      onMouseOver={() => setIsHovering(1)}
      onMouseOut={() => setIsHovering(0)}
      onClick={onClickImg}
    >
      <Overview>
        {isHovering ? (
          <div>
            <Hovername>{name}</Hovername>
            <Hoveroverview>
              {overview.length > 200 ? (
                <div>{overview.substr(0, 200) + " ..."}</div>
              ) : (
                <div>{overview}</div>
              )}
            </Hoveroverview>
          </div>
        ) : (
          ""
        )}
      </Overview>
      <Poster
        alt={name + " poster"}
        src={"https://www.themoviedb.org/t/p/w600_and_h900_bestv2/" + poster}
      ></Poster>
      <Info>
        <Namebox>{name}</Namebox>
        <Date>
          {Number(date.substr(5, 2))}.{Number(date.substr(8, 2))}
        </Date>
      </Info>
    </Wrapper>
  );
}

const Wrapper = styled.span`
  width: 250px;
  height: 470px;
  background-color: #373b69;
  border-radius: 10px;
  position: relative;
  cursor: pointer;
`;
const Overview = styled.div`
  color: white;
  position: absolute;
  background-color: #000000a8;
  height: 470px;
  top: 0;
  left: 0;
  border-radius: 0px 0px 10px 10px;
`;
const Hovername = styled.div`
  margin: 20px;
`;
const Hoveroverview = styled.div`
  margin-left: 20px;
  margin-right: 20px;
`;
const Poster = styled.img`
  width: 250px;
  height: 400px;
`;
const Info = styled.div`
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Namebox = styled.div`
  padding-left: 20px;
  width: 150px;
  font-size: 15px;
  font-weight: bold;
  font-family: "굴림";
  color: white;
`;
const Date = styled.div`
  width: 50px;
  color: white;
`;
