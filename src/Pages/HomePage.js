import React from "react";
import Typing from "react-typing-animation";
import {
    Container,
    Col,
    Image,
    Row,
} from "react-bootstrap";
import NavBar from "../components/NavBar";
import ProjectPage from "./ProjectPage";
import ProfilePage from "./ProfilePage";
import styles from "./styles/HomePage"

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isTypeComplete: false,
            loading: true,
            pageIndex: 0,
            resumes: null,
            projects: null,
            contact: null
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
            <div style={{
                ...{
                    opacity: this.state.loading ? 1 : 0,
                    visibility: this.state.loading ? "visible" : "hidden"
                }, ...styles.animationBgContainer
            }}>
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
        const contactData = this.state.contact;
        console.log("contactData", contactData)
        return (
            <div
                ref={this.contactRef}
                style={styles.bottomContactContainer}
            >
                <span style={styles.contactName}>{contactData.name}</span>
                <Container>
                    <Row>
                        <Col md={2} xs={1}></Col>
                        <Col md={8} xs={10}>
                            <span style={styles.contactDesc}>
                                {
                                    contactData.desc
                                }
                            </span>
                        </Col>
                        <Col md={2} xs={1}></Col>
                    </Row>
                </Container>

                <div
                    style={styles.contactThreeIconRow}
                >
                    <Image
                        style={styles.leftcontactIcon}
                        width={40}
                        height={40}
                        src={process.env.PUBLIC_URL + "/images/layouts/email_icon.png"}
                        onClick={() => {
                            window.location.href = contactData.contact.email;
                        }}
                    />
                    <Image
                        style={styles.middleContactIcon}
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
                        style={styles.rightcontactIcon}
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

    _fetchData = async () => {
        try {
            let response = await fetch(process.env.PUBLIC_URL + '/portfolio.json');
            let jsonResponse = await response.json();
            this.setState({
                resumes: jsonResponse.resumes,
                projects: jsonResponse.projects,
                contact: jsonResponse.contact
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
                        {this.state.pageIndex === 0 && <ProjectPage projects={this.state.projects} />}
                        {this.state.pageIndex === 1 && <ProfilePage resumes={this.state.resumes} />}
                        {this.state.pageIndex === 0 && this._renderContact()}
                    </React.Fragment>
                )}
                {this._renderStartAnimation()}
            </div>
        );
    }
}

export default HomePage;
