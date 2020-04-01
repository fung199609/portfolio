import React, { Component, Fragment } from "react";
import { Container, Row, Col, Image, Card } from "react-bootstrap";
import localData from '../../../assets/data/experience';

class ProfilePage extends Component {
    constructor(props){
        super(props);
    }

    _renderWorkItem = () => {
        return localData.works.map((item, index)=>{
            return (
              <Row style={{ marginTop: index === 0 ? 30 : 0, position: 'relative' }}>
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
                    <span style={{ color: 'rgba(0,0,0,0.6)' }}>{item.time}</span>
                  </Row>
                  <Row
                    className="xs-hidden"
                    style={{
                      marginTop: 10,
                      paddingRight: 10,
                      fontSize: 15,
                      fontWeight: 300,
                      marginBottom: 40,
                    }}
                  >
                    <Col className="xs-hidden" xs={0} md={12} style={{ marginLeft: -10 }}>
                      {item.desc.map(desc => {
                        return <span>{desc}</span>;
                      })}
                    </Col>
                  </Row>
                </Col>
                {index < localData.works.length - 1 && (
                  <div
                    style={{
                      position: 'absolute',
                      top: 0,
                      bottom: 0,
                      left: 120 / 2,
                      width: 1,
                      backgroundColor: 'rgba(0,0,0,0.3)',
                      zIndex: -1,
                    }}
                  />
                )}
              </Row>
            );
        })
    }

    render(){
        return (
          <Fragment>
            <div style={{ height: 100 }}></div>
            <div style={{ fontSize: 22, textAlign: 'center' }}>Experiences</div>
            <Container style={{ marginLeft: 20, marginRight: 20 }}>
              {this._renderWorkItem()}
            </Container>
            <div style={{ fontSize: 22, textAlign: 'center' }}>Skills Overview</div>
            <Row style={{ marginTop: 20, marginBottom: 80 }}>
              <Col md={2} xs={1}></Col>
              <Col md={8} xs={10} style={{ textAlign: 'justify' }}>
                <span style={{ fontWeight: 300 }}>
                  A Mobile Apps Developer with an experience iOS and Android background of 2 years.
                  A wide range of knowledge in meeting different requirements, designing and
                  maintenance application based on different situation.
                </span>
              </Col>
              <Col md={2} xs={1}></Col>
            </Row>
            <Row style={{ paddingLeft: 40, paddingRight: 40 }}>
              <Col>
                <Card style={{ height: 250, boxShadow: '1px 4px 8px rgba(0, 0, 0, 0.1)' }}>
                  <div style={{ position: 'relative' }}>
                    <Card.Img
                      height={110}
                      src={
                        'https://www.ilounge.com/wp-content/uploads/2019/10/Mobile-App-Frameworks-That-Will-Trend-in-2020.png'
                      }
                    />
                    <div
                      style={{
                        position: 'absolute',
                        width: '100%',
                        top: 0,
                        bottom: 0,
                        backgroundColor: 'rgba(0,0,0,0.3)',
                      }}
                    >
                      <div
                        style={{
                          color: '#fff',
                          position: 'absolute',
                          textAlign: 'center',
                          width: '100%',
                          top: '40%',
                          fontSize: 22,
                        }}
                      >
                        Frontend
                      </div>
                    </div>
                  </div>
                </Card>
              </Col>
              <Col>
                <Card style={{ height: 250, boxShadow: '1px 4px 8px rgba(0, 0, 0, 0.1)' }}>
                  <div style={{ position: 'relative' }}>
                    <Card.Img
                      height={110}
                      src={
                        'https://virtualizationreview.com/-/media/ECG/VirtualizationReview/Images/IntroImages2016/0716vrm_DansTake.jpg'
                      }
                    />
                    <div
                      style={{
                        position: 'absolute',
                        width: '100%',
                        top: 0,
                        bottom: 0,
                        backgroundColor: 'rgba(0,0,0,0.3)',
                      }}
                    >
                      <div
                        style={{
                          color: '#fff',
                          position: 'absolute',
                          textAlign: 'center',
                          width: '100%',
                          top: '40%',
                          fontSize: 22,
                        }}
                      >
                        Backend
                      </div>
                    </div>
                  </div>
                </Card>
              </Col>
              <Col>
                <Card style={{ height: 250, boxShadow: '1px 4px 8px rgba(0, 0, 0, 0.1)' }}>
                  <div style={{ position: 'relative' }}>
                    <Card.Img
                      height={110}
                      src={
                        'https://news.efinancialcareers.com/binaries/content/gallery/efinancial-careers/articles/2019/03/programmer.jpg'
                      }
                    />
                    <div
                      style={{
                        position: 'absolute',
                        width: '100%',
                        top: 0,
                        bottom: 0,
                        backgroundColor: 'rgba(0,0,0,0.3)',
                      }}
                    >
                      <div
                        style={{
                          color: '#fff',
                          position: 'absolute',
                          textAlign: 'center',
                          width: '100%',
                          top: '40%',
                          fontSize: 22,
                        }}
                      >
                        Others
                      </div>
                    </div>
                  </div>
                </Card>
              </Col>
            </Row>
          </Fragment>
        );
    }
}

export default ProfilePage;