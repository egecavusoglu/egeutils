import React from "react";
import "./toggle.scss";

export default class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange() {
    this.setState({ toggle: !this.state.toggle });
  }
  render() {
    return (
      <div className={"background back" + this.state.toggle}>
        <button
          className={"button " + this.state.toggle}
          onClick={this.handleChange}
          id="button"
          value={this.state.toggle}
        ></button>
      </div>
    );
  }
}
