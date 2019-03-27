const initailState = false;
const childReducer = (state = initailState, action) => {
  if (action.type === "ChangeState") {
    return !state;
  } else {
    return state;
  }
};

export default childReducer;
