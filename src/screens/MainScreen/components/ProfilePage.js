import React, { Component, Fragment } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
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
                    style={{
                      marginTop: 10,
                      paddingRight: 10,
                      fontSize: 15,
                      fontWeight: 300,
                      marginBottom: 40,
                    }}
                  >
                    {item.desc.map(desc => {
                      return <span>{desc}</span>;
                    })}
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
            <span style={{ marginLeft: 20, fontSize: 22 }}>Experiences</span>
            <Container style={{ marginLeft: 20, marginRight: 20 }}>
              {this._renderWorkItem()}
            </Container>
            {/* <span style={{ marginLeft: 20, fontSize: 22 }}>Education</span> */}
          </Fragment>
        );
    }
}

export default ProfilePage;