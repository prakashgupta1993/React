import React from "react";

const withCounter = (WrappedComponent) => {
  class WithCounter extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        count: 0,
      };
    }

    clickHandler = () => {
      this.setState((prevState) => {
        return { count: prevState.count + 1 };
      });
    };
    render() {
      return (
        <WrappedComponent
          count={this.state.count}
          countHandler={this.clickHandler}
          {...this.props}
        ></WrappedComponent>
      );
    }
  }
  return WithCounter;
};
export default withCounter;
