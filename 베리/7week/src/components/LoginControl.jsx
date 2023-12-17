import React, { Component } from "react";
import "../index.css";

class LoginControl extends Component {
  state = {
    isLoggedin: false,
  };

  handleLoginClick = () => {
    this.setState({ isLoggedin: true });
  };

  handleLogoutClick = () => {
    this.setState({ isLoggedin: false });
  };

  render() {
    const buttonText = this.state.isLoggedin ? "로그아웃" : "로그인";
    const loginText = this.state.isLoggedin ? "환영합니다!" : "로그인 해주세요!";

    return (
      <div>
        <button
          className="loginbutton"
          onClick={this.state.isLoggedin ? this.handleLogoutClick : this.handleLoginClick}
        >
          {buttonText}
        </button>
        <span className="logintext">{loginText}</span>
      </div>
    );
  }
}

export default LoginControl;
