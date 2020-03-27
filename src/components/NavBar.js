import React, { Component } from "react";
import { Button, Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";

class NavBar extends Component {
  _renderNavItems = () => {
    return this.props.navTextArr.map((text, index) => {
      return (
        <Nav.Link
          onSelect={() => {
            this.props.onClickNav(index);
          }}
          href={this.props.navUrlArr[index]!==''? this.props.navUrlArr[index] : '#'}
        >
          {text}
        </Nav.Link>
      );
    });
  };
  render() {
    return (
      <Navbar
        fixed="top"
        collapseOnSelect
        expand="lg"
        bg="light"
        variant="light"
      >
        <Navbar.Brand href="#home">{this.props.title}</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">{this._renderNavItems()}</Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

NavBar.defaultProps = {
  title: "",
  navTextArr: [],
  navUrlArr: [],
  onClickNav: index => {}
};

export default NavBar;
