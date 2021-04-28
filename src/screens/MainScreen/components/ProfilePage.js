import React, { Component, Fragment } from "react";
import { Container, Row, Col, Image, Card } from "react-bootstrap";
import localData from "../../../assets/data/experience";
import { isMobile } from "react-device-detect";

class ProfilePage extends Component {
  constructor(props) {
    super(props);
  }

  _renderWorkItem = () => {
    return localData.works.map((item, index) => {
      return (
        <Row style={{ marginTop: index === 0 ? 30 : 0, position: "relative" }}>
          <Col md={2} xs={4}>
            <Image width={100} src={item.img} thumbnail />
          </Col>
          <Col md={10} xs={6}>
            <Row>
              <span style={{ fontWeight: 600 }}>{item.role}</span>
            </Row>
            <Row>
              <span>{item.company}</span>
            </Row>
            <Row>
              <span style={{ color: "rgba(0,0,0,0.6)" }}>{item.time}</span>
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
                      style={{
                        paddingRight: 10,
                        fontSize: 15,
                        fontWeight: 300,
                        marginBottom: 10
                      }}
                    >
                      <span>{desc}</span>
                    </Row>
                  );
                })}
              </Col>
            )}

            {isMobile && <div style={{ height: 50 }} />}
          </Col>
          {index < localData.works.length - 1 && (
            <div
              style={{
                position: "absolute",
                top: 0,
                bottom: 0,
                left: 120 / 2,
                width: 1,
                backgroundColor: "rgba(0,0,0,0.3)",
                zIndex: -1
              }}
            />
          )}
        </Row>
      );
    });
  };

  _renderSkills = () => {
    return localData.skills.map(item => {
      return (
        <Col md={4} xs={12} style={{ marginBottom: 40 }}>
          <Card
            style={{
              height: 300,
              boxShadow: "1px 4px 8px rgba(0, 0, 0, 0.1)"
            }}
          >
            <div style={{ position: "relative" }}>
              <Card.Img
                height={110}
                src={item.img}
                style={{ objectFit: "cover" }}
              />
              <div
                style={{
                  position: "absolute",
                  width: "100%",
                  top: 0,
                  bottom: 0,
                  backgroundColor: "rgba(0,0,0,0.5)"
                }}
              >
                <div
                  style={{
                    color: "#fff",
                    position: "absolute",
                    textAlign: "center",
                    width: "100%",
                    top: "40%",
                    fontSize: 22
                  }}
                >
                  {item.name}
                </div>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                fontSize: 15,
                alignItems: "center",
                lineHeight: "30px",
                paddingTop: 20
              }}
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
        <div style={{ height: 100 }}></div>
        <div style={{ fontSize: 22, textAlign: "center" }}>Experiences</div>
        <Container
          style={{ paddingLeft: 20, paddingRight: 20, marginBottom: 60 }}
        >
          {this._renderWorkItem()}
        </Container>
        <div style={{ backgroundColor: "rgb(245, 245, 245)", paddingTop: 40 }}>
          <div style={{ fontSize: 22, textAlign: "center" }}>
            Skills Overview
          </div>
          <Container>
            <Row style={{ marginTop: 20, marginBottom: isMobile ? 30 : 80 }}>
              <Col md={2} xs={1}></Col>
              <Col md={8} xs={10} style={{ textAlign: "center" }}>
                <span style={{ fontWeight: 300 }}>
                3 Years Working Experience / Android & iOS Native / React Native / Flutter
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

export default ProfilePage;
