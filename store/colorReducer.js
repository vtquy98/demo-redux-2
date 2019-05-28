export const TURN_ON_LIGHT = "TURN_ON_LIGHT";
export const TURN_OFF_LIGHT = "TURN_OFF_LIGHT";
export const CHANGE_COLOR = "CHANGE_COLOR";
export const INCREASE_BRIGHTNESS = "INCREASE_BRIGHTNESS";
export const DECREASE_BRIGHTNESS = "DECREASE_BRIGHTNESS";

const initSate = {
  color: "BLACK",
  opacity: 1,
  brightness: 1
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

  if (type === INCREASE_BRIGHTNESS) {
    if (state.brightness + 0.1 <= 1) {
      return { ...state, brightness: state.brightness + 0.1 };
    }
    return { ...state };
  }

  if (type === DECREASE_BRIGHTNESS) {
    // console.log(DECREASE_BRIGHTNESS);
    if (state.opacity - 0.1 >= 0) {
      return { ...state, brightness: state.brightness - 0.1 };
    } else {
      return { ...state };
    }
  }

  return { ...state };
};

export default colorReducer;
