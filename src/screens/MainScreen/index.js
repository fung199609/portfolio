import React from "react";
import Typing from "react-typing-animation";
import { Container, Row, Col, Image } from "react-bootstrap";
import CategoryGroup from "../../components/CategoryGroup";
import NavBar from "../../components/NavBar";
import localData from "../../assets/data/projects";
import FlipMove from "react-flip-move";
import { Ring, Roller } from "react-awesome-spinners";
import "./index.css";
import "./jquery.js";

class MainScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      isTypeComplete: false,
      hoverIndex: -1,
      isHover: false,
      loading: false
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
      <div style={styles.typeBlackBg}>
        <Typing
          //   loop={true}
          onFinishedTyping={() => {
            this.setState({
              isTypeComplete: true,
              loading: false
            });
          }}
          speed={50}
          hideCursor={false}
        >
          <div style={styles.typeContainer}>
            <div style={{ height: 50 }}></div>
            <span>I'm Andy Chan</span>
            <Typing.Delay ms="200" />
            <span>Mobile Apps Developer</span>
            <Typing.Delay ms="200" />
            <span>iOS & Android</span>
            {/* <Typing.Reset count={0} delay={500} /> */}
          </div>
        </Typing>
      </div>
    );
  };

  _renderImages = () => {
    let tmpData = localData;
    switch (this.state.index) {
      case 1:
        tmpData = tmpData.filter(item => item.type === "mobile");
        break;
      case 2:
        tmpData = tmpData.filter(item => item.type === "web");
        break;
      case 3:
        tmpData = tmpData.filter(item => item.type === "other");
        break;
    }
    return tmpData.map((item, index) => {
      return (
        <Col
          key={index}
          xs={12}
          sm={6}
          md={4}
          style={{
            paddingLeft: 10,
            paddingRight: 10,
            marginBottom: 10,
            borderRadius: 5,
            overflow: "hidden"
          }}
        >
          <div
            className="itemTag"
            // onMouseUp={() => {
            //   if (!this.state.isHover && this.state.isTypeComplete) {
            //     this.setState({
            //       hoverIndex: index,
            //       isHover: true
            //     });
            //   }
            // }}
            // onMouseOut={() => {
            //   if (this.state.isTypeComplete) {
            //     this.setState({
            //       hoverIndex: -1,
            //       isHover: false
            //     });
            //   }
            // }}
            style={{
              width: "100%",
              height: "100%",
              overflow: "hidden",
              borderRadius: 5,
              textAlign: "center"
            }}
          >
            <Image
              fluid
              rounded
              style={{
                ...{ width: "100%", height: "100%", objectFit: "cover" }
              }}
              src={item.img}
            />
            <div
              class={"hover_bg"}
              style={{
                position: "absolute",
                left: 10,
                right: 10,
                top: 0,
                bottom: 0,
                borderRadius: 5,
                backgroundColor: "rgba(0,0,0,0.7)",
                visibility: "hidden"
              }}
            ></div>
            <div
              className="itemTitle"
              style={{
                color: "#ffffff",
                // fontFamily: "monospace",
                fontSize: 20,
                fontWeight: "bolder",
                position: "absolute",
                left: 40,
                right: 40,
                top: "35%",
                textAlign: "center",
                visibility: "hidden"
              }}
            >
              <span>{item.title}</span>
            </div>
          </div>
        </Col>
      );
    });
  };

  render() {
    return (
      <div style={{ position: "relative", width: "100%", height: "100%" }}>
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
          containerStyle={styles.categoryGroup}
          _updateTab={this._updateTab}
          selectIndex={this.state.index}
          btnTextArr={["All", "Mobile", "Web", "Others"]}
        />
        {!this.state.loading && (
          <Container
            fluid={true}
            style={{
              marginTop: 30,
              width: "100%"
            }}
          >
            <FlipMove className="row">{this._renderImages()}</FlipMove>
          </Container>
        )}
        {this.state.loading && (
          <div
            style={{
              position: "absolute",
              //   top: "50%",
              left: "50%",
              margin: "auto",
              zIndex: 999,
              top: 450
            }}
          >
            <Roller size={200} color="#000000" />
          </div>
        )}
      </div>
    );
  }
}

const styles = {
  typeBlackBg: {
    width: "100%",
    textAlign: "center",
    backgroundColor: "rgb(51,51,51)",
    height: 200
  },
  typeContainer: {
    width: "100%",
    textAlign: "center",
    fontFamily: "monospace",
    color: "#ffffff",
    fontSize: 20,
    height: 200,
    display: "flex",
    flexDirection: "column",
    zIndex: 999
  },
  categoryGroup: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  }
};

export default MainScreen;
