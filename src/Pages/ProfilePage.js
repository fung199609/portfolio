import React, { Component, Fragment } from "react";
import { Container, Row, Col, Image, Card } from "react-bootstrap";
import { isMobile } from "react-device-detect";
import styles from "./styles/ProfilePage"

class ProfilePage extends Component {
    constructor(props) {
        super(props);
    }

    _renderWorkItem = () => {
        const localData = this.props.resumes;
        return localData.works.map((item, index) => {
            return (
                <Row style={{ marginTop: index === 0 ? 30 : 0, position: "relative" }}>
                    <Col md={2} xs={4}>
                        <Image width={100} src={item.img} thumbnail />
                    </Col>
                    <Col md={10} xs={6}>
                        <Row>
                            <span style={styles.jobText}>{item.role}</span>
                        </Row>
                        <Row>
                            <span>{item.company}</span>
                        </Row>
                        <Row>
                            <span style={styles.jobPeriod}>{item.time}</span>
                        </Row>

                        {!isMobile && (
                            <Col
                                className="xs-hidden"
                                xs={0}
                                md={12}
                                style={{ marginTop: 10, marginBottom: 40, marginLeft: -10 }}
                            >
                                {item.desc.map(desc => {
                                    return (
                                        <Row
                                            style={styles.jobDesc}
                                        >
                                            <span>{desc}</span>
                                        </Row>
                                    );
                                })}
                            </Col>
                        )}

                        {isMobile && <div style={styles.mobileJobExtraSpace} />}
                    </Col>
                    {index < localData.works.length - 1 && (
                        <div
                            style={styles.notLastWorkItemStyle}
                        />
                    )}
                </Row>
            );
        });
    };

    _renderSkills = () => {
        const localData = this.props.resumes;
        return localData.skills.map(item => {
            return (
                <Col md={4} xs={12} style={{ marginBottom: 40 }}>
                    <Card
                        style={styles.skillSetCardStyle}
                    >
                        <div style={{ position: "relative" }}>
                            <Card.Img
                                height={110}
                                src={item.img}
                                style={{ objectFit: "cover" }}
                            />
                            <div
                                style={styles.skillTopStyle}
                            >
                                <div
                                    style={styles.skillTopTitle}
                                >
                                    {item.name}
                                </div>
                            </div>
                        </div>
                        <div
                            style={styles.skillBottomStyle}
                        >
                            {item.desc.map(skill => {
                                return <span>{skill}</span>;
                            })}
                        </div>
                    </Card>
                </Col>
            );
        });
    };

    render() {
        return (
            <Fragment>
                <div style={styles.topSpace}></div>
                <div style={styles.experienceText}>Experiences</div>
                <Container
                    style={styles.workItemsContainer}
                >
                    {this._renderWorkItem()}
                </Container>
                <div style={{ backgroundColor: "rgb(245, 245, 245)", paddingTop: 40 }}>
                    <div style={styles.skillOverviewText}>
                        Skills Overview
                    </div>
                    <Container>
                        <Row style={{ marginTop: 20, marginBottom: isMobile ? 30 : 80 }}>
                            <Col md={2} xs={1}></Col>
                            <Col md={8} xs={10} style={{ textAlign: "center" }}>
                                <span style={{ fontWeight: 300 }}>
                                    {this.props.resumes.desc}
                                </span>
                            </Col>
                            <Col md={2} xs={1}></Col>
                        </Row>
                        <Row style={{ paddingLeft: 40, paddingRight: 40 }}>
                            {this._renderSkills()}
                        </Row>
                    </Container>
                </div>
            </Fragment>
        );
    }
}

ProfilePage.defaultProps = {
    resumes: {
        works: [],
        skills: []
    }
};

export default ProfilePage;