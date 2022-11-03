import React from "react";
import Prototype from "prop-types";
class Name extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    console.log("After component rendering");
  }
  shouldComponentUpdate() {
    return false;
  }
  render() {
    return <p>{this.props.name}</p>;
  }
}
// Name.defaultProps = {
//   name: "Default",
// };
Name.propTypes = {
  name: Prototype.string,
};

export default Name;
