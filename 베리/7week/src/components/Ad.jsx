import React, { Component } from "react";
import AdPage from "../components/AdPage";

class Ad extends Component {
  state = {
    isClicked: false,
  };

  handleToggleClick = () => {
    this.setState((prevState) => ({
      isClicked: !prevState.isClicked,
    }));
  };

  render() {
    const buttonText = this.state.isClicked ? "광고 보기" : "광고 안 보기";

    return (
      <div>
        {!this.state.isClicked && <AdPage />}
        <button onClick={this.handleToggleClick}>{buttonText}</button>
      </div>
    );
  }
}

export default Ad;
