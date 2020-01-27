import React from "react";
import Typing from "react-typing-animation";
import { Navbar, Nav, Container, Row, Col, Image, Card } from "react-bootstrap";
import CategoryGroup from "../components/CategoryGroup";
import NavBar from "../components/NavBar";

class MainScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
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

  _onClickNav = index => {
    console.log("nav", index);
  };

  _renderTypingAnimation = () => {
    return (
      <div
        style={{
          width: "100%",
          textAlign: "center",
          backgroundColor: "rgb(51,51,51)",
          height: 200
        }}
      >
        <Typing
          //   loop={true}
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
              fontFamily: "monospace",
              color: "#ffffff",
              fontSize: 20,
              height: 200,
              display: "flex",
              flexDirection: "column",
              zIndex: 999
            }}
          >
            <div style={{ height: 50 }}></div>
            <span>I'm Andy Chan</span>
            <Typing.Delay ms="100" />
            <span>Mobile Apps Developer</span>
            <Typing.Delay ms="100" />
            <span>iOS & Android</span>
            {/* <Typing.Reset count={0} delay={500} /> */}
          </div>
        </Typing>
      </div>
    );
  };

  render() {
    return (
      <div>
        <script
          src="https://unpkg.com/react/umd/react.production.min.js"
          crossorigin
        />
        <NavBar
          title="PORTFOLIO"
          navTextArr={["Home", "Project", "Contact"]}
          onClickNav={this._onClickNav}
        />
        {this._renderTypingAnimation()}

        <div style={{ marginTop: 20 }}></div>
        <CategoryGroup
          containerStyle={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center"
          }}
          _updateTab={this._updateTab}
          selectIndex={this.state.index}
          btnTextArr={["All", "Mobile", "Web", "Others"]}
        />
        <Container
          fluid={true}
          style={{
            marginTop: 30,
            width: "100%"
          }}
        >
          <Row>
            <Col
              xs={6}
              md={4}
              style={{
                paddingLeft: 0,
                paddingRight: 0
              }}
            >
              <Image
                fluid
                rounded
                style={{ width: "100%" }}
                src="/images/mobile_bea.png"
              />
            </Col>
            <Col
              xs={6}
              md={4}
              style={{
                paddingLeft: 0,
                paddingRight: 0
              }}
            >
              <Image
                fluid
                rounded
                style={{ width: "100%" }}
                src="/images/ipad_hkhs.png"
              />
            </Col>
            <Col
              xs={6}
              md={4}
              style={{
                paddingLeft: 0,
                paddingRight: 0
              }}
            >
              <Image
                fluid
                rounded
                style={{ width: "100%" }}
                src="/images/ipad_voiceup.png"
              />
            </Col>
            <Col
              xs={6}
              md={4}
              style={{
                paddingLeft: 0,
                paddingRight: 0
              }}
            >
              <Image
                fluid
                rounded
                style={{ width: "100%" }}
                src="/images/mobile_twparking.png"
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default MainScreen;
