import { connect } from "react-redux";
import Child from "./Child";
function childActionCreator() {
  return {
    type: "ChangeState"
  };
}
export default connect(
  undefined,
  dispatch => ({
    changeAction: () => dispatch(childActionCreator())
  })
)(Child);
