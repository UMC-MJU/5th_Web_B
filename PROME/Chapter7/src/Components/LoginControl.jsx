import React, { useState } from "react";
import styled from "styled-components";

function LoginControl() {
  const [isLoggedin, setIsLoggedin] = useState(false);

  const handleLoginClick = () => {
    setIsLoggedin(true);
  };

  const handleLogoutClick = () => {
    setIsLoggedin(false);
  };

  const buttonText = isLoggedin ? "로그아웃" : "로그인";
  const loginText = isLoggedin ? "환영합니다!" : "로그인 해주세요!";

  return (
    <div>
      <Button onClick={isLoggedin ? handleLogoutClick : handleLoginClick}>
        {buttonText}
      </Button>
      <Logintext>{loginText}</Logintext>
    </div>
  );
}

export default LoginControl;

const Button = styled.button`
  margin-top: 12px;
  margin-left: 40px;
  width: 80px;
  height: 30px;
  border-radius: 25px;
  font-weight: bold;
  font-size: 14px;
  border-color: none;
`;
const Logintext = styled.span`
  color: white;
  margin-left: 20px;
`;
