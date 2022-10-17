import React from "react";
import Typing from "react-typing-animation";
import {
  Container,
  Col,
  Image,
  Row,
} from "react-bootstrap";
import NavBar from "../../components/NavBar";
import ProjectPage from "./components/ProjectPage";
import ProfilePage from "./components/ProfilePage";

class MainScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isTypeComplete: false,
      loading: true,
      pageIndex: 0,
      resumes: null,
      projects: null,
      information: null
    };
    this.homeRef = React.createRef();
    this.projectRef = React.createRef();
    this.contactRef = React.createRef();
    this._fetchData();
  }

  _onClickNav = (index) => {
    if (index !== 2) {
      this.setState({
        pageIndex: index,
      });
    }
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
          transition: "visibility 0s 1s, opacity 1s linear",
        }}
      >
        <Typing
          onFinishedTyping={() => {
            this.setState({
              isTypeComplete: true,
              loading: false,
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

  _renderContact = () => {
    const contactData = this.state.information;
    return (
      <div
        ref={this.contactRef}
        style={{
          marginTop: 100,
          display: "flex",
          flexDirection: "column",
          width: "100%",
          alignItems: "center",
          backgroundColor: "rgb(245,245,245)",
          paddingTop: 40,
          paddingBottom: 40,
          textAlign: "center",
        }}
      >
        <span style={{ fontSize: 25, marginBottom: 20 }}>{contactData.name}</span>
        <Container>
          <Row>
            <Col md={2} xs={1}></Col>
            <Col md={8} xs={10}>
              <span
                style={{
                  marginBottom: 20,
                  lineHeight: "30px",
                  fontWeight: 300,
                  fontSize: "16px",
                  color: "#555",
                }}
              >
                {
                  contactData.desc
                }
              </span>
            </Col>
            <Col md={2} xs={1}></Col>
          </Row>
        </Container>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 40,
          }}
        >
          <Image
            style={{ marginRight: 30, cursor: "pointer" }}
            width={40}
            height={40}
            src={process.env.PUBLIC_URL + "/images/layouts/email_icon.png"}
            onClick={() => {
              window.location.href = contactData.contact.email;
            }}
          />
          <Image
            style={{ cursor: "pointer" }}
            width={45}
            height={45}
            src={process.env.PUBLIC_URL + "/images/layouts/linkedin_icon.png"}
            onClick={() => {
              window.open(
                contactData.contact.linkedin
              );
            }}
          />
          <Image
            style={{ marginLeft: 30, cursor: "pointer" }}
            width={40}
            height={40}
            src={process.env.PUBLIC_URL + "/images/layouts/telegram_icon.png"}
            onClick={() => {
              window.location.href = contactData.contact.tg;
            }}
          />
        </div>
      </div>
    );
  };

  _fetchData = async() => {
    try {
      let response = await fetch('https://fung199609.github.io/portfolio/portfolio.json');
      let jsonResponse = await response.json();
      this.setState({
        resumes: jsonResponse.resumes,
        projects: jsonResponse.projects,
        information: jsonResponse.information
      })
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    return (
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
        }}
      >
        <script src="https://unpkg.com/react/umd/react.production.min.js" />
        {!this.state.loading && (
          <React.Fragment> 
            <NavBar
              title="PORTFOLIO"
              navTextArr={["PROJECTS", "PROFILE"]}
              navUrlArr={["", ""]}
              onClickNav={this._onClickNav}
            />
            {this.state.pageIndex === 0 && <ProjectPage projects={this.state.projects}/>}
            {this.state.pageIndex === 1 && <ProfilePage resumes={this.state.resumes}/>}
            {this.state.pageIndex === 0 && this._renderContact()}
          </React.Fragment>
        )}
        {this._renderStartAnimation()}
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
    zIndex: 999,
  },
  typeBlackBg: {
    width: "100%",
    textAlign: "center",
    backgroundColor: "rgb(51,51,51)",
    height: 200,
    marginTop: 56,
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
    zIndex: 999,
  },
  categoryGroup: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  itemContainer: {
    paddingLeft: 10,
    paddingRight: 10,
    marginBottom: 10,
    borderRadius: 5,
    overflow: "hidden",
    cursor: "pointer",
  },
  itemImageContainer: {
    width: "100%",
    height: "100%",
    overflow: "hidden",
    borderRadius: 5,
    textAlign: "center",
  },
  itemHoverBg: {
    position: "absolute",
    left: 10,
    right: 10,
    top: 0,
    bottom: 0,
    borderRadius: 5,
    backgroundColor: "rgba(0,0,0,0.7)",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "0px 30px",
  },
};

export default MainScreen;
