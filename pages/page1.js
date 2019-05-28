import Nav from "../components/nav";
import Head from "../components/head";
import Btn from "../components/buttonComponent";
import Link from "next/link";
import { connect } from "react-redux";

const Page1 = ({ opacity, color, changeColor, turnOnLight, turnOffLight }) => {
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
      <Btn onClick2={changeColor} title="Change Color" />
      <Btn onClick2={turnOnLight} title="Turn On Light" />
      <Btn onClick2={turnOffLight} title="Turn Off Light" />
      <span style={{ color: color, fontWeight: "bold" }}>Color: {color}</span>
      <span> | Status: {currentState}</span>
      <p>
        <Link href="/page2">
          <a>View Light</a>
        </Link>
      </p>
    </div>
  );
};

export default connect(
  state => ({
    color: state.colorReducer.color,
    opacity: state.colorReducer.opacity,
    state: state
  }),
  dispatch => ({
    changeColor: () => {
      dispatch({
        type: "CHANGE_COLOR"
      });
    },

    turnOnLight: () => {
      dispatch({
        type: "TURN_ON_LIGHT"
      });
    },

    turnOffLight: () => {
      dispatch({
        type: "TURN_OFF_LIGHT"
      });
    }
  })
)(Page1);
