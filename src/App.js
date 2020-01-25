import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Typing from "react-typing-animation";
import Typewriter from "typewriter-effect";
import {
  Navbar,
  Nav,
  NavDropdown,
  Badge,
  ButtonToolbar,
  Button
} from "react-bootstrap";
import Cursor from "react-typing-animation/dist/Cursor";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: -1,
      isTypeComplete: false
    };
  }

  _updateTab = _index => {
    if (this.state.isTypeComplete) {
      this.setState({
        index: _index
      });
    }
  };

  render() {
    return (
      <div>
        <script
          src="https://unpkg.com/react/umd/react.production.min.js"
          crossorigin
        />
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
          <Navbar.Brand href="#home">PORTFOLIO</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#features">Home</Nav.Link>
              <Nav.Link href="#pricing">Projects</Nav.Link>
              <Nav.Link href="#pricing">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Typing
          onFinishedTyping={() => {
            this.setState({
              isTypeComplete: true
            });
          }}
          speed={80}
          hideCursor={false}
        >
          <div
            style={{
              width: "100%",
              textAlign: "center",
              backgroundColor: "rgb(51,51,51)",
              fontFamily: "monospace",
              color: "#ffffff",
              fontSize: 20,
              textColor: "#ffffff",
              height: 200,
              display: "flex",
              flexDirection: "column"
            }}
          >
            <div style={{ height: 50 }}></div>
            <span>I'm Andy Chan</span>
            <Typing.Delay ms="100" />
            <span>Mobile Apps Developer</span>
            <Typing.Delay ms="100" />
            <span>iOS & Android</span>
          </div>
        </Typing>
        <ButtonToolbar
          style={{
            margin: 20,
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <Button
            style={{ width: 80, borderRadius: 20 }}
            onClick={() => {
              this._updateTab(0);
            }}
            active={this.state.index === 0}
            variant="outline-dark"
          >
            All
          </Button>
          <div style={{ width: 5 }}></div>
          <Button
            style={{ width: 80, borderRadius: 20 }}
            onClick={() => {
              this._updateTab(1);
            }}
            active={this.state.index === 1}
            variant="outline-dark"
          >
            Mobile
          </Button>
          <div style={{ width: 5 }}></div>
          <Button
            style={{ width: 80, borderRadius: 20 }}
            onClick={() => {
              this._updateTab(2);
            }}
            active={this.state.index === 2}
            variant="outline-dark"
          >
            Web
          </Button>
          <div style={{ width: 5 }}></div>
          <Button
            style={{ width: 80, borderRadius: 20 }}
            onClick={() => {
              this._updateTab(3);
            }}
            active={this.state.index === 3}
            variant="outline-dark"
          >
            Others
          </Button>
        </ButtonToolbar>
      </div>
    );
  }
}

export default App;
