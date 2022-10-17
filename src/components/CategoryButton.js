import React, { Component } from "react";
import { Button } from "react-bootstrap";
import styles from "./styles/CategoryButton"

class CategoryButton extends Component {
  render() {
    return (
      <Button
        style={styles.categoryButton}
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
  onClick: () => { },
  active: false,
  text: ""
};

export default CategoryButton;
