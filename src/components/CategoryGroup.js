import React, { Component } from "react";
import { Col, Row, Container } from "react-bootstrap";
import CategoryButton from "./CategoryButton";

class CategoryGroup extends Component {
  _renderButtons = () => {
    return this.props.btnTextArr.map((text, index) => {
      return (
        // <Col>
        <CategoryButton
          text={text}
          active={this.props.selectIndex === index}
          onClick={() => {
            this.props._updateTab(index);
          }}
        />
        // </Col>
      );
    });
  };
  render() {
    return (
      // <Container
      //   className="d-md-block d-none"
      //   style={this.props.containerStyle}
      // >
      //   <Row style={{ alignSelf: "center", justifySelf: "center" }}>
      <div style={this.props.containerStyle}>{this._renderButtons()}</div>

      //   </Row>
      // </Container>
    );
  }
}

CategoryGroup.defaultProps = {
  containerStyle: {},
  _updateTab: index => {},
  selectIndex: -1,
  btnTextArr: []
};

export default CategoryGroup;
