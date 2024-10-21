import React, { Component } from "react";

class CustomSetter extends Component<any, any> {
  render() {
    const { defaultValue, value, onChange } = this.props;
    const { editor } = this.props.field;

    return <div>hello world</div>;
  }
}

export default CustomSetter;
