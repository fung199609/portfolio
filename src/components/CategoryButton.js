import React, { Component } from "react";
import { Button } from "react-bootstrap";

class CategoryButton extends Component {
  render() {
    return (
      <Button
        style={{
          borderRadius: 20,
          marginLeft: 10,
          marginRight: 10,
          paddingLeft: 20,
          paddingRight: 20,
          fontSize: 13
        }}
        onClick={this.props.onClick}
        active={this.props.active}
        variant="outline-dark"
      >
        {this.props.text}
      </Button>
    );
  }
}

CategoryButton.defaultProps = {
  onClick: () => {},
  active: false,
  text: ""
};

export default CategoryButton;
