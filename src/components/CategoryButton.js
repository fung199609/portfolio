import React, { Component } from "react";
import { Button } from "react-bootstrap";

class CategoryButton extends Component {
  render() {
    let activeStyle = this.props.active ? { background: 'rgb(47, 113, 192)', color: '#fff'} : { background: '#fff', color: '#000'}
    return (
      <div
        style={{
          borderRadius: 20,
          marginLeft: 10,
          marginRight: 10,
          paddingLeft: 20,
          paddingRight: 20,
          height: 30,
          fontSize: 13,
          cursor: "pointer",
          borderColor: 'rgb(47, 113, 192)',
          border: 'solid',
          borderWidth: '1px',
          display: 'flex',
          alignItems: 'center',
          ...activeStyle
        }}
        onClick={this.props.onClick}
        // active={this.props.active}
        variant="outline-primary"
      >
        {this.props.text}
      </div>
    );
  }
}

CategoryButton.defaultProps = {
  onClick: () => {},
  active: false,
  text: ""
};

export default CategoryButton;
