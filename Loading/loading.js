import React from "react";
import "./loading.scss";

export default class Loading extends React.Component {
  render() {
    return (
      <div id="outer">
        <div id="middle">
          <div id="inner"></div>
        </div>
      </div>
    );
  }
}
