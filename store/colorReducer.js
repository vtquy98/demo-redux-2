export const TURN_ON_LIGHT = "TURN_ON_LIGHT";
export const TURN_OFF_LIGHT = "TURN_OFF_LIGHT";
export const CHANGE_COLOR = "CHANGE_COLOR";

const initSate = {
  color: "BLACK",
  opacity: 1
};

const getRandomColor = () => {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const colorReducer = (state = initSate, { type, payload }) => {
  if (type === TURN_ON_LIGHT) {
    return {
      ...state,
      opacity: 1
    };
  }

  if (type === TURN_OFF_LIGHT) {
    return {
      ...state,
      opacity: 0
    };
  }

  if (type === CHANGE_COLOR) {
    //console.log("test");
    return {
      ...state,
      color: getRandomColor()
    };
  }

  return { ...state };
};

export default colorReducer;
