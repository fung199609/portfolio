import React from "react";
import Typing from "react-typing-animation";
import {
  Container,
  Col,
  Image,
  Card,
  ListGroup,
  Button,
  Modal,
  Carousel,
  ModalTitle
} from "react-bootstrap";
import CategoryGroup from "../../components/CategoryGroup";
import NavBar from "../../components/NavBar";
import localData from "../../assets/data/projects";
import FlipMove from "react-flip-move";
import YouTube from "react-youtube";

class MainScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      isTypeComplete: false,
      hoverIndex: -1,
      isHover: false,
      loading: true,
      showModal: false,
      selectedItem: null
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

  _renderStartAnimation = () => {
    return (
      <div
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: "#000000",
          opacity: this.state.loading ? 1 : 0,
          visibility: this.state.loading ? "visible" : "hidden",
          transition: "visibility 0s 1s, opacity 1s linear"
        }}
      >
        <Typing
          onFinishedTyping={() => {
            this.setState({
              isTypeComplete: true,
              loading: false
            });
          }}
          speed={100}
          hideCursor={false}
        >
          <div style={styles.startAnimationTypeContainer}>
            <div style={{ height: window.innerHeight / 2 - 100 }}></div>
            <span>I'm Andy Chan</span>
            <Typing.Delay ms="200" />
            <span>Mobile Apps Developer</span>
            <Typing.Delay ms="200" />
            <span>iOS & Android</span>
          </div>
        </Typing>
      </div>
    );
  };

  _renderTypingAnimation = () => {
    return (
      <div style={styles.typeBlackBg}>
        <div style={styles.typeContainer}>
          <div style={{ height: 50 }}></div>
          <span>I'm Andy Chan</span>
          <Typing.Delay ms="200" />
          <span>Mobile Apps Developer</span>
          <Typing.Delay ms="200" />
          <span>iOS & Android</span>
        </div>
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
            onMouseOver={() => {
              if (!this.state.isHover) {
                console.log("onMouseUp");
                this.setState({
                  hoverIndex: index,
                  isHover: true
                });
              }
            }}
            onMouseOut={() => {
              console.log("onMouseOut");
              this.setState({
                hoverIndex: -1,
                isHover: false
              });
            }}
            onClick={() => {
              console.log("item", item, index);
              this.setState({
                showModal: true,
                selectedItem: item
              });
            }}
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
                ...{ width: "100%", height: "100%", objectFit: "cover" },
                ...(this.state.isHover &&
                  this.state.hoverIndex === index && {
                    transform: "scale(1.2)",
                    transition: "all 0.5s ease 0s",
                    borderRadius: 5
                  })
              }}
              src={item.img}
            />

            <div
              className={"hover_bg"}
              style={{
                position: "absolute",
                left: 10,
                right: 10,
                top: 0,
                bottom: 0,
                borderRadius: 5,
                backgroundColor: "rgba(0,0,0,0.7)",
                visibility:
                  this.state.isHover && this.state.hoverIndex === index
                    ? "visible"
                    : "hidden"
              }}
            ></div>

            <div
              className="itemTitle"
              style={{
                color: "#ffffff",
                fontSize: 20,
                fontWeight: "bolder",
                position: "absolute",
                left: 40,
                right: 40,
                top: "35%",
                textAlign: "center",
                visibility:
                  this.state.isHover && this.state.hoverIndex === index
                    ? "visible"
                    : "hidden"
              }}
            >
              <span>{item.title}</span>
            </div>
          </div>
        </Col>
      );
    });
  };

  _renderContact = () => {
    return (
      <div
        style={{
          marginTop: 100,
          display: "flex",
          flexDirection: "column",
          width: "100%",
          alignItems: "center",
          backgroundColor: "rgb(245,245,245)",
          paddingTop: 40,
          paddingBottom: 40,
          paddingLeft: 60,
          paddingRight: 60,
          textAlign: "center"
        }}
      >
        <span style={{ fontSize: 25, marginBottom: 20 }}>Andy Chan</span>
        <span
          style={{
            marginBottom: 20,
            width: "80%",
            lineHeight: "30px",
            fontWeight: 300,
            fontSize: "16px",
            color: "#555"
          }}
        >
          {
            "A Mobile Apps Developer with an experience iOS and Android background of 2 years. A wide range of knowledge in meeting different requirements, designing and maintenance application based on different situation"
          }
        </span>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 40
          }}
        >
          <Image
            style={{ marginRight: 30 }}
            width={40}
            height={40}
            src={"/images/layouts/email_icon.png"}
            onClick={() => {
              window.location.href = "mailto:fung199609@gmail.com";
            }}
          />
          <Image
            width={45}
            height={45}
            src={"/images/layouts/linkedin_icon.png"}
            onClick={() => {
              window.open(
                "https://www.linkedin.com/in/tsz-fung-chan-629293158/"
              );
            }}
          />
          <Image
            style={{ marginLeft: 30 }}
            width={40}
            height={40}
            src={"/images/layouts/telegram_icon.png"}
            onClick={() => {
              alert("Coming Soon");
            }}
          />
        </div>
      </div>
    );
  };

  _renderModal = () => {
    let carouselItems = null;
    let responsibilities = null;
    if (
      this.state.selectedItem &&
      this.state.selectedItem.images &&
      this.state.selectedItem.responsibility
    ) {
      carouselItems = this.state.selectedItem.images.map(image => {
        return (
          <Carousel.Item style={{ height: 350, backgroundColor: "#000" }}>
            <img
              className="d-block w-100"
              src={image}
              alt="First slide"
              style={{ objectFit: "contain", height: "100%" }}
            />
          </Carousel.Item>
        );
      });
      responsibilities = this.state.selectedItem.responsibility.map(item => {
        return (
          <ul>
            <li style={{ marginTop: 10 }}>
              {item.title}
              {item.sub && (
                <ul>
                  {item.sub.map(sub => {
                    return <li style={{ marginTop: 10 }}>{sub}</li>;
                  })}
                </ul>
              )}
            </li>
          </ul>
        );
      });
    }

    return (
      <Modal
        show={this.state.showModal}
        centered
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        animation={true}
        onHide={() => {
          this.setState({
            selectIndex: -1,
            showModal: false
          });
        }}
      >
        <Card
          style={{
            width: "100%",
            padding: 20
          }}
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              {this.state.selectedItem ? this.state.selectedItem.title : ""}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body
            style={{ overflowY: "auto", maxHeight: window.screen.height * 0.7 }}
          >
            {this.state.selectedItem && this.state.selectedItem.youtubeId && (
              <YouTube
                videoId={this.state.selectedItem.youtubeId}
                opts={{ width: "100%" }}
              />
            )}
            <Carousel interval={0} style={{ marginTop: 40, marginBottom: 40 }}>
              {carouselItems}
            </Carousel>
            <p style={{ fontSize: 18, fontWeight: 700 }}>Description</p>
            <p style={{ lineHeight: "30px", marginBottom: 40 }}>
              {this.state.selectedItem ? this.state.selectedItem.desc : ""}
            </p>
            <p style={{ fontSize: 18, fontWeight: 700 }}>Responsibility</p>
            {responsibilities}
          </Modal.Body>
        </Card>
      </Modal>
    );
  };

  render() {
    return (
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%"
        }}
      >
        <script src="https://unpkg.com/react/umd/react.production.min.js" />
        {!this.state.loading && (
          <React.Fragment>
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
            <Container
              fluid={true}
              style={{
                marginTop: 30,
                width: "100%",
                minHeight: 600
              }}
            >
              <FlipMove className="row">{this._renderImages()}</FlipMove>
            </Container>
            {this._renderContact()}
          </React.Fragment>
        )}
        {this._renderStartAnimation()}
        {this._renderModal()}
      </div>
    );
  }
}

const styles = {
  startAnimationTypeContainer: {
    width: "100%",
    textAlign: "center",
    fontFamily: "monospace",
    color: "#ffffff",
    fontSize: 25,
    height: window.innerHeight,
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#000000",
    zIndex: 999
  },
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
