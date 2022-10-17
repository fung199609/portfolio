import React, { Component } from "react";
import CategoryButton from "./CategoryButton";

class CategoryGroup extends Component {
  _renderButtons = () => {
    return this.props.btnTextArr.map((text, index) => {
      return (
        <CategoryButton
          text={text}
          active={this.props.selectIndex === index}
          onClick={() => {
            this.props._updateTab(index);
          }}
        />
      );
    });
  };
  render() {
    return (
      <div style={this.props.containerStyle}>{this._renderButtons()}</div>
    );
  }
}

CategoryGroup.defaultProps = {
  containerStyle: {},
  _updateTab: index => { },
  selectIndex: -1,
  btnTextArr: []
};

export default CategoryGroup;
