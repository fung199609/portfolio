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
          style={{color: '#fff'}}
          href="#features"
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
        variant="light"
        style={{background: 'rgba(47, 113, 192)'}}
      >
        <Navbar.Brand style={{color: '#fff'}} href="#home">{this.props.title}</Navbar.Brand>
        <Navbar.Toggle style={{filter: 'brightness(0) invert(1)'}} aria-controls="responsive-navbar-nav" />
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
  onClickNav: index => {}
};

export default NavBar;
