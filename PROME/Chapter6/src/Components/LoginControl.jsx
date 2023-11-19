import React, { useState } from "react";
import "../index.css";

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
      <button
        className="loginbutton"
        onClick={isLoggedin ? handleLogoutClick : handleLoginClick}
      >
        {buttonText}
      </button>
      <span className="logintext">{loginText}</span>
    </div>
  );
}

export default LoginControl;
