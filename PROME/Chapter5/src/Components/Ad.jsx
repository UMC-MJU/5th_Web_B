import React, { Component } from "react";
import AdPage from "../Components/AdPage";
import "../index.css";

class Ad extends Component {
  constructor(props) {
    super(props);

    this.state = {
      adview: true,
    };
    this.handletoggleClick = this.handletoggleClick.bind(this);
  }
  handletoggleClick() {
    this.setState((prevState) => ({
      isClicked: !prevState.isClicked,
    }));
  }
  render() {
    const buttonText = this.state.isClicked ? "광고 보기" : "광고 안 보기";
    return (
      <div>
        {!this.state.isClicked && <AdPage />}
        <button className="Adbutton" onClick={this.handletoggleClick}>
          {buttonText}
        </button>
      </div>
    );
  }
}

export default Ad;
