import Nav from "../components/nav";
import Head from "../components/head";
import Btn from "../components/buttonComponent";
import Link from "next/link";
import { connect } from "react-redux";
import {
  TURN_ON_LIGHT,
  TURN_OFF_LIGHT,
  CHANGE_COLOR,
  INCREASE_BRIGHTNESS,
  DECREASE_BRIGHTNESS
} from "../store/colorReducer";

const Page1 = ({
  opacity,
  color,
  changeColor,
  turnOnLight,
  turnOffLight,
  brightness,
  increaseBrightness,
  decreaseBrightness
}) => {
  let currentState;
  if (opacity == 1) {
    currentState = "ON";
  }
  if (opacity == 0) {
    currentState = "OFF";
  }
  return (
    <div>
      <Head title="Page 1" />
      <Nav />
      {/* // <p> color of the light</p> */}
      <div
        style={{
          textAlign: "center",
          display: "flex",
          justifyContent: "center"
        }}
      >
        <Btn onClick2={changeColor} title="Change Color" />
        <Btn onClick2={turnOnLight} title="Turn On Light" />
        <Btn onClick2={increaseBrightness} title="+ Brightness" />
        <Btn onClick2={decreaseBrightness} title="- Brightness" />
        <Btn onClick2={turnOffLight} title="Turn Off Light" />
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center"
        }}
      >
        <span style={{ color: color, fontWeight: "bold" }}>Color: {color}</span>
        <span> | Status: {currentState}</span>
        <span> | Brightness: {brightness}</span>
        <span>
          <Link href="/page2">
            <a>| View Light</a>
          </Link>
        </span>
      </div>
    </div>
  );
};

export default connect(
  state => ({
    //day giong nhu la "selector ". la function ma chi ro phan nao cua state ma component can nhu props
    //map state to props
    color: state.colorReducer.color,
    opacity: state.colorReducer.opacity,
    brightness: state.colorReducer.brightness
    // state: state
  }),
  dispatch => ({
    //map action to props
    changeColor: () => {
      dispatch({
        type: CHANGE_COLOR
      });
    },

    turnOnLight: () => {
      dispatch({
        type: TURN_ON_LIGHT
      });
    },

    turnOffLight: () => {
      dispatch({
        type: TURN_OFF_LIGHT
      });
    },

    increaseBrightness: () => {
      dispatch({
        type: INCREASE_BRIGHTNESS
      });
    },
    decreaseBrightness: () => {
      dispatch({
        type: DECREASE_BRIGHTNESS
      });
    }
  })
)(Page1);
